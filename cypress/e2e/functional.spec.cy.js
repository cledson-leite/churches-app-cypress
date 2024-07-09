///<reference types="cypress" />

import locators from "../support/locators"



describe('Functional level', () => {

    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.login('a@a', 'a')
        cy.resetar()
    })
    it('should create an account', () => {
        cy.criar('Conta de teste')
        cy.xpath(locators.TOAST + "[contains(., 'Conta inserida com sucesso')]").should('exist')
    })

    it('should reset an account', () => {
        cy.resetar()
        cy.xpath(locators.TOAST + "[contains(., 'Dados resetados com sucesso')]").should('exist')
    })
})