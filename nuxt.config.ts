// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
    ],
    content: {
        documentDriven: true
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss': {},
            'postcss-nested': {},
            'autoprefixer': {},
        }
    }
})
