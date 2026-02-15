import { successLogin } from "../pages/login/loginFunctions"


describe("Testes de login", () => {
  it("Logar", () => {
    cy.visit('/');
    successLogin()
  })
})