describe('Search Company', () => {
  context('Checking if the forms are correct', () => {
    context('Given I access the Coodesh Beta page', () => {
      beforeEach(() => {
        cy.visit("https://beta.coodesh.com/")
        cy.get('#onetrust-accept-btn-handler')
          .click()
      })
      context('When I enter the login page', () => {
        beforeEach(() => {
          cy.get('.nav-link > .transition-3d-hover')
            .click()
          cy.url()
            .should('be.equal', 'https://beta.coodesh.com/auth/signin/candidates')
        })
        context('And I login in an account', () => {
          beforeEach(() => {
            cy.get('#email')
              .type('marayah@teste.com')
            cy.get('#password')
              .type('Abcd,1234')
            cy.get('div.col-12 > .transition-3d-hover')
              .click()
            cy.get('.toastr')
              .should('contain', 'Seja bem-vindo!')
          })
          context('And I go to the companies page', () => {
            beforeEach(() => {
              cy.get('#header-nav-bar > .u-header__navbar-nav > :nth-child(1) > .nav-link')
                .click()
              cy.url()
                .should('be.equal', 'https://beta.coodesh.com/vagas')
            })
            it('Then I search for a company and see the results', () => {
              cy.get('.col-lg-7 > .input-group > .form-control')
                .type('Teste')
              cy.get('.align-self-lg-end > .btn-block')
                .click()
              cy.get(':nth-child(1) > .card > .p-3')
                .should('contain', 'Teste')
            })
          })
        })
      })
    })
  })
})