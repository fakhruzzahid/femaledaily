describe ('Auth',  () => {

    beforeEach(function() {
        cy.visit('https://femaledaily.com/') 
    })

    it('(Failed) Blank Email', () => {
        cy.log('== Home Page ==')

        cy.get('[id="login_home"]')
        .should('be.visible').and('contain', 'LOGIN / SIGNUP')
        .click()

        cy.log('== Input Login Login ==')
        cy.get('.taste-title').should('contain', 'Login')
        cy.get('[id="id-email-username"]').clear()
        cy.get('[id="id-password"]').clear().type('testmasuk')
        cy.get('[value="Login"]').should('be.visible').click()

        cy.get('.login-warning').should('be.visible').and('contain', 'Please enter your email/username')
  
    })
    it('(Failed) Blank Password', () => {
        cy.log('== Home Page ==')

        cy.get('[id="login_home"]')
        .should('be.visible').and('contain', 'LOGIN / SIGNUP')
        .click()

        cy.log('== Input Login Login ==')
        cy.get('.taste-title').should('contain', 'Login')
        cy.get('[id="id-email-username"]').clear().type('fakhruzzahid')
        cy.get('[id="id-password"]').clear()
        cy.get('[value="Login"]').should('be.visible').click()

        cy.get('.login-warning').should('be.visible').and('contain', 'Please enter your password')
    })

    it('(Failed) Wrong Password', () => {
        cy.log('== Home Page ==')

        cy.get('[id="login_home"]')
        .should('be.visible').and('contain', 'LOGIN / SIGNUP')
        .click()

        cy.log('== Input Login Login ==')
        cy.get('.taste-title').should('contain', 'Login')
        cy.get('[id="id-email-username"]').clear().type('fakhruzzahid')
        cy.get('[id="id-password"]').clear().type('salahpassword')
        cy.get('[value="Login"]').should('be.visible').click()

        cy.get('.login-warning').should('be.visible').and('contain', 'That password is incorrect. Try again.')
    })

    it('(Failed) Password Less than Character', () => {
        cy.log('== Home Page ==')

        cy.get('[id="login_home"]')
        .should('be.visible').and('contain', 'LOGIN / SIGNUP')
        .click()

        cy.log('== Input Login Login ==')
        cy.get('.taste-title').should('contain', 'Login')
        cy.get('[id="id-email-username"]').clear().type('fakhruzzahid')
        cy.get('[id="id-password"]').clear().type('sa')
        cy.get('[value="Login"]').should('be.visible').click()

        cy.get('.login-warning').should('be.visible').and('contain', 'Password should be 6-20 characters in length')
    })

    it('(Failed) Wrong Email', () => {
        cy.log('== Home Page ==')

        cy.get('[id="login_home"]')
        .should('be.visible').and('contain', 'LOGIN / SIGNUP')
        .click()

        cy.log('== Input Login Login ==')
        cy.get('.taste-title').should('contain', 'Login')
        cy.get('[id="id-email-username"]').clear().type('testsalah')
        cy.get('[id="id-password"]').clear().type('testmasuk')
        cy.get('[value="Login"]').should('be.visible').click()

        cy.get('.login-warning').should('be.visible').and('contain', 'That username doesn\'t exist')
    })

    it('(Success) Login', () => {
        cy.log('== Home Page ==')

        cy.get('[id="login_home"]')
        .should('be.visible').and('contain', 'LOGIN / SIGNUP')
        .click()

        cy.log('== Input Login Login ==')
        cy.get('.taste-title').should('contain', 'Login')
        cy.get('[id="id-email-username"]').type('fakhruzzahid')
        cy.get('[id="id-password"]').type('testmasuk')
        cy.get('[value="Login"]').should('be.visible').click()

        cy.log('== Check Username ==')
        cy.get('.gbheader-username').should('contain', 'fakhruz')

    })

    it('Log Out', () => {
        cy.login()
        cy.log('== Home Page ==')
        cy.get('.gbheader-dropdown-profile-notif').contains('Logout').click({ force: true })
        cy.get('[id="login_home"]').should('be.visible').and('contain', 'LOGIN / SIGNUP')
    })
})