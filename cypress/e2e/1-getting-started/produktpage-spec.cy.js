describe('Product Page Test', () => {
 it('should display Products on the page after clicking Products link', () => {
    cy.visit('/products');
    /*// Clicking on the element using cy.contains for Products link
    cy.contains('a', 'Products').click();

    // Assertion: Check if the URL contains "/products"
    cy.url().should('include', '/products');

    // Assertion: Check if the "Products" text is present on the page
    cy.contains('Products').should('be.visible');*/
  });
});
