import cartPage from "../support/page_object/cartPage";
import checkoutCompletePage from "../support/page_object/checkoutCompletePage";
import checkoutPage from "../support/page_object/checkoutPage";
import checkoutPageTwo from "../support/page_object/checkoutPageTwo";
import inventoryPage from "../support/page_object/inventoryPage";


describe('challenge 6', () => {
    beforeEach(() => {
            cy.login('standard_user', 'secret_sauce')
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
            checkoutPageTwo.getItemName().should('have.text', 'Sauce Labs Backpack');
            checkoutPageTwo.getFinishButton().click();
            checkoutCompletePage.getCompleteHeader().should('have.text', 'Thank you for your order!');
            checkoutCompletePage.getBackHomeButton().click();
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