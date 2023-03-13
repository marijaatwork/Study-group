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

    getItemName() {
        return  cy.get("[class='inventory_item_name']");
     }
 
     getFinishButton(){
         return cy.get("[data-test='finish']");
     }

     getCompleteHeader(){
        return cy.get("[class='complete-header']");
    }

    getBackHomeButton(){
        return cy.get("[data-test='back-to-products']");
    }
    
   }

 export default new CheckoutPage ();