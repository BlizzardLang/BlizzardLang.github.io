const defaultLangsShiki = require('@vuepress/plugin-shiki/node_modules/shiki/dist').BUNDLED_LANGUAGES.map(l => l.id);
const blizzardLangShiki = {
    id: "blizzard",
    scopeName: "source.bzz",
    grammar: require('./tmLanguage/blizzard-1_0_0.tmLanguage.json'),
    aliases: ['bzz']
}

module.exports = {
    // Site Config
    head: [
        ['meta', { name: 'author', content: 'Bradley Myers' }],
        ['meta', { name: 'copyright', content: `Copyright (c) ${new Date().getFullYear()} Bradley Myers. All rights reserved.` }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icon/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/icon/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/icon/favicon-16x16.png' }],
        ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['meta', { name: 'theme-color', content: '#22272e' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#1A1E24' }],
        ['meta', { name: 'msapplication-TileColor', content: '#22272e' }],
        ['meta', { name: 'msapplication-config', content: '/img/icon/browserconfig.xml' }],
        ['meta', { name: 'mask-icon', href: '/img/icon/safari-pinned-tab.svg', color: '#1f85b1' }]
    ],
    locales: {
        '/': {
            lang: 'en-US',
            selectLanguageName: 'English',
            title: 'Blizzard Docs',
            description: 'The documentation for the Blizzard Programming Language'
        }
    },

    // Theme Config
    themeConfig: {
        logo: '/img/icon/Blizzard_Icon_128x128.png',

        repo: 'BlizzardLang',
        docsRepo: 'BlizzardLang/BlizzardLang.github.io',
        docsBranch: 'master',
        docsDir: 'docs',

        sidebar: [
            { text: 'Introduction', link: '/' },
            { text: 'Getting Started', link: '/getting-started', children: [
                { text: 'Installation', link: '/getting-started/installation' },
                { text: 'Code Editors', link: '/getting-started/editors' },
                { text: 'Hello World', link: '/getting-started/hello-world' }
            ]},
            { text: 'Language Reference', link: '/language', children: [
                { text: 'Types', link: '/language/types' },
                { text: 'Operators', link: '/language/operators' },
                { text: 'Functions', link: '/language/functions' },
                { text: 'Comments', link: '/language/comments' }
            ]}
        ]
    },

    // Plugin Config
    plugins: [
        ['@vuepress/pwa', { skipWaiting: true }],
        ['@vuepress/shiki', {
            theme: 'dark-plus',
            langs: [
                ...defaultLangsShiki, // Load the default languages
                blizzardLangShiki // Load the custom Blizzard language
            ]
        }]
    ],
}
