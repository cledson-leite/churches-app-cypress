///<reference types="cypress" />




describe('Backend level', () => {

    before(() => {
        cy.getToken('a@a', 'a')
    })
    beforeEach(() => {
        cy.resetApi()
    })

    it('should create an account', () => {
        cy.request({
            method: 'POST',
            url: '/contas',
            body: {
                nome: 'Conta de teste'
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('nome', 'Conta de teste')
        })
        
    })

    it('should update an account', () => {
        cy.getId('conta original').then(id => {
            cy.request({
                method: 'PUT',
                url: `/contas/${id}`,
                body: {
                    nome: 'Conta alterada'
                }
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('id', id)
                expect(response.body).to.have.property('nome', 'Conta alterada')
            })
        })
    })

    it('should not created an account with same name', () => {

        cy.getId('conta repetida').then(() => {
            cy.request({
                method: 'POST',
                url: '/contas',
                body: {
                    nome: 'conta repetida'
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body.error).to.equal('Já existe uma conta com esse nome!')
            })
        })
        
    })
})