
class InventoryPage{

open() {
    cy.visit('/inventory.html');
}

getShoppingCart (){
   return cy.get('.shopping_cart_link');
}

getShoppingCartBadge (){
    return cy.get("[class='shopping_cart_badge']");
}

getSauceLabsBackpack (){
    return cy.get("[data-test='add-to-cart-sauce-labs-backpack']");
}

getauceLabsBikeLight (){
    return cy.get("[data-test='add-to-cart-sauce-labs-bike-light']")
}

getMenuButton(){
    return cy.get("[id='react-burger-menu-btn']");
}

getLogoutButton(){
    return cy.get("[id='logout_sidebar_link']");
}
getUrl(){
    return cy.url();
}
}

 export default new InventoryPage();