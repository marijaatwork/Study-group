
describe ('My First Test',() => {
    it ('Visits Work & Co website and checks the headeline.', () => {
        cy.visit('https://work.co')
        cy.get("[data-test-id='header-title-text']").contains('We design and ship digital products that transform companies.')
    })
    })

