// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit('https://femaledaily.com/') 
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
  
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
