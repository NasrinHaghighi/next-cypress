describe('fundemental spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/fundamentals')
  })
  it('passes', () => {
  cy.getDataTest('fundemental-header').should('contain.text', 'Testing Fundamentals')
   
  })
  it('Accordion works correctly', () => {
  
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments. /i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments. /i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments. /i).should('not.be.visible')
  })
})