describe('example page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/examples')
    })
    it('multi-page testing', () => {
       cy.getDataTest('Why-Cypress').click()
       cy.location("pathname").should("equal", "/")

       cy.getDataTest('overview').click()
       cy.location("pathname").should("equal", "/overview")
    })
   
    it('intercetps', () => {
      cy.intercept('POST', 'http://localhost:3000/examples', 
     {fixture: 'example.json'}
         )
        cy.getDataTest('post-btn').click()
    })
   it.only('grudes', () => {
    cy.contains(/Add Some Grudges/i)
    /*length 0*/
    cy.getDataTest('grudes-list').within(()=>{
        cy.get('li').should('have.length', 0)
    })
    /*type in input*/
    cy.getDataTest('grudge-input').within(()=>{
        cy.get('input').type('Test')
    })
    /*click button*/
   cy.getDataTest('grudge-btn').click()
   /*length 1*/
   cy.getDataTest('grudes-list').within(()=>{
    cy.get('li').should('have.length', 1)
    })
         /*type again in input*/
    cy.getDataTest('grudge-input').within(()=>{
        cy.get('input').type('nnnnnnnnnn')
    })
    /*click again button*/
   cy.getDataTest('grudge-btn').click()  
   cy.getDataTest('grudes-list').within(()=>{
    cy.get('li').should('have.length', 2)
    cy.get('li').first().should('contain.text', 'Test')
    })
   

/*delete first*/

    cy.getDataTest('grudes-list').within(()=>{
        cy.get('li').its(0).within(()=>{
            cy.get('button').click()
        })
    
        })
cy.getDataTest('grudes-list').within(()=>{
cy.get('li').should('have.length', 1)

 })

   })
    
  })