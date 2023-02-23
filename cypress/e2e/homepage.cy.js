describe ('Challenge 3',() =>{
    it ('test case 1',() => {
cy.visit('https://work.co')
cy.title().should('eq', 'Work & Co | Digital Product Agency')
cy.get("[data-test-id='header-title-text']").should('have.text', 'We design and ship digital products that transform companies.')

    })
    it ('test case 2',() => {
cy.visit('https://work.co')
cy.get("[data-test-id='global-menu-btn']").click()
cy.url().should('eq', 'https://work.co/grid/')
    })
    it ('test case 3',() => {
cy.visit('https://work.co')
cy.get("[data-test-id='global-menu-btn']").click()
cy.get("[data-test-id='grid-select-clients-link']").click() 
cy.url().should('eq', 'https://work.co/clients/')
    })
    it ('test case 4',() => {
cy.visit('https://work.co')
cy.get("[data-test-id='global-menu-btn']").click() 
cy.get ("[data-test-id='grid-practice-areas-link']").click()
cy.url().should('eq', 'https://work.co/company/')
    })
})