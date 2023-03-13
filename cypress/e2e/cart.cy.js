import cartPage from "../support/page_object/CartPage";
import checkoutPage from "../support/page_object/CheckoutPage";
import inventoryPage from "../support/page_object/InventoryPage";
import landingPage from "../support/page_object/landingPage";


describe('challenge 6', () => {
    beforeEach(() => {
            landingPage.open();
            landingPage.getUsername().type('standard_user');
            landingPage.getPassword().type('secret_sauce');
            landingPage.getLoginButton().click();
          })

        it('tc1 error with no data', () => {
            inventoryPage.getShoppingCart().click();
            cartPage.getcheckoutButton().click();
            checkoutPage.getcontinueCheckoutButton().click();
})
        it('tc2 successful shopping flow', () => {
            inventoryPage.getShoppingCartBadge().should('not.exist');
            inventoryPage.getSauceLabsBackpack().click();
            inventoryPage.getShoppingCart().click();
            cartPage.getcartItemName().should('have.text','Sauce Labs Backpack');
            cartPage.getcartItemPrice().should('contain', '29.99');
            cartPage.getcartItemQuantity().should('contain', '1');
            cartPage.getcheckoutButton().should('be.visible');
            cartPage.getcontinueShoppingButton().should('be.visible');
            cartPage.getremoveButton().should('be.visible');
            cartPage.getcheckoutButton().click();
            checkoutPage.getfirstName().type('Marija');
            checkoutPage.getlastName().type('Test');
            checkoutPage.getpostalCode().type('123');
            checkoutPage.getcontinueCheckoutButton().click();
            checkoutPage.getItemName().should('have.text', 'Sauce Labs Backpack');
            checkoutPage.getFinishButton().click();
            checkoutPage.getCompleteHeader().should('have.text', 'Thank you for your order!');
            checkoutPage.getBackHomeButton().click();
            inventoryPage.getShoppingCartBadge().should('not.exist');
})

        it('tc3 removing items from bag', ()=> {
            inventoryPage.getauceLabsBikeLight().click();
            inventoryPage.getShoppingCartBadge().should('be.visible');
            inventoryPage.getShoppingCart().click();
            cartPage.getremoveButton().click();
            cartPage.getShoppingCartBadge().should('not.exist');
        })

        it('tc4 continue shopping', () => {
            inventoryPage.getauceLabsBikeLight().click();
            inventoryPage.getShoppingCart().click();
            cartPage.getcontinueShoppingButton().click();
            inventoryPage.getShoppingCartBadge().should('contain', '1')
        })
})