class CheckoutPage {
    
    open() {
        cy.visit('/checkout-step-one.html');
    }

    getcontinueCheckoutButton(){
         return  cy.get("[data-test='continue']");
}

    getcancelCheckoutButton (){
        return cy.get("[data-test='cancel']");
}
    getfirstName(){
        return cy.get("[data-test='firstName']")
    }
ß
    getlastName(){
        return cy.get("[data-test='lastName']")
    }

    getpostalCode(){
        return cy.get("[data-test='postalCode']")
    }

   }

 export default new CheckoutPage ();