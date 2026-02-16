import { tryLogin } from "../pages/login/loginFunctions"


describe("Testes de login", () => {
  it("Logar com sucesso", () => {
    tryLogin()
  })
  it("Validar campos de login obrigatórios", () => {
    tryLogin(" ", " ", false)
  })
  it("Falha de login com usuário inexistente", () => {

  })
  it("Falha de login com senha incorreta", () => {

  })

})