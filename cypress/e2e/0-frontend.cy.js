/// <referece types='cypress' />
// Faker js
import faker from "@faker-js/faker";
const userNameVal = faker.internet.userName() + "123";
const emailVal = userNameVal + "123@example.com";
const passwordVal = "faker123456";
//
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
// const homeUrl = "http://localhost:3000";
const homeUrl = "/";

before("Should visit homepage correctly", () => {
  cy.visit(homeUrl);
});

describe("Front page test", () => {
  it("Should check footer copyright text", () => {
    cy.get('[data-cy="footer-copyright"]').contains("Tee Jaay ©");
  });
});

describe("Dashboard to Sign In redirect tests", () => {
  it("Should try to visit dashboard", () => {
    cy.get(".MuiTypography-root > img").click();
  });
  it("Should visit to sign in page", () => {
    cy.visit("/#/auth/sign-in");
    cy.get(".MuiTypography-h5").contains("Sign in");
  });
});

// Sign Up
describe("Sign up and Sign in tests", () => {
  it("Should visit to Sign Up page", () => {
    cy.get('[data-cy="sign-up-link"]')
      .invoke("attr", "href")
      .should("eq", "/#/auth/sign-up");
    cy.get('[data-cy="sign-up-link"]').click();
    cy.get('[data-cy="signUpBtn"]').should("have.text", "Sign Up");
  });

  it("Should fill up the Sign Up form", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="username"]').type(userNameVal);
    cy.waitHalfSecond();
    cy.get('[data-cy="email"]').type(emailVal);
    cy.waitHalfSecond();
    cy.get('[data-cy="password"]').type(passwordVal);
  });

  it("Should successfully register", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="signUpBtn"]').click();
  });

  it("Should successfully Sign In", () => {
    cy.get('[data-cy="email"]');
    cy.wait(3000);
    cy.get('[data-cy="email"]').type(emailVal);
    cy.get('[data-cy="password"]');
    cy.wait(3000);
    cy.get('[data-cy="password"]')
      .should("have.id", "password")
      .type(passwordVal);
    cy.get('[data-cy="signInBtn"]').should("have.text", "Sign In");
    cy.get('[data-cy="signInBtn"]').click();
  });
});

describe("Sign out tests", () => {
  it("Should sign out successfully", () => {
    cy.get('[data-cy="right-user-menu"]').click();
    cy.get('[data-cy="logout-link"]');
    cy.get('[data-cy="logout-link"]').click();
  });
});
