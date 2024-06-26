const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/common.scss";
        @import "@/assets/scss/reset.scss";`,
      },
    },
  },
});
