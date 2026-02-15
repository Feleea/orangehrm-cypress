// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("performClick", (el) => {
  /* Um clique no elemento depois de verificar se ele está visível na tela. Espera 1000 ms */
  cy.get(el)
    .should("be.visible")
    .click();
});

Cypress.Commands.add("typeAText", (el, text, isRequired = false) => {
  /* Digitar um texto no elemento, opcional verificar se o elemento é obrigatório */
  cy.get(el)
    .type(text)
    .then(() => {
      if (isRequired) {
        try {
          cy.get(el).should('have.attr', 'data-val-required');
          cy.log(`Campo obrigatório ${el} preenchido`);
        } catch (AssertionError) {
          cy.log(`Campo obrigatório ${el} não teve o required aplicado ou reconhecido pelo Cypress`);
        }
      }
    });
});