const params = require('./env');
let config ={
    build: []
};

switch (params.env)
{
    case 'pradeep':
        config.build = [];
        break;

    case 'production':
        config.build = [/oruga/];
        break;

}


export default defineNuxtConfig({

    css: [
        '@/assets/scss/build.scss',
    ],
    meta: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
            }
        ],
    },
    content: {
        highlight: {
            // Theme used in all color schemes.
            theme: 'light-plus',
        }
    },
    components: [
        '~/components/content'
    ],
    modules: [
        '@nuxt/content'
    ],
    build: {
        transpile: config.build
    }

})
