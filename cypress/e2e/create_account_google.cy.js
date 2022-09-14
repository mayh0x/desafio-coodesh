describe('Creating an account with Google', () => {
  context('Given I access the Coodesh Beta page', () => {
    beforeEach(() => {
      cy.visit("https://beta.coodesh.com/")
      cy.get('#onetrust-accept-btn-handler').click()
    })
    context('When I enter the login page', () => {
      beforeEach(() => {
        cy.get('.nav-link > .transition-3d-hover').click()
        cy.url().should('be.equal', 'https://beta.coodesh.com/auth/signin/candidates')
      })
      context('And I click on the register button', () => {
        beforeEach(() => {
          cy.get('a.small').click()
          cy.url().should('be.equal', 'https://beta.coodesh.com/auth/signup/candidates')
        })
        context('And I click the Google button', () => {
          beforeEach(() => {
            cy.userLoginWithGmail();
          })
          context('And I log into a Google account', () => {
            beforeEach(() => {
              
            })
            it('Then I can create an account', () => {
              
            })
          })
        })
      })
    })
  })
  context('', () => {
    beforeEach(() => {

    })
  })
})