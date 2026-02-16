import { LOGIN} from "./loginElements"
import { DASHBOARD } from "../dasboard/elements"


const USER = "Admin"
const PASS = "admin123"

export function tryLogin(user=USER, pass=PASS) {

    cy.visit("/")
    cy.typeAText(LOGIN.user, user)
    cy.typeAText(LOGIN.password, pass)
    cy.performClick(LOGIN.btnLogin)
    cy.shouldHaveText(DASHBOARD.title, "Dashboard")

}

export function loginFail(user=USER, pass=PASS, alert=true) {

    cy.visit("/")
    cy.typeAText(LOGIN.user, user)
    cy.typeAText(LOGIN.password, pass)
    cy.performClick(LOGIN.btnLogin)

    if (alert) {
        cy.shouldHaveText(LOGIN.callBackAlert, "Invalid credentials")

    } else {
        cy.shouldBeVisible(LOGIN.userRequered)
        cy.shouldBeVisible(LOGIN.passwordRequered)

    }
}