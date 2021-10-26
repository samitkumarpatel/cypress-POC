/// <reference types="cypress" />

describe('Employee Management', () => {

    beforeEach(() => {      
      cy.visit('../../web/index.html')
    })
  
    it('Should display the title ', () => {
      cy.get('title').should('have.text', 'web.local.net')
    })
    
})
  