describe('add product page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/addProduct')
    })
    it('add product', () => {
        cy.getDataTest('add-Product-box').within(()=>{
            cy.get('input[name="title"]').type('Test')
            cy.get('input[name="price"]').type('100')
            cy.getDataTest('add-Product-btn').click()
            cy.contains('Test 100').should('exist')
        })
        cy.get('[name="title"]').clear();
    cy.get('[name="price"]').clear();
    })
   
    
    
  })