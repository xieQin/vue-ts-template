// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
  });

  it('Visits test url', () => {
    cy.visit('#/test');
    cy.url().should('include', 'test');

    cy.get('[data-cy=demo-style-header]').should('have.text', 'this is demo component');
  });
});
