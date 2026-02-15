import { LOGIN} from "./loginElements"
import { DASHBOARD } from "../dasboard/elements"


export function successLogin() {
    cy.visit("/")
    cy.typeAText(LOGIN.user, "Admin")
    cy.typeAText(LOGIN.password, "admin123")
    cy.performClick(LOGIN.btnLogin)
    cy.shouldHaveText(DASHBOARD.title, "Dashboard")
}