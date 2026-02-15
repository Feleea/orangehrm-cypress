const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    defaultCommandTimeout: 6000,
    watchForFileChanges: false, // Não deixa o cypress rodar os testes assim que um arquivo for salvo
    video: true, // Grava o videos dos testes
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
