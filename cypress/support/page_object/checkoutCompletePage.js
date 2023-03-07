class CheckoutCompeletePage {
    
    open() {
        cy.visit('/checkout-complete.html');
    }

    getCompleteHeader(){
        return cy.get("[class='complete-header']");
    }

    getBackHomeButton(){
        return cy.get("[data-test='back-to-products']");
    }
}
export default new CheckoutCompeletePage ();