import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

    css: [
        // SCSS file in the project
        '@/assets/scss/build.scss',
        //'@/assets/scss/bulma.scss',
        //'@/assets/scss/oruga.scss',
        //'@oruga-ui/oruga-next/src/scss/oruga-full-vars.scss',
        //'@oruga-ui/theme-bulma/dist/bulma.css',
    ],
    meta: {

        link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
            }
        ],
    },
    buildModules: [
        '@pinia/nuxt',
    ],

})
