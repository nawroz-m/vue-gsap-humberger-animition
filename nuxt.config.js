import axios from "axios";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/style/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/gsap.js", mode: "client", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: ["~/components"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },

    extraEases: {
      expoScaleEase: true,
    },
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: false,
    theme: {
      themes: {
        light: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
          pretitle: "#149DFF",
          presubtitle: "#150580",
          gray: "#606060",
          preGray: "#7e8da0",
          grayLigten: "#7E8DA0",
          grayDark: "#6B6B6B",
          whiteGray: "#EDEDED",
          whiterGray: "#F7F9FF",
          backgroundHero: "#150580 ",
          backgroundAproach: "#f7f9ff",
          backgroundLetsTalk: "#150580",
          backgroundClientSyas: "#FAFBFF",
          footerBackground: "#FCFCFD",
          darkWhite: "#E4E4E4",
          preBlack: "#12141D",
          black: "#000000",
          successForm: "#51FF58",
          blackLight: "#4B5563",
        },
        dark: {
          primary: "#2196F3",
          secondary: "#424242",
          accent: "#FF4081",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },

  fontLoader: {
    url: {
      google:
        "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap",
      custom: "https://rsms.me/inter/inter.css",
    },
  },

  axios: {
    credentials: true,
    https: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },
};
