describe('Google Calculator', () => {
  it('Loads Google Page', () => {
    cy.visit('https://www.google.com?hl=en');
  });

  it('Inputs "mispelled"', () => {
    cy.get('input[name="q"]').type('mispelled');
  });

  it('Clicks the search button', () => {
    cy.get('input[name="btnK"]').first().click();
  });

  it('Checks if google suggests correct spelling (misspelled)', () => {
    cy.get('p[class="gqLncc card-section KDCVqf"]')
      .children('span')
      .contains('Did you mean:');

    cy.get('p[class="gqLncc card-section KDCVqf"]')
      .children('a')
      .children('b')
      .children('i')
      .contains('misspelled');
  });
});