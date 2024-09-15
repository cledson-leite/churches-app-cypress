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
import loc from './locators'

Cypress.Commands.add('login', (user, password) => {
  cy.visit("https://barrigareact.wcaquino.me")
  cy.get(loc.LOGIN.USER).type(user)
  cy.get(loc.LOGIN.PASSWORD).type(password)
  cy.get(loc.LOGIN.BTN_LOBIN).click()
  cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
  cy.get(loc.MENU.SETTINGS).click()
  cy.get(loc.MENU.RESET).click()
})

Cypress.Commands.add('getToken', (user, password) => {
  cy.request({
            method: 'POST',
            url: "/signin",
            body: {
                email: user,
                senha:  password
            }
        }).its('body.token').should('not.be.empty').then(token => token)
})

Cypress.Commands.add('resetApi', (token) => {
  cy.request({
    method: 'GET',
    url: "/reset",
    headers: {
        Authorization: `JWT ${token}`
    }
  }).its('status').should('be.equal', 200)
})

Cypress.Commands.add('getId', (token, name) => {
  cy.request({
      method: 'POST',
      url: "/contas",
      headers: {
          Authorization: `JWT ${token}`
      },
      body: {
          nome: name
      }
  }).then(res => res.body.id)
})
