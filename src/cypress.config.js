const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    specPattern: "e2e/**/*.js",
    env: {
      login: "tomsmith",
      senha: "SuperSecretPassword!",
    },
    setupNodeEvents(on, config) {},
  },
});
