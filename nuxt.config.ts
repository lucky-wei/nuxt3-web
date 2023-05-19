// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            // title: '山东南翔',
            // titleTemplate:"%s - 山东南翔",
            charset: 'utf-8',
            htmlAttrs: {
                lang: "zh-cn"
            },
            meta: [
                {
                    name: 'description', content: 'My amazing site .'
                },
                {
                    name: 'keywords', content: 'My amazing site 关键词.'
                }
            ]
        }
    },
    imports:{
        dirs:['apis']
    },
    modules: [
        'nuxt-windicss',
    ],
    build: {
        transpile: process.env.NODE_ENV === 'production' ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
        ] : ['@juggle/resize-observer']
    },
    vite: {
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
                    : []
        }
    },
    css: [
        '@/assets/css/main.css'
    ]
})
