describe('Alert Button Open Tab', function () {
    it('Alert Button Open Tab', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value = "Confirm"]').click()

        cy.on('windows:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('windows:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')
    })
})