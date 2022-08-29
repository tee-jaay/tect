/// <referece types='cypress' />
// Faker js
import faker from "@faker-js/faker";
import { formatedDate } from "../extra/helpers";

const email = "json@example.com";
const password = "123456";

const title = faker.lorem.sentence();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

before("Should successfully signin with email and password", () => {
  cy.signIn(email, password);
  cy.projectsPage();
  cy.newestProject();
});

describe("Project tasks tests", () => {
  it("Should go to the newest project's Tasks tab", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="tasks"]').click();
  });
});
describe("Create task tests", () => {
  it("Should create a new task using form", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="title"]').type(title);
    cy.waitHalfSecond();
    cy.get("#outlined-select-status").click();
    cy.waitHalfSecond();
    cy.get('[data-cy="not started"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="start-date"]').type(formatedDate("2020-02-04"));
    cy.waitHalfSecond();
    cy.get('[data-cy="end-date"]').type(formatedDate("2022-03-06"));
    cy.waitHalfSecond();
    cy.get("#outlined-select-priority").click();
    cy.waitHalfSecond();
    cy.get('[data-cy="High"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="save-btn"]').click();
    cy.waitHalfSecond();
  });

  it("Should validate new task by title", () => {
    cy.get(".MuiTableBody-root > :nth-child(2) > :nth-child(2)").should(
      "contain",
      title
    );
    cy.get(".MuiTableBody-root > :nth-child(2) > :nth-child(2)").should(
      "be.visible"
    );
  });
});
