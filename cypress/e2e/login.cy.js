import { tryLogin, loginFail } from "../pages/login/loginFunctions"


describe("Testes de login", () => {
  it("Logar com sucesso", () => {
    tryLogin()
  })
  it("Validar campos de login obrigatórios", () => {
    loginFail(" ", " ", false)
  })
  it("Falha de login com usuário inexistente", () => {
    loginFail("Felipe", undefined)
  })
  it("Falha de login com senha incorreta", () => {
    loginFail(undefined, "Felipe")
  })

})