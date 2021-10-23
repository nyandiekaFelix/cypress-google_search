describe('Google Calculator', () => {
  it('Loads Google Page', () => {
    cy.visit('https://www.google.com?hl=en');
  });

  it('Inputs "2 + 2"', () => {
    cy.get('input[name="q"]').type('2 + 2');
  });

  it('Clicks the search button', () => {
    cy.get('input[name="btnK"]').first().click();
  });

  it('Checks if calculator appears', () => {
    cy.get('.obcontainer').should('be.visible');
  });

  it('Checks if expression is "2 + 2"', () => {
    cy.get('div[class="xwgN1d XSNERd"]')
      .children('.XH1CIc')
      .children('.vUGUtc')
      .contains('2 + 2');
  });

  it('Checks if result is "4"', () => {
    cy.get('#cwos').contains('4');
  });
});