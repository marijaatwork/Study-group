class CheckoutPageTwo {
    
    open() {
        cy.visit('/checkout-step-two.html');
    }

    getItemName() {
       return  cy.get("[class='inventory_item_name']");
    }

    getFinishButton(){
        return cy.get("[data-test='finish']");
    }
}
export default new CheckoutPageTwo ();