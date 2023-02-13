// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

    app: {
        head: {
            title: 'Baby Shower Invitation',
            meta: [
                { name: 'description', content: 'You\'re invited to a baby shower, Hooray!' }
            ],
            link: [
                {
                    rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
                }
            ]
        }
    }
})