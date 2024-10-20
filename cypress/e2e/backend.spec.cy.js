///<reference types="cypress" />
describe('Backend level', () => {
    // let token;
    // before(() => {
    //     cy.getToken('silvafamilytechsolutions@gmail.com', 'Mdd121076')
    //     .then(res => {
    //         token = res
    //     })
    // })
    // beforeEach(() => {
    //     cy.resetApi(token)
    // })

    it('teste de cypress', () => {
        // cy.request({
        //         method: 'POST',
        //         url: "/contas",
        //         headers: {
        //             Authorization: `JWT ${token}`
        //         },
        //         body: {
        //             nome: 'Conta de teste'
        //         }
        //     }).as('response')

        // cy.get('@response').then(response => {
            expect(1+1).to.equal(2)
            
        // })
    })

    // it('should update an account', () => {
    //     cy.getId(token, 'conta original').then(id => {
    //         cy.request({
    //             method: 'PUT',
    //             url: `/contas/${id}`,
    //             headers: {
    //                 Authorization: `JWT ${token}`
    //             },
    //             body: {
    //                 nome: 'Conta alterada'
    //             }
    //         }).then((response) => {
    //             expect(response.status).to.equal(200)
    //             expect(response.body).to.have.property('id', id)
    //             expect(response.body).to.have.property('nome', 'Conta alterada')
    //         })
    //     })
    // })

    // it('should not created an account with same name', () => {

    //     cy.getId(token, 'conta repetida').then(() => {
    //         cy.request({
    //             method: 'POST',
    //             url: '/contas',
    //             headers: {
    //                 Authorization: `JWT ${token}`
    //             },
    //             body: {
    //                 nome: 'conta repetida'
    //             },
    //             failOnStatusCode: false
    //         }).then((response) => {
    //             expect(response.status).to.equal(400)
    //             expect(response.body.error).to.equal('Já existe uma conta com esse nome!')
    //         })
    //     })
        
    // })
})