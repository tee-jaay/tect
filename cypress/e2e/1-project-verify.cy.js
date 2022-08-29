/// <referece types='cypress' />
// Faker js
import "cypress-localstorage-commands"
import faker from "@faker-js/faker";

const email = "json@example.com";
const password = "123456";

const title = faker.lorem.sentence();
const description = faker.lorem.paragraph();
const repositoryLink = "http://www.example.com/repo";
const urlOne = "http://www.example.com/url/1";
const urlTwo = "http://www.example.com/url/2";

Cypress.on("uncaught:exception", (_err, _runnable) => {
  return false;
});

before("Should successfully signin with email and password", () => {
  cy.signIn(email, password);
  cy.projectsPage();
});

describe("Project page tests", () => {
  it("Should search projects with top search input", () => {
    cy.wait(2000);
    cy.get('[data-cy="top-search"]');
    cy.get('[data-cy="top-search"]').type("blockchain");
    cy.wait(3000);
    cy.get('[data-cy="top-search"]').clear();
  });
  it("Should go to the project create page", () => {
    cy.wait(1000);
    cy.get('[data-cy="project-create"]').click();
    cy.wait(1000);
  });
});

describe("Projects create tests", () => {
  it("Should fill up the project create form and click Save", () => {
    cy.get('[data-cy="title"]').type(title);
    cy.wait(500);
    cy.get('[data-cy="description"]').type(description);
    cy.wait(500);
    cy.get('[data-cy="repository-link"]').type(repositoryLink);
    cy.wait(500);
    cy.get('[data-cy="url-one"]').type(urlOne);
    cy.wait(500);
    cy.get('[data-cy="url-two"]').type(urlTwo);
    cy.wait(500);
  });

  it("Should clear title field for Formik validation", () => {
    cy.wait(500);
    cy.get('[data-cy="title"]').clear();
    cy.wait(1500);
    cy.get('[data-cy="title"]').type(title);
  });

  it("Should successfully create project", () => {
    cy.wait(500);
    cy.get('[data-cy="saveBtn"]').click();
  });

  it("Should visit the new project", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy-btn="0"]').click();
  });
});

describe("New project info validation tests", () => {
  it("Will check for  project's title", () => {
    cy.get(
      '[data-cy="title-image-desc-container"] > .MuiTypography-body1'
    ).should("contain", title);
    cy.get(
      '[data-cy="title-image-desc-container"] > .MuiTypography-body1'
    ).should("be.visible");
  });

  it("Will check for  project's description", () => {
    cy.get(
      '[data-cy="title-image-desc-container"] > .MuiTypography-body2'
    ).should("contain", description);
    cy.get(
      '[data-cy="title-image-desc-container"] > .MuiTypography-body2'
    ).should("be.visible");
  });

  it("Will check for project's repository link", () => {
    cy.get(
      '[data-cy="source-container"] > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(2)'
    ).should("contain", repositoryLink);
    cy.get(
      '[data-cy="source-container"] > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(2)'
    ).should("be.visible");
  });
});
