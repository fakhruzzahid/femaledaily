describe ('Automation Register',  () => {

    it('Register', () => {
        cy.get('body').as('body')
        
        cy.wrap([1, 2]).each((num, i, array) => {
            return new Cypress.Promise((resolve) => {
              setTimeout(() => {
                resolve()

        cy.log('== Home Page ==')

        cy.visit('https://femaledaily.com/') 
        
        cy.get('[id="login_home"]')
        .should('be.visible').and('contain', 'LOGIN / SIGNUP')
        .click()

        cy.log('== Input Data Register ==')
        cy.get('.taste-title').should('contain', 'Login')
        cy.get('[value="Create Account"]').should('be.visible').click()
        cy.get('[placeholder="Email"]').clear().type('testfemaledaily').type(num).type('@gmail.com')
        cy.get('[placeholder="Username"]').clear().type('testuser').type(num)
        cy.get('[placeholder="Password"]').clear().type('testmasuk')
        cy.get('[placeholder="Confirm Password"]').clear().type('testmasuk')
        cy.get('[data-element-id="register-checkbox"]').click()
        cy.get('[value="create account"]').click()
        cy.wait(3000)
        cy.visit('https://account.femaledaily.com/completing-profile?step=birthdate')

        cy.get('.taste-title').should('contain', 'When is Your Birthday?')
        cy.get('.summary-birth:nth-of-type(1) .Select-arrow-zone').click()
        cy.get('@body').contains('August').click()
        cy.wait(2000)

        cy.get('.summary-birth:nth-of-type(2) .Select-arrow-zone').click()
        cy.get('@body').contains('19').click()
        cy.wait(2000)

        cy.get('.summary-birth:nth-of-type(3) .Select-arrow-zone').click()
        cy.get('@body').contains('1996').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[data-element-id="option_4"]').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[data-element-id="option_2"]').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[data-element-id="option_3"]').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[data-element-id="option_1"]').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[data-element-id="option_2"]').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[data-element-id="option_1"]').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[data-element-id="option_2"]').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[data-element-id="option_2"]').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[data-element-id="option_11"]').click()
        cy.get('[data-element-id="button-next"]').should('be.visible').click()
        cy.wait(2000)

        cy.get('[placeholder="What’s your full name? *"]').clear().type('Testuser')
        cy.get('[value="Finish"]').click()

        cy.get('.gbheader-dropdown-profile-notif').contains('Logout').click({ force: true })

              })
            })
        })
    }) 
})    