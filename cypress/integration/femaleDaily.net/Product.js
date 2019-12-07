describe ('Product',  () => {

    it('Create Product', () => {
        cy.get('body').as('body')
        cy.log('== Login Shortcut ==')
        cy.login()

        cy.log('== Go to Setting Page ==')
        cy.get('.gbheader-userprofile').click()
        cy.get('.gbheader-dropdown-profile-notif').contains('Settings').click({ force: true })
        cy.wait(2000)

        cy.log('== Go to Input Product Page ==')
        cy.get('.gbheader-add').click()
        cy.get('.gbheader-dropdown-item').contains('Add Product').click({ force: true })
        cy.get('[id="id_sure"]').click()

        cy.log('== Input Data Product Image ==')
        cy.get('[placeholder="Insert Image url"]').clear().type('https://www.watsons.co.id/medias/sys_master/front/zoom/8907402313758.jpg')
        cy.get('[id="addproduct-button-show-image"]').click()
        cy.get('[id="addproduct-button-next"]').click()

        cy.log('== Input Data Product Brand and Name ==')
        cy.get('.Select-placeholder').contains('- Select Your Product\'s Brand -').click()
        cy.get('.Select--single').contains('100% Pure').click()

        cy.get('.Select-placeholder').contains('- Select Category -').click()
        cy.get('.Select--single').contains('Hair').click()

        cy.get('.Select-placeholder').contains('- Select Sub Category -').click()
        cy.get('.Select--single').contains('Shampoo & Conditioner').click()

        cy.get('.jsx-3155286602:nth-of-type(2) .Select-placeholder').contains('- Select Sub Category -').click()
        cy.get('.Select--single').contains('Dry Shampoo').click()

        cy.get('[id="addproduct-input-product-name"]').type('Pantene')
        cy.get('[name="addproduct-input-product-shade"]').type('Daily Moisture')
        cy.get('[id="addproduct-button-submit"]').click()

        cy.log('== Input Data Product Info ==')
        cy.get('[id="number-format"]').type('300000')
        cy.get('[id="description-field"]').type('Ini Hanya Contoh Testing')
        cy.get('[id="tag-select"]').type('Pantene {enter}', {force: true})
        cy.get('[id="tag-select"]').type('Conditioner {enter}', {force: true})
        cy.get('[id="product-info-button-submit"]').click()

        cy.get('.jsx-3821202369').contains('Next Time').click()

        cy.log('== Check Product Added ==')
        cy.get('[id="id-product-details"] .product-name').should('contain', 'Pantene')
    })

    it('Add Wislist', () => {
        cy.login()
        cy.log('== Search Product ==')
        cy.get('.gbheader-dropdown-profile-notif').contains('My Profile').click({ force: true })
        cy.get('.product-card-default-title').contains('UVA/UVB Defense SPF 50+').click()
        cy.wait(2000)
        cy.get('[id="id-product-details"] .product-name').should('contain', 'UVA/UVB Defense SPF 50+')
        cy.get('[id="button-wishlist"]').click({force: true})

        cy.log('== Check Wishlist ==')
        cy.get('.gbheader-dropdown-profile-notif').contains('My Profile').click({ force: true })
        cy.get('[id="id_tab_wishlist"]').click()
        cy.get('.wish-list').should('contain', 'UVA/UVB Defense SPF 50+')
    })

    it('Delete Wishlist', () => {
        cy.login()

        cy.log('== Go Product Wishlist ==')
        cy.get('.gbheader-dropdown-profile-notif').contains('My Profile').click({ force: true })
        cy.wait(2000)
        cy.get('[id="id_tab_wishlist"]').click()
        cy.get('.wish-list').contains('UVA/UVB Defense SPF 50+').click({force: true})

        cy.log('== Delete Wishlish ==')
        cy.get('[id="id-product-details"] .product-name').should('contain', 'UVA/UVB Defense SPF 50+')
        cy.get('[id="button-wishlist"]').click({force: true})
    })

    it('Buy Product', () => {
        cy.get('body').as('body')
        cy.log('== Login Shortcut ==')
        cy.login()

        cy.log('== Search Product ==')
        cy.get('[id="id_search_input_field_home"]').type('Cetaphil')
        cy.get('.search-all-cover').contains('Oily Skin Cleanser').click()
        cy.get('[id="id-product-details"] .product-brand').should('contain', 'Cetaphil')

        cy.log('== Buy Product ==')
        cy.get('.product-page-tokped a').should('have.attr', 'href', '/redirect?target=aHR0cHM6Ly90b2tvcGVkaWEuYnkvZmVtYWxlZGFpbHkvY2F0YWxvZy9jZXRhcGhpbC1vaWx5LXNraW4tY2xlYW5zZXI/c3JjPWZlbWFsZWRhaWx5')
    })




    
})