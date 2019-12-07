describe ('Setting Account',  () => {

    it('Exemple Edit Setting Account', () => {
        cy.get('body').as('body')
        cy.log('== Login Shortcut ==')
        cy.login()

        cy.log('== Go to Setting Page ==')
        cy.get('.gbheader-userprofile').click()
        cy.get('.gbheader-dropdown-profile-notif').contains('Settings').click({ force: true })
        cy.wait(2000)

        cy.log('== Edit Input Account ==')
        cy.get('[value="Edit Nama"]').clear().type('Edit Nama')
        cy.get('.account-setting-location .Select-value').click()
        cy.get('@body').contains('Ambon').click()
        cy.get('.Select-placeholder').contains('- Select Your Favorite Brand -').click()
        cy.get('@body').contains('23 Years Old').click()
        cy.get('.account-setting-input-phone input[type="text"]').clear().type('81335990344')
        cy.get('.account-setting-textarea').clear().type('Test Bio')

        cy.log('== Edit Input Social Media ==')
        cy.get('[placeholder="Input your Facebook username"]').clear().type('Fakhruzzahid Wahdah')
        cy.get('[placeholder="Input your Instagram username"]').clear().type('fakhruzzahid33')
        cy.get('[placeholder="Input your Twitter username"]').clear().type('@FWahDah')
        cy.get('[placeholder="Input link to your Blog / Website"]').clear().type('fakhruzzahid.blogspot.com')
        cy.get('[placeholder="Input your Youtube username"]').clear().type('fakhruzzahid')

        cy.log('== Edit Input Beauty Profile ==')
        cy.get('.beauty-profile-section:nth-of-type(1) .Select-value').click()
        cy.get('@body').contains('Dry').click()
        cy.get('.beauty-profile-section:nth-of-type(2) .Select-value').click()
        cy.get('@body').contains('Light').click()
        cy.get('.beauty-profile-section:nth-of-type(3) .Select-value').click()
        cy.get('@body').contains('Cool').click()
        cy.get('.beauty-profile-section:nth-of-type(4) .Select-value').click()
        cy.get('@body').contains('Wavy').click()
        cy.get('.beauty-profile-section:nth-of-type(5) .Select-value').click()
        cy.get('@body').contains('Yes').click()
        cy.get('.beauty-profile-section:nth-of-type(6) .Select-value').click()
        cy.get('@body').contains('Yes').click()

        cy.log('== Add Beauty Concern ==')
        cy.get('.beauty-concerns-section:nth-of-type(1) .Select-value .Select-value-icon').click()
        cy.get('.beauty-concerns-section:nth-of-type(1) .Select-control').click()
        cy.get('@body').contains('Acne').click()

        cy.get('.beauty-concerns-section:nth-of-type(2) .Select-value .Select-value-icon').click()
        cy.get('.beauty-concerns-section:nth-of-type(2) .Select-control').click()
        cy.get('@body').contains('Cellulite').click()

        cy.get('.beauty-concerns-section:nth-of-type(3) .Select-value .Select-value-icon').click()
        cy.get('.beauty-concerns-section:nth-of-type(3) .Select-control').click()
        cy.get('@body').contains('Frizz').click()

        cy.get('[type="button"]').contains('SAVE').click()

        cy.log('== Check Edit in My Profile ==')
        cy.get('.profile-beauty-id-container').should('contain', 'Dry')
        cy.get('.profile-beauty-id-container').should('contain', 'Light')
        cy.get('.profile-beauty-id-container').should('contain', 'Cool')
        cy.get('.profile-beauty-id-container').should('contain', 'Acne')

    })
})