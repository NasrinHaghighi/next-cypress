describe('subscribe form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/forms')
    })
    it('subescribe input', () => {
        cy.contains(/Testing Forms/i)
        cy.getDataTest('subscribe-form').find('input').as('input')
    cy.get('@input').type('ns.ha@gmail.com') 
    cy.contains(/Successfully subbed: ns.ha@gmail.com!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Successfully subbed: ns.ha@gmail.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: ns.ha@gmail.com!/i).should('not.exist')

    cy.get('@input').type('ns.ha@gmail.io') 
    cy.contains(/Invalid email: ns.ha@gmail.io!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Invalid email: ns.ha@gmail.io!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Invalid email: ns.ha@gmail.io!/i).should('not.exist')



    cy.contains(/fail!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.debug();
    cy.contains(/fail!/i).should('exist').should('be.visible')
    cy.wait(3000)
    })
   
    
    
  })