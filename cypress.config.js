const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: process.env.specPattern, // spec files are used for writing tests
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // do we need apiUrl : , token , username
    env: {
      apiUrl: process.env.apiUrl,
      token: process.env.token,
      username: process.env.username,
      password: process.env.password,
      firstName: process.env.firstName,
      lastName: process.env.lastName,
    }, // config.yml or .properties file .
  },
});
// cypress related config u want to apply . 10+ version (below 10 version : config file .cypress.json)
