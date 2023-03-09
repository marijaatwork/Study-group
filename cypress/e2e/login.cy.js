import inventoryPage from "../support/page_object/InventoryPage";
import landingPage from "../support/page_object/LandingPage";


describe('Challenge 4 new', () => {
    it('test case 1', () => {
        landingPage.open();
       landingPage.getTitle().should('eq', 'Swag Labs')
    })

    it('test case 2', () =>{
        landingPage.open();
        landingPage.getUsername().type('marija@test.com');
        landingPage.getPassword().type('secret_sauce');
        landingPage.getLoginButton().click();
        landingPage.getUrl().should('eq', 'https://www.saucedemo.com/')
        landingPage.getLoginError().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
        
    })
    it('test case 3', () =>{
        landingPage.open();
        landingPage.getUsername().type('standard_user');
        landingPage.getPassword().type('secret_sauce');
        landingPage.getLoginButton().click();
        inventoryPage.getUrl().should('eq', 'https://www.saucedemo.com/inventory.html');
    })

    it('test case logout', () =>{

        landingPage.open();
        landingPage.getUsername().type('standard_user');
        landingPage.getPassword().type('secret_sauce');
        landingPage.getLoginButton().click();
        inventoryPage.getMenuButton().click();
        inventoryPage.getLogoutButton().click();
        landingPage.getUrl().should('eq', 'https://www.saucedemo.com/');
    })

})