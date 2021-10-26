/// <reference types="cypress" />

describe('vivino web test', () => {
    beforeEach(() => {
      cy.visit('https://www.vivino.com/')
    })
  
    it('Should display the webpage ', () => {
      cy.get('.market-band__header__main span').should('have.text', '\nToplister i Danmark\n')
    })
  
    
    it('search result should show some result', () => {
      const searchText = 'Masseria'
      cy.get('input.searchBar__searchInput--2Nf0D').type(`${searchText}{enter}`)
      cy.get('.search-results-list>div').each(($el, index, $list) => {
        console.log($el, index, $list)
      })
    })
    
})
  