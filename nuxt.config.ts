import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [ // Inicia os módulos de terceiros no app
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-primevue'
  ],
  css: [ // Injeta alguns estilos css no app
    'primeicons/primeicons.css'
  ],
  googleFonts: { // Configurações do google fonts
    base64: true,
    fontsDir: 'assets/fonts', // Pasta onde vai baixar as fontes
    overwriting: true,
    families: { // Objeto com as famílias de fontes
      Inter: [300, 500, 800] // Fonte e seus valores para serem adicionados
    }
  },
  primevue: { // Configurações do primevue
    options: {
      unstyled: true // Remove os estilos
    },
    importPT: { // Objeto para importar o tema
      as: 'lara',
      from: path.resolve(__dirname, './assets/presets/lara/') // Tema deve ser baixado da documentação
    }
  }
})
