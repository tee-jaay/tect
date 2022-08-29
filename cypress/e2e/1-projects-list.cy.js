// <referece types='cypress' />
// Faker js
import "cypress-localstorage-commands"

const email = "json@example.com";
const password = "123456";

Cypress.on("uncaught:exception", (_err, _runnable) => {
  return false;
});

before("Should successfully signin with email and password", () => {
  cy.signIn(email, password);
});

describe("Projects list", () => {
  it("Should visit projects list", () => {
    cy.get('[data-cy="Projects"]').click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/#/projects`);
  });
});
