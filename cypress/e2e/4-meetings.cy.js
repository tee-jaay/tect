/// <referece types='cypress' />
// Faker js
import faker from "@faker-js/faker";
import { formatedDate } from "../extra/helpers";

const email = "json@example.com";
const password = "123456";

const title = faker.lorem.sentence();
const agenda = faker.lorem.sentence();
const location = "City name";
const address = "Meeting address";
const phone = "000000000";
const meetingDate = formatedDate(faker.date.soon(14));
const meetingTime = faker.time.recent("wide").substring(0, 8);
const meetingDuration = faker.datatype.float({ min: 0, max: 3, precision: 1 });

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

before("Should successfully signin with email and password", () => {
  cy.signIn(email, password);
  cy.projectsPage();
  cy.newestProject();
});

describe("Meetings tests", () => {
  it("Should go to the newest project's meetings tab", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="meetings"]').click();
  });

  it("Should click the create new meeting button", () => {
    cy.get('[data-cy="create-new-meeting-btn"]');
    cy.waitHalfSecond();
    cy.get('[data-cy="create-new-meeting-btn"]').click();
  });

  it("Should fill up the form correctly", () => {
    cy.get('[data-cy="title"]').type(title);
    cy.waitHalfSecond();
    cy.get('[data-cy="agenda"]').type(agenda);
    cy.waitHalfSecond();
    cy.get('[data-cy="date"]').type(meetingDate);
    cy.waitHalfSecond();
    cy.get('[data-cy="time"]').type(meetingTime);
    cy.waitHalfSecond();
    cy.get('[data-cy="duration"]').type(meetingDuration);
    cy.waitHalfSecond();
    cy.get('[data-cy="location"]').type(location);
    cy.waitHalfSecond();
    cy.get('[data-cy="address"]').type(address);
    cy.waitHalfSecond();
    cy.get('[data-cy="phone"]').type(phone);
  });

  it("Create new meeting", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="save-btn"]').click();
  });

  it("Validate new meeting", () => {
    cy.get('[data-cy="meeting-title-value"]').first().should("contain", title);
    cy.get('[data-cy="meeting-title-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-agenda-value"]')
      .first()
      .should("contain", agenda);
    cy.get('[data-cy="meeting-agenda-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-location-value"]')
      .first()
      .should("contain", location);
    cy.get('[data-cy="meeting-location-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-address-value"]')
      .first()
      .should("contain", address);
    cy.get('[data-cy="meeting-address-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-phone-value"]').first().should("contain", phone);
    cy.get('[data-cy="meeting-phone-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-created-by-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-bookmark-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-status-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-date-value"]')
      .first()
      .should("contain", meetingDate);
    cy.get('[data-cy="meeting-date-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-time-value"]')
      .first()
      .should("contain", meetingTime);
    cy.get('[data-cy="meeting-time-value"]').first().should("be.visible");
    cy.get('[data-cy="meeting-duration-value"]')
      .first()
      .should("contain", meetingDuration);
    cy.get('[data-cy="meeting-duration-value"]').first().should("be.visible");
  });
});

describe("Message tests", () => {
  it("Should post a message correctly", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="message"]').first().type(`${title} by click Send`);
    cy.waitHalfSecond();
    cy.get('[data-cy="send-btn"]').first().click();
    cy.waitHalfSecond();
    cy.get('[data-cy="message"]').first().type(`${title} by press Enter`);
    cy.get('[data-cy="send-btn"]').first().focus().type("{enter}");
  });

  it("Validate new message", () => {
    cy.get('[data-cy="meeting-message-value"]')
      .first()
      .should("contain", title);
  });
});
