describe('Challenge 4 new', () => {
    it('test case 1', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq', 'Swag Labs')
    })
    it('test case 2', () =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get("[data-test='username']").type('marija@test.com')
        cy.get("[data-test='password']").type('secret_sauce')
        cy.get("[data-test='login-button']").click()
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get("[data-test='error']").should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
    it('test case 3', () =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get("[data-test='username']").type('standard_user')
        cy.get("[data-test='password']").type('secret_sauce')
        cy.get("[data-test='login-button']").click()
        cy.url().should('include', '/inventory.html') 
    })
    })