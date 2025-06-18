const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    specPattern: "cypress/e2e/**/*.js",
    env: {
      login: "tomsmith",
      senha: "SuperSecretPassword!",
      file : "cypress/fixtures/emoji_pic.jpg",
      file2: "cypress/fixtures/emoji_pic_2.jpg",
      file3: "cypress/fixtures/emoji_pic_3.jpg",
    },
    setupNodeEvents(on, config) {},
  },
});
