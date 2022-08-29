// <referece types='cypress' />
// Faker js
import "cypress-localstorage-commands";

const email = "json@example.com";
const password = "123456";

Cypress.on("uncaught:exception", (_err, _runnable) => {
  return false;
});

before("Should successfully signin with email and password", () => {
  cy.signIn(email, password);
  cy.projectsPage();
});

describe("Project page tests", () => {
  it("Should search projects with top search input", () => {
    cy.wait(500);
    cy.get('[data-cy="top-search"]');
    cy.get('[data-cy="top-search"]').type("blockchain");
    cy.wait(500);
    cy.get('[data-cy="top-search"]').clear();
  });
});
