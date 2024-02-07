describe('Product Page Test', () => {
  it('should return a 200 status code and contain "Products"', () => {
    // Make a request to the product page
    cy.request('/products')
      .its('status')
      .should('equal', 200);

    // Make a request to the product page
    cy.request('/products')
      .its('body')
      .should('include', 'Products');
  });

  it('should display Products on the page after clicking Products link', () => {
    // Visit the base URL
    cy.visit('/');

    // Clicking on the element using cy.contains for Products link
    cy.contains('a', 'Products').click();

    // Assertion: Check if the "Products" text is present on the page
    cy.contains('Products').should('be.visible');
  });
});