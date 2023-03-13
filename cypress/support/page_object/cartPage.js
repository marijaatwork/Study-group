class CartPage{
   
    open() {
        cy.visit('/cart.html');
    }

    getcheckoutButton(){
        return cy.get("[data-test='checkout']");
    }

    getcontinueShoppingButton (){
        return cy.get("[data-test='continue-shopping']");
    }

    getremoveButton(){
        return cy.get("[class='btn btn_secondary btn_small cart_button']");
    }

    getcartItemQuantity(){
        return cy.get("[class='cart_quantity']");
    }

    getcartItemName(){
        return cy.get("[class='inventory_item_name']");
    }

    getcartItemPrice(){
        return cy.get("[class='inventory_item_price']");
    }

    getShoppingCartBadge (){
        return cy.get("[class='shopping_cart_badge']");
    }
    
       }
    
     export default new CartPage ();