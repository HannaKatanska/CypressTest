describe("The Login Page", function() {
    it('performs login and check if we get in', function() {
        const email = "pointhomefinal+owner@gmail.com"
        const password = "Azaza123!"

        cy.visit('https://synchronos.io')

        cy.contains('Log in').click()

        cy.url().should('include', '/auth/login')

        cy.get('input[name=email]').type(email)
        cy.get('input[name=password]').type(`${password}{enter}`)

        cy.url().should('include', '/app')

        cy.getCookie('synchronos-auth-token').should('exist')

        cy.get('div').should('contain', 'Owner')



    })
})