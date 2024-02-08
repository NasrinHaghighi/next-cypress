describe('contact page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contact')
  })
  it('contact', () => {
    cy.contains(/contact us/i)

    cy.getDataTest('name-input').type('Test')
    cy.getDataTest('submit-btn').click()
    cy.contains(/Name must be at least 6 characters long./i).should('exist')
   
    cy.getDataTest('name-input').type(' ')
    cy.getDataTest('submit-btn').click()
    cy.contains(/Name must be at least 6 characters long./i).should('exist')

    cy.getDataTest('name-input').type('Test12')
    cy.getDataTest('submit-btn').click()
    cy.contains(/Name must be at least 6 characters long./i).should('not.exist')

    /*email input*/
    
   
  })
  it.only('email validation', () => {

    cy.getDataTest('email-input').type(' ')
    cy.getDataTest('submit-btn').click()
    cy.contains(/please enter a valid email/i).should('exist')

    cy.getDataTest('email-input').type('ns.ha@gmail.io')
    cy.getDataTest('submit-btn').click()
    cy.contains(/please enter a valid email/i).should('exist')
    cy.getDataTest('email-input').clear()

    cy.getDataTest('email-input').type('ns.ha@gmail.com')
    cy.getDataTest('submit-btn').click()
    cy.contains(/correct email/i).should('exist',  { timeout: 40000 })
  })
})