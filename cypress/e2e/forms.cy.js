describe('Profile Forms', () => {
  context('Given I access the Coodesh Beta page', () => {
    beforeEach(() => {
      cy.visit('https://beta.coodesh.com/')
      cy.get('#onetrust-accept-btn-handler').click()
    })
    context('When I enter the login page', () => {
      beforeEach(() => {
        cy.get('.nav-link > .transition-3d-hover').click()
      })
      context('And I enter on my account', () => {
        beforeEach(() => {
          cy.get('#email').type('marayah@teste.com')
          cy.get('#password').type('Abcd,1234')
          cy.get('div.col-12 > .transition-3d-hover').click()
          cy.get('.toastr').should('contain', 'Seja bem-vindo!')
        })
        context('And I go to the profile fill page', () => {
          beforeEach(() => {
            cy.wait(5000)
            cy.visit('https://beta.coodesh.com/onboarding/developer/profile')
          })
          context('And I fill the fields correctly', () => {
            beforeEach(() => {
              cy.get(':nth-child(7) > .custom-control > .checkbox-outline__label').click()
              cy.get(':nth-child(7) > .custom-control > .checkbox-outline__label').click()
              cy.get('.css-xb97g8').click({ multiple: true, force: true })
              cy.get('.col-md-12 > .form-text > div > :nth-child(1)').click()
              cy.get('.col-md-12 > .form-text > div > :nth-child(1)').click()
              cy.get('#years_experience').select(2).should('contain', 'Até um ano')
              cy.get("#preferences\\\.job_search").select(2).should('contain', 'Estou empregado mas busco novos desafios')
              cy.get('.react-tel-input > .form-control').clear().type('85999999999')
              cy.get("#address\\\.city").clear().type('Quixadá')

              cy.get('.w-100').click()

              cy.get(':nth-child(1) > :nth-child(3) > .btn-icon').click()
              cy.get(':nth-child(1) > :nth-child(3) > .btn-icon').click()
              cy.get(':nth-child(3) > :nth-child(6)').click()
              cy.get(':nth-child(3) > :nth-child(7)').click()
              cy.get('#communities-0-relation').select(1).should('contain', 'Entusiasta')
              cy.get('#communities-1-relation').select(1).should('contain', 'Entusiasta')
              cy.get('.col-lg-12 > .react-select > .css-yk16xz-control > .css-13tza3w').type('mulher {enter}')
              cy.get('#race').select(4).should('contain', 'Pessoa Parda')
              cy.get('#gender').select(2).should('contain', 'Mulher')
              cy.get('#sexual_orientation').select(1).should('contain', 'Heterossexual')
              cy.get("#disabilities\\\.type").select(1).should('contain', 'Nenhuma deficiência')

              cy.get('.btn-primary').click()
              cy.get('.btn-primary').click()

              const currentValue  = 20000;
              const targetValue = 35000;
              const increment = 500;
              const steps = (targetValue - currentValue) / increment;
              const arrows = '{rightarrow}'.repeat(steps);

              cy.get(':nth-child(1) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(1) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(3) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(3) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(5) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(5) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(6) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(6) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(7) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(7) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(8) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(8) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(9) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(9) > td').type(
                "{rightarrow}"
              );

              cy.get('.btn-primary').click()

              cy.get(':nth-child(1) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(1) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(2) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(2) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(3) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(3) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(4) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(4) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(5) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(5) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(6) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(6) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(8) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(8) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(9) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(9) > td').type(
                "{rightarrow}"
              );
              cy.get(':nth-child(10) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(10) > td').type(
                "{rightarrow}"
              );

              cy.get('.btn-primary').click()

              cy.get(':nth-child(1) > td').click({ multiple: true, force: true })
              cy.get(':nth-child(1) > td').type(
                "{rightarrow}"
              );

              cy.get('.btn-primary').click()
            })
            it('Then I finish filling my profile correctly', () => {
              cy.url().should('be.equal', 'https://beta.coodesh.com/onboarding/developer/curriculum')
              cy.get('.styles_skillsPrint___oa3j > :nth-child(1)').should('be.visible')
            })
          })
        })
      })
    })
  })
})