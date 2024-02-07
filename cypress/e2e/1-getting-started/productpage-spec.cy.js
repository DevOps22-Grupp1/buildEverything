describe('Navigation Tests', () => {
  it('should return a 200 status code and contain "Products"', () => {
    cy.request('/')
      .its('status')
      .should('equal', 200);

    cy.request('/products')
      .its('body')
      .should('include', 'Products');  
  }); 
});  



    // Visit the base URL
    //cy.visit('/');

   // Clicking on the element using cy.contains
    //cy.contains('a', 'Products').click();

    // Assertion: Check if the "Products" text is present on the page
    //cy.contains('Products').should('be.visible'); */


