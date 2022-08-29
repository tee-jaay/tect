/// <referece types='cypress' />
// Faker js
import faker from "@faker-js/faker";
import { formatedDate } from "../extra/helpers";

const email = "json@example.com";
const password = "123456";

const title = faker.lorem.sentence();
const note = faker.lorem.sentence();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

before("Should successfully signin with email and password", () => {
  cy.signIn(email, password);
  cy.projectsPage();
  cy.newestProject();
});

describe("Admin Dashboard Timesheets Tests", () => {
  it("Should go to the newest project's timesheets tab", () => {
    cy.wait(500);
    cy.get('[data-cy="timesheets"]').click();
  });

  it("Should create  a new timesheet", () => {
    cy.get("#outlined-select-task").click();
    cy.wait(500);
    cy.get('[data-cy="task-index-0"]').click();
    cy.wait(500);
    cy.get('[data-cy="task-title"]').type(title);
    cy.wait(500);
    cy.get('[data-cy="save-timesheet-btn"]').click();
  });

  it("Should add time logs for newwest timesheet", () => {
    cy.get('[data-cy="timesheet-0-add-btn"]').click();
    cy.wait(500);
    cy.get('[data-cy="day"]').type(formatedDate("2020-01-07"));
    cy.wait(500);
    cy.get('[data-cy="time"]').type("01:33:49");
    cy.wait(500);
    cy.get('[data-cy="note"]').type(note);
    cy.wait(500);
    cy.get('[data-cy="save-timelog-btn"]').click();
  });
});
