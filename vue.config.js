const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      entry: "client/src/main.js",
      template: "client/public/index.html",
      title: "Pottery Barn NFT Marketplace",
    },
  },
});
