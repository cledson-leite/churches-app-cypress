///<reference types="cypress" />

import loc from '../support/locators'
import '../support/commandsContas'

describe('Frontend level', () => {
    // beforeEach(() => {
    //    cy.intercept({
    //     method: "POST",
    //     url: "/signin",
    //    },{ id: 1000, nome: "any name", token: "any token" }).as('signin')
    //    cy.intercept({
    //     method: "GET",
    //     url: "/saldo",
    //    },[
    //         {conta_id: 1000, conta: "carteira", saldo: 100000 },
    //         { conta_id: 1000, conta: "banco", saldo: 10000000 },
    //     ]).as('saldo')
    //    cy.login("silvafamilytechsolutions@gmail.com", "Mdd121076")
       
    // })

    // after(() => {
    //     cy.clearLocalStorage()
    // })

    // it('teste cypress', () => {
        expect(1+1).to.be(2)
    // })

    // it('Deve retornar erro caso a conta ja exista', () => {
    //     cy.intercept({
    //     method: "GET",
    //     url: "/contas",
    //    },[
    //         { id: 1000, nome: "Conta antiga", visivel: true, usuario_id: 1000},
    //         { id: 2000, nome: "Segunda conta antiga", visivel: true, usuario_id: 1000},
    //     ]).as('get contas')
    //     cy.intercept({
    //     method: "POST",
    //     url: "/contas",
    //    },{
    //         statusCode: 400,
    //         body: {error: "Já existe uma conta com esse nome!"}               
    //         }).as('error contas')
    //     cy.acessarContas()
    //     cy.inserirConta('Conta de teste')
    //     cy.get(loc.MESSAGE).should('contain', 'code 400')
    // })

    // it('Deve atualizar uma conta', () => {
    //     cy.intercept({
    //     method: "GET",
    //     url: "/contas",
    //    },[
    //         { id: 1000, nome: "Conta antiga", visivel: true, usuario_id: 1000},
    //         { id: 2000, nome: "Segunda conta antiga", visivel: true, usuario_id: 1000},
    //     ]).as('get contas')
    //     cy.intercept({
    //     method: "PUT",
    //     url: "/contas/1000",
    //    },[
    //         { id: 1000, nome: "Conta atualizada'", visivel: true, usuario_id: 1000},
    //     ]).as('put contas')
    //     cy.acessarContas()
    //     cy.xpath(loc.CONTAS.XP_BTN_EDITAR).click()
    //     cy.get(loc.CONTAS.NOME).clear().type("Conta atualizada")
    //     cy.get(loc.CONTAS.BTN_SALVAR).click()
    //     cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    // })
})