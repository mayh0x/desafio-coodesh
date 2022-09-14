describe("Home page", () => {
  context("Given I access the Coodesh Beta page", () => {
    beforeEach(() => {
      cy.visit("https://beta.coodesh.com/")
    })
    context("When I accept cookies", () => {
      beforeEach(() => {
        cy.get('#onetrust-accept-btn-handler').click()
      })
      it("Then the home page loads its components correctly", () => {
        cy.get('.max-width-20 > img').should('be.visible')

        cy.get('.space-top-lg-2 > .mb-0').should('contain', 'developers validados')

        cy.get('.ie-main-hero > svg').should('be.visible')

        cy.get('.bg-white').should('be.visible')
        cy.get('.bg-white > .mx-auto > .border-right').should('contain', 'Sou developer')
        cy.get('.bg-white > .mx-auto > .pr-4').should('contain', 'Contratar desenvolvedores')

        cy.get('.col-12').should('be.visible')
        cy.get('.slick-current > :nth-child(1) > .js-slide > .jsx-4146302916').should('be.visible')
        cy.get('[data-slick-index="1"] > :nth-child(1) > .js-slide > .jsx-4146302916').should('be.visible')
        cy.get('[data-slick-index="2"] > :nth-child(1) > .js-slide > .jsx-4146302916').should('be.visible')
        cy.get('[data-slick-index="3"] > :nth-child(1) > .js-slide > .jsx-4146302916').should('be.visible')
        cy.get('[data-slick-index="4"] > :nth-child(1) > .js-slide > .jsx-4146302916').should('be.visible')
        cy.get('[data-slick-index="5"] > :nth-child(1) > .js-slide > .jsx-4146302916').should('be.visible')

        cy.get('.pt-3').should('be.visible')
        cy.get(':nth-child(1) > .text-secondary').should('contain', 'Coodesh 2022. Todos os direitos reservados.')
        cy.get('.text-secondary > a').should('contain', 'Política de Privacidade')
      })
    })
  })
})