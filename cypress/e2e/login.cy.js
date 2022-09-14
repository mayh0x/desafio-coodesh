describe('Login', () => {
  context('Checking if the login page loads correctly', () => {
    context('Given I access the Coodesh Beta page', () => {
      beforeEach(() => {
        cy.visit('https://beta.coodesh.com/')
        cy.get('#onetrust-accept-btn-handler')
          .click()
      })
      context('When I enter the login page', () => {
        beforeEach(() => {
          cy.get('.nav-link > .transition-3d-hover')
            .click()
        })
        it('Then the login page loads its components correctly', () => {
          cy.url()
            .should('be.equal', 'https://beta.coodesh.com/auth/signin/candidates')
          cy.get('.u-header__navbar')
            .should('be.visible')
          cy.get('.w-70')
            .should('be.visible')
          cy.get('.h3')
            .should('contain', 'Faça o login')
          cy.get('.w-70 > div.d-flex')
            .should('be.visible')
          cy.get('.mt-5 > :nth-child(1)')
            .should('be.visible')
          cy.get('.mt-5 > :nth-child(2)')
            .should('be.visible')
          cy.get('div.col-12 > .transition-3d-hover')
            .should('contain', 'Entrar')
          cy.get('.text-center > div')
            .should('contain', 'Cadastre-se')
        })
      })
    })
  })

  context('Creating an account', () => {
    context('Given I access the Coodesh Beta page', () => {
      beforeEach(() => {
        cy.visit('https://beta.coodesh.com/')
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
        context('And I click on the register button', () => {
          beforeEach(() => {
            cy.get('a.small')
              .click()
            cy.url()
              .should('be.equal', 'https://beta.coodesh.com/auth/signup/candidates')
          })
          context('And I fill in the fields correctly', () => {
            beforeEach(() => {
              cy.get('#displayName')
                .type('Marayah Sabelle')
              cy.get('#email')
                .type('marayah@teste.com')
              cy.get('#password')
                .type('Abcd,1234')
              cy.get('[type="checkbox"]')
                .check({ force: true })
            })
            it('Then I can create an account', () => {
              cy.get('.align-items-center > .transition-3d-hover')
                .click()
            })
          })
        })
      })
    })
  })
})