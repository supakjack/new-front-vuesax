export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'new-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vuesax/dist/vuesax.css', 'material-icons/iconfont/material-icons.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vuesax'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:3001/'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    middleware: ['auth']
  },

  // auth: {
  //   cookie: {
  //     prefix: 'token'
  //   },
  //   localStorage: false,
  //   strategies: {
  //     local: {
  //       token: {
  //         required: true,
  //         type: 'Bearer'
  //       },
  //       endpoints: {
  //         login: {
  //           url: 'auth/login',
  //           method: 'post',
  //           propertyName: 'data.token'
  //         },
  //         logout: false,
  //         user: false
  //       }
  //     }
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: '/login',
  //     home: '/'
  //   }
  // }
}
