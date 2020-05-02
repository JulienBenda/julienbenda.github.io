export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
    head: {
        title: process.env.npm_package_name || '',
        titleTemplate: 'CYBER LAB',
        // titleTemplate: '%s - CYBER LAB',
        htmlAttrs: {
            prefix: 'og: http://ogp.me/ns#',
            lang: 'ja'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'CYBER LAB' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'https://julienbenda.github.io' },
            { hid: 'og:title', property: 'og:title', content: 'CYBER LAB' },
            { hid: 'og:description', property: 'og:description', content: process.env.npm_package_description || '' },
            { hid: 'og:image', property: 'og:image', content: 'https://julienbenda.github.io/js.jpg' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: './favicon.ico?' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend (config, ctx) {
        }
    }
}
