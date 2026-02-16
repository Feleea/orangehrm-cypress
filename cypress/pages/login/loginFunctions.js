import { LOGIN} from "./loginElements"
import { DASHBOARD } from "../dasboard/elements"


export function tryLogin(user="Admin", pass="admin123", success=true) {

    cy.visit("/")
    cy.typeAText(LOGIN.user, user)
    cy.typeAText(LOGIN.password, pass)
    cy.performClick(LOGIN.btnLogin)

    if (success) {
        cy.shouldHaveText(DASHBOARD.title, "Dashboard")

    } else {
        cy.shouldBeVisible(LOGIN.userRequered)
        cy.shouldBeVisible(LOGIN.passwordRequered)

    }
}