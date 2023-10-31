// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    typescript: {strict: true,},
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/strapi'
    ],
    plugins: ['./plugins/markdown.ts'],
    strapi: {url: process.env.STRAPI_URL || 'https://api.shots-arw.de'},
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'nuxt-color-mode'
    },
    css: [
        "/assets/all.css",
        "/assets/fonts.css",
        "/assets/html.css",
    ],
    app: {
        head: {
            title: 'shots.arw',
            link: [
                {rel: 'icon', href: '/favicon.ico'},
                {rel: 'shortcut icon', href: '/favicon/favicon.ico', type: 'image/x-icon'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png'},
                {rel: 'manifest', href: '/favicon/site.webmanifest'},
                {rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#3ec4d6'},
                {rel: 'shortcut icon', href: '/favicon/favicon.ico'},
            ],
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'msapplication-TileColor', content: '#f9f9f9'},
                {name: 'msapplication-config', content: '/favicon/browserconfig.xml'},
                {name: 'theme-color', content: '#f9f9f9'},
            ],
        },
    }
});