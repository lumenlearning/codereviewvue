module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Code Review Exercise (Vue.js)';
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
        `,
      },
    },
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
