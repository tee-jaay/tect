/// <referece types='cypress' />
// Faker js
import faker from "@faker-js/faker";

const email = "json@example.com";
const password = "123456";

const title = faker.lorem.sentence();
const description = faker.lorem.paragraph();
const estimate = faker.datatype.number();
const spent = Math.round(estimate / 3);
const subject = faker.lorem.sentence();
const content = faker.lorem.paragraph();
const updatedSourceURL = `http://www.example.com/${faker.lorem.word()}`;
const comment = faker.lorem.sentence();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

before("Should successfully signin with email and password", () => {
  cy.signIn(email, password);
  cy.projectsPage();
  cy.newestProject();
});
describe("Project title tests", () => {
  it("Should click the info edit button", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="title-image-desc-container"]').trigger("mouseover");
    cy.waitHalfSecond();
    cy.get('[data-cy="title-img-desc-edit-btn"]').click();
  });
  it("Should type the title input", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="title"]').clear();
    cy.waitHalfSecond();
    cy.get('[data-cy="title"]').type(title);
  });
});
describe("Project description", () => {
  it("Should type value in description input", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="description"]').clear();
    cy.waitHalfSecond();
    cy.get('[data-cy="description"]').type(description);
  });
});

describe("Image tests", () => {
  it("Should attach an image file from fixtures", () => {
    const p = "bg-2.jpg";
    cy.waitHalfSecond();
    cy.get('[data-cy="project-image-input"]').attachFile(p);
    cy.waitHalfSecond();
  });
});

describe("Update project tests", () => {
  it("Should click the save button", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="title-desc-img-save-btn"]').click();
  });
});

describe("Updated info verify", () => {
  it("Verify updated title", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="project-title-value"]').should("contain", title);
  });
  it("Verify updated description", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="project-description-value"]').should(
      "contain",
      description
    );
  });
});

describe("Project budget tests", () => {
  it("Should update the budget values", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="budget-container"]').trigger("mouseover");
    cy.waitHalfSecond();
    cy.get('[data-cy="budget-form-edit-btn"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="estimate"]').clear();
    cy.waitHalfSecond();
    cy.get('[data-cy="estimate"]').type(estimate);
    cy.waitHalfSecond();
    cy.get('[data-cy="spent"]').clear();
    cy.waitHalfSecond();
    cy.get('[data-cy="spent"]').type(spent);
    cy.waitHalfSecond();
    cy.get('[data-cy="save-btn"]').click();
    cy.waitHalfSecond();
  });

  it("Verify updated budgets", () => {
    cy.get('[ data-cy="budget-estimate-value"]').should("contain", estimate);
    cy.get('[ data-cy="budget-spent-value"]').should("contain", spent);
  });
});

describe("Assign employees tests", () => {
  it("Should assign people to the project", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="assignees-container"]').trigger("mouseover");
    cy.waitHalfSecond();
    cy.get('[data-cy="assignee-edit"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="assignee-index-5"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="assignee-index-6"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="assignee-index-7"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="assignee-save-btn"]').click();
  });
});

describe("Message to employees tests", () => {
  it("Should send message to assigned employees", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="email-btn"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="subject"]').type(subject);
    cy.waitHalfSecond();
    cy.get('[data-cy="content"]').type(content);
    cy.waitHalfSecond();
    cy.get('[data-cy="send-btn"]').click();
    cy.waitHalfSecond();
  });
});

describe("Source URLs tests", () => {
  it("Should update the project source URL", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="source-container"] ').trigger("mouseover");
    cy.waitHalfSecond();
    cy.get('[data-cy="source-edit-btn"]').click();
    cy.waitHalfSecond();
    cy.get('[data-cy="source-input"]').clear();
    cy.waitHalfSecond();
    cy.get('[data-cy="source-input"]').type(updatedSourceURL);
    cy.waitHalfSecond();
    cy.get('[data-cy="footer-copyright"]').click();
  });

  it("Verify updated URLs", () => {
    cy.get('[data-cy="source-url-value"]').should("contain", updatedSourceURL);
  });
});

describe("Info comment tests", () => {
  it("Should post a comment", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="comment"]').type(comment);
    cy.waitHalfSecond();
    cy.get('[data-cy="emoji-btn"] ').click();
    cy.waitHalfSecond();
    cy.get(
      '[data-name="smileys_people"] > :nth-child(12) > button > .emoji-img'
    ).click({ force: true });
    cy.waitHalfSecond();
    cy.get('[data-cy="comment-send-btn"]').click();
    cy.get('[data-cy="comment"]').clear();
  });

  it("Verify new comment", () => {
    cy.get('[data-cy="info-comment-value"]').last().should("contain", comment);
  });
});
