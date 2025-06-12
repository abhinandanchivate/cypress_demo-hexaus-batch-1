describe("Login Page", () => {
  it("should display the login form", () => {
    // print all env details
    cy.log("API URL:", Cypress.env("apiUrl"));
    console.log(Cypress.env("apiUrl"));
  });
});
