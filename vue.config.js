module.exports = {
  pluginOptions: {
    enableInSFC: true,
    lintStyleOnBuild: true,
    stylelint: {
      fix: false,
      syntax: 'scss',
      files: 'src/**/*.{vue,htm,html,css,sss,less,scss}'
    }
  },

  pwa: {
    name: 'One Team Excercise',
    themeColor: '#0078DC',
    msTileColor: '#0078DC',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/myworker.js'
      // ...other Workbox options...
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/style/_colors.scss";
          @import "@/assets/style/_mixins.scss";
        `
      }
    }
  },

  lintOnSave: true,
  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: undefined
}
