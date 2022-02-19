module.exports = {
    // Site Config
    head: [
        ['meta', { name: 'author', content: 'Bradley Myers' }],
        ['meta', { name: 'copyright', content: `Copyright (c) ${new Date().getFullYear()} Bradley Myers. All rights reserved.` }],
        ['link', { rel: 'stylesheet', href: '/styles/bzz-colors.css' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' }],
        ['link', { rel: 'x-icon', type: 'image/ico', sizes: '48x48', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }]
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
        logo: '/img/Blizzard_Icon_128x128.png',

        repo: 'BlizzardLang',
        docsRepo: 'BlizzardLang/BlizzardLang.github.io',
        docsBranch: 'master',
        docsDir: 'docs',

        sidebar: [
            { text: 'Introduction', link: '/' },
            { text: 'Getting Started', link: '/getting-started', children: [
                { text: 'Installation', link: '/getting-started/installation' },
                { text: 'Code Editors', link: '/getting-started/editors' }
            ]}
        ]
    },

    // Plugin Config
    plugins: [
        require('./plugins/bzzCodeHighlighting.js')
    ]
}
