/// <referece types='cypress' />
// Faker js
import faker from "@faker-js/faker";

const email = "json@example.com";
const password = "123456";

const about = faker.lorem.sentence();
const description = faker.lorem.sentence();
const comment = faker.lorem.sentence();

import { formatedDate } from "../extra/helpers";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

before("Should successfully signin with email and password", () => {
  cy.signIn(email, password);
  cy.projectsPage();
  cy.newestProject();
});

describe("Issues tests", () => {
  it("Should go to the newest project's  Issues tab", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="issues"]').click();
  });

  it("Should click the last accordion title", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="issue-toggle"]').last().click();
  });

  it("Should create a new issue using the form", () => {
    cy.get('[data-cy="issue-about"]').type(about);
    cy.waitHalfSecond();
    cy.get('[data-cy="issue-description"]').type(description);
    cy.waitHalfSecond();
    cy.get('[data-cy="priority-select"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="priority-value-high"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="type-select"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="type-value-feature"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="severity-select"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="severity-value-critical"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="start-date"]').type(formatedDate("1999-01-02"));
    cy.waitHalfSecond();
    cy.get('[data-cy="end-date"]').type(formatedDate("2001-02-04"));
    cy.waitHalfSecond();
    cy.get('[data-cy="save-btn"]').click();
    cy.waitHalfSecond();
  });

  it("Verify latest issue", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="issue-about-value"]').first().should("be.visible");
    cy.get('[data-cy="issue-about-value"]').first().should("contain", about);
  });

  it("Should open the first issue and post a comment", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="issue-toggle"]').first().click();
    cy.waitHalfSecond();
    cy.get('[data-cy="comment-text"]').first().type(comment);
    cy.waitHalfSecond();
    cy.get('[data-cy="comment-post-btn"]').first().click();
    cy.waitHalfSecond();
    cy.get('[data-cy="comment-post-btn"]').first().blur();
    cy.waitHalfSecond();
    cy.get("#panel1a-header").click();
  });
});
