describe('My First Test Suite', function () {

    it('My firstTest case', function () {


        cy.visit("https://erigostore.co.id/");
        cy.get('.hamburger-icon > .icon-nav').click()
        cy.get('#customer_register_link').click()
        cy.get('#first_name').type('Salma')
        cy.get('#last_name').type('Atsila')
        cy.get('#email').type('salmaatsilashabiyya@gmail.com')
        cy.get('#create_password').type('Shabiyya41101')
        cy.get('#create_customer > .action-btn > .btn').click()
        cy.get('.hamburger-icon > .icon-nav').click()
        cy.get('.customer-links > #customer_login_link').click()

    })

})