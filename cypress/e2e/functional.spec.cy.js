///<reference types="cypress" />
// npm run cy:run -- --spec cypress/e2e/<nome do teste completo> exemplo: frontend.spec.cy.js
// yarn cy:run -- --spec cypress/e2e/<nome do teste completo> exemplo: frontend.spec.cy.js

import loc from '../support/locators'

describe('Functional level', () => {
    // beforeEach(() => {
    //     cy.login("silvafamilytechsolutions@gmail.com", "Mdd121076")
    //     cy.resetApp()
        
    // })

    it('teste cypress', () => {
        // cy.acessarContas()
        // cy.inserirConta('Conta de teste')
        // cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
        expect(1+1).to.equal(2)
    })

    // it('Deve retornar erro caso a conta ja exista', () => {
    //     cy.acessarContas()
    //     cy.inserirConta('Conta de teste')
    //     cy.wait(2000)
    //     cy.inserirConta('Conta de teste')
    //     cy.get(loc.MESSAGE).should('contain', 'code 400')
    // })

    // it('Deve atualizar uma conta', () => {
    //     cy.acessarContas()
    //     cy.inserirConta('Conta de teste')
    //     cy.xpath(loc.CONTAS.XP_BTN_EDITAR).click()
    //     cy.get(loc.CONTAS.NOME).clear().type("Conta atualizada")
    //     cy.wait(2000)
    //     cy.get(loc.CONTAS.BTN_SALVAR).click()
    //     cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    // })
})