Cypress.Commands.add("shouldBeVisible", (el) => {
  /* Verifica se o elemento está visível */
  cy.get(el)
    .should('be.visible');
});

Cypress.Commands.add("shouldHaveText", (el, text) => {
  /* Verifica se o elemento tem um texto específico */
  cy.get(el)
    .should("have.text", text)
});