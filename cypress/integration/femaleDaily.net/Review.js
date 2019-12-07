describe ('Review',  () => {

    it('Create Review', () => {
        cy.get('body').as('body')
        cy.log('== Login Shortcut ==')
        cy.login()

        cy.log('== Search Product ==')
        cy.get('[id="id_search_input_field_home"]').type('Cetaphil')
        cy.get('.search-all-cover').contains('Restoraderm - Skin Restoring Body Wash').click()
        cy.get('[id="id-product-details"] .product-brand').should('contain', 'Cetaphil')

        cy.log('== Review Product ==')
        cy.get('[id="id_button_review"]').click()
        cy.get('[id="id_star5"]').click()
        cy.get('.text-overall').should('contain', '"A must-have product!"')
        cy.get('.button-step-container').contains('NEXT').click()

        cy.get('.duration-item').contains('1 Week - 1 Month').click()
        cy.get('[name="scales"]').check()
        cy.get('.button-step-container').contains('NEXT').click()
        
        cy.get('.background .item-cat').contains('Brand website').click()
        cy.get('.button-step-container').contains('NEXT').click()

        cy.get('.thumbs-container .icon-ic_thumbs_up_normal').click()

        cy.get('textarea[name="name"]').type('Atas rekomendasi dari banyak orang pake cetaphil ini emanb beneran gentle, wajahku berminyak bgt baru pake beberapa kali udah keliatan hasilnya, nggak berbusa tapi enak bgt dipake jadi berkurang minyaknya')

        cy.get('.button-prev-next').contains('SUBMIT').should('be.visible').click()

        cy.log('== View The Review ==')
        cy.get('.modal-button').contains('View My Review').click()
        cy.get('.list-reviews .username').contains('fakhruzzahid').should('be.visible')
        cy.get('.list-reviews .text-content').should('contain', 'Atas rekomendasi dari banyak orang pake cetaphil ini emanb beneran gentle, wajahku berminyak bgt baru pake beberapa kali udah keliatan hasilnya, nggak berbusa tapi enak bgt dipake jadi berkurang minyaknya')
        cy.get('.list-reviews .information-wrapper').should('contain', '1 week - 1 month').and('contain', 'Brand website')
    })

    it('Edit Review', () => {
        cy.get('body').as('body')
        cy.log('== Login Shortcut ==')
        cy.login()

        cy.log('== Get Product Review ==')
        cy.get('.gbheader-dropdown-profile-notif').contains('My Profile').click({ force: true })
        cy.get('.product-card-default-title').contains('UVA/UVB Defense SPF 50+').click()
        cy.get('[id="id_button_review"]').click()
        cy.wait(2000)

        cy.log('== Review Product ==')
        cy.get('[id="id_star4"]').click()
        cy.get('.text-overall').should('contain', '"It’s a good product"')
        cy.get('.button-step-container').contains('NEXT').click()

        cy.get('.duration-item').contains('1 Month - 3 Months').click()
        cy.get('[name="scales"]').uncheck()
        cy.get('.button-step-container').contains('NEXT').click()
        
        cy.get('.background .item-cat').contains('FD Flash Sale').click()
        cy.get('.button-step-container').contains('NEXT').click()

        cy.get('textarea[name="name"]').clear().type('Edit Atas rekomendasi dari banyak orang pake cetaphil ini emanb beneran gentle, wajahku berminyak bgt baru pake beberapa kali udah keliatan hasilnya, nggak berbusa tapi enak bgt dipake jadi berkurang minyaknya')

        cy.get('.button-prev-next').contains('SUBMIT').should('be.visible').click()

        cy.log('== View The Review ==')
        cy.get('.list-reviews .username').contains('fakhruzzahid').should('be.visible')
        cy.get('.list-reviews .text-content').should('contain', 'Edit Atas rekomendasi dari banyak orang pake cetaphil ini emanb beneran gentle, wajahku berminyak bgt baru pake beberapa kali udah keliatan hasilnya, nggak berbusa tapi enak bgt dipake jadi berkurang minyaknya')
        cy.get('.list-reviews .information-wrapper').should('contain', '1 month - 3 months').and('contain', 'FD Flash Sale')
    })
})