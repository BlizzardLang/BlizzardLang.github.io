module.exports = {
    // Site Config
    head: [
        ['meta', { name: 'author', content: 'Bradley Myers' }],
        ['meta', { name: 'copyright', content: `Copyright (c) ${new Date().getFullYear()} Bradley Myers. All rights reserved.` }],
        ['link', { rel: 'stylesheet', href: '/styles/bzz-colors.css' }]
    ],
    locales: {
        '/': {
            lang: 'en-US',
            selectLanguageName: 'English',
            title: 'Blizzard Docs',
            description: 'The documentation for the Blizzard Programming Language',
        }
    },

    // Theme Config
    themeConfig: {
        logo: '/img/Blizzard_Icon_128x128.png',

        repo: 'BlizzardLang',
        docsRepo: 'BlizzardLang/BlizzardLang.github.io',
        docsBranch: 'master',
        docsDir: 'docs'
    },

    // Plugin Config
    plugins: [
        require('./plugins/bzzCodeHighlighting.js')
    ]
}
