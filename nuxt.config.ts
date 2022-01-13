import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({

    css: [
        //'@/assets/scss/build.scss',
    ],
    meta: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
            }
        ],
    },
    build: {
        transpile: [/oruga/]
    }

})
