module.exports = {
    extendsPage: (page) => {
        let html = page.contentRendered;
        [...html.matchAll(/<pre v-pre class="language-bzz"><code>(?<code>(.*|\r?\n)*)<\/code><\/pre>/g)].forEach(block => {
            html = html.replace(block.groups.code, highlightBlizzardCode(block.groups.code));
        });
        page.contentRendered = html;
    }
};

/**
 * Highlights the provided code by wrapping the appropriate sections in stylized span elements
 * @param {string} code The code to highlight
 * @returns The code with stylized spans for highlighting
 */
function highlightBlizzardCode(code) {
    // Decode html characters like &quot; into their represented characters
    code = decodeHTMLEntities(code);

    // Add styled span tags around highlighted content
    return code
        .replace(/(\/\*(\*(?!\/)|[^*])*\*\/)/g, '<span class="bzz-comment">$1</span>') // Block comment
        .replace(/(\/\/.*)/g, '<span class="bzz-comment">$1</span>') // Line comment
        .replace(/(?<!class=)\"((?!\>)[^\"]*)\"/g, '<span class="bzz-string">$1</span>') // String literal
        .replace(/(-?[0-9]*\.[0-9]+)/g, '<span class="bzz-number">$1</span>') // Decimal numbers
        .replace(/(-?[0-9]+)/g, '<span class="bzz-number">$1</span>') // Integer numbers
        .replace(/(str(?!i)|int|dec)/g, '<span class="bzz-type">$1</span>') // Type keywords
        .replace(/([a-zA-Z_][a-zA-Z0-9_]*)\(((?!\)).*)?\)/g, `<span class="bzz-function-call">$1</span>($2)`); // Function calls
}

/**
 * @param {string} text The HTML encoded string to decode
 * @returns The provided string with resolved symbols
 */
function decodeHTMLEntities(text) {
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
}
