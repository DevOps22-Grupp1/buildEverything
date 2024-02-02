describe('Navigation Tests', () => {
  it('should display Products on the page after clicking Products link', () => {
    // Visit the base URL
    cy.visit('/');

    // Clicking on the element using cy.contains
    cy.contains('a', 'Products').click();

    // Assertion: Check if the "Products" text is present on the page
    cy.contains('Products').should('be.visible');
  });
});
