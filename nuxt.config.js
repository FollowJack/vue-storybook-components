export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'components-playbook',
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
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // for calendly integration
    { src: '@/plugins/vue-calendly', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // enable subfolders in automatic components detection: https://github.com/nuxt/components#migration-guide
  components: [
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // for slider in testimonials
    // { src: '@/plugins/vue-flicking' },
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://storybook.nuxtjs.org/
  storybook: {
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-docs',
    ],
  },

  googleFonts: {
    families: {
      Roboto: [100, 400, 700,],
      Jost: [100, 400, 700,],
    },
    display: 'swap',
    download: true
  },
}
