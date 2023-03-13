class LandingPage{
   
open() {
    cy.visit('/')
}
    getTitle(){
      return cy.title();
    }

    getUsername(){
      return cy.get("[data-test='username']");
    }

    getPassword(){
      return cy.get("[data-test='password']");
    }

    getLoginButton(){
      return cy.get("[data-test='login-button']");
    }

    getUrl(){
      return cy.url();
    }

    getLoginError(){
      return cy.get("[data-test='error']");
    }

   }

 export default new LandingPage ()