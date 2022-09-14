const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // "experimentalSessionAndOrigin": true
  },
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/report/mochawesome-report"
  },
  "screenshotsFolder": "cypress/report/assets"
});
