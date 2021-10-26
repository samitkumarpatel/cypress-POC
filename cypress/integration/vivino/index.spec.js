/// <reference types="cypress" />

describe('vivino web test', () => {

    beforeEach(() => {
      // / will pick the json element baseUrl from cypress.json
      cy.visit('https://www.vivino.com/')
    })
  
    it('Should display the webpage ', () => {
      cy.get('.market-band__header__main span').should('have.text', '\nToplister i Danmark\n')
    })
  
    
    it.only('search result should show some result', () => {
      const searchText = 'Masseria'

      //if not button - use this way
      cy.get('input[name="q"]').type(`${searchText}{enter}`)
      const customJSON={}
      cy.screenshot()
      cy.get('.search-results-list>.card-lg').each(($el, index, $list) => {
        customJSON[index]=$el.text()
        //cy.log($el, index, $list)
      }).then(()=> {
        cy.log(JSON.stringify(customJSON))
      })
      
    })
    
    //run this test only - it.only, it.skip
    it('sear auto select capture',() => {
      const searchText = 'Masseria'
      
      //if no button to submit the form - use this way
      cy.get('input[name="q"]').type(`${searchText}{enter}`, { delay: 1000})
    })
    
})
  