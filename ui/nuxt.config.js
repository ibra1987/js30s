export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'learningJavascriptat30s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    css: ['~/assets/style/main.css'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/composition-api/module',
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faSearch',
        'faTimes',
        'faArrowUp',
        'faArrowDown',
        'faReply',
        'faFlag',
        'faShareAlt',
        'faUser',
        'faUnlockAlt',
        'faWindowClose',
        'faAngleDoubleDown',
      ],
      brands: [],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
