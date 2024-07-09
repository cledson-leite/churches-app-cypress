// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import locators from "./locators"

Cypress.Commands.add('login', (email, password) => {
    cy.get(locators.LOGIN.USER).type(email)
    cy.get(locators.LOGIN.PASSWORD).type(password)
    cy.get(locators.LOGIN.BTN_LOGIN).click()
    cy.xpath(locators.TOAST + "[contains(., 'Bem vindo')]").should('exist')
})

Cypress.Commands.add('criar', (name) => {
    cy.get(locators.MENU.SETTINGS).click()
    cy.get(locators.MENU.CONTA).click()
    cy.get(locators.CONTAS.NOME).type(name)
    cy.get(locators.CONTAS.BTN_SALVAR).click()
})

Cypress.Commands.add('resetar', () => {
    cy.get(locators.MENU.SETTINGS).click()
    cy.get(locators.MENU.RESET).click()
})

Cypress.Commands.add('getToken', (email, password) => {
    cy.request({
            method: 'POST',
            url: '/signin',
            body: {
                email,
                redirecionar: false,
                senha: password
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('token')
            Cypress.env('token', response.body.token)
            return response.body.token
        })
})

Cypress.Commands.add('resetApi', (token) => {
    cy.request({
        method: 'GET',
        url: '/reset',
    })
})

Cypress.Commands.add('getId', (nome) => {
    cy.request({
        method: 'POST',
        url: '/contas',
        body: {
            nome
        }
    }).then((response) => {
        return response.body.id
    })
})

Cypress.Commands.overwrite('request', (originalFn, ...options) => {
    if(options.length === 1) {
        if(Cypress.env('token')){
            options[0].headers = {
                Authorization: `JWT ${Cypress.env('token')}`
            }
                
        }
    }
    return originalFn(...options)
})
        
