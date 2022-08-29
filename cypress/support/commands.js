// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// To visit sign-in page and sign-in with given email and password
Cypress.Commands.add("signIn", (email, password) => {
  cy.visit("/#/auth/sign-in");
  cy.waitHalfSecond();
  cy.get('[data-cy="email"]').type(email);
  cy.waitHalfSecond();
  cy.get('[data-cy="password"]').type(password);
  cy.waitHalfSecond();
  cy.get('[data-cy="signInBtn"]').click();
});

// Login by Api request
Cypress.Commands.add("loginByApi", (email, password) => {
  cy.request({
    method: "POST",
    url: `${Cypress.config('apiUrl')}/auth/login`,
    body: {
      email,
      password
    }
  }).then(response => {
    localStorage.setItem("auth_token", response['body']['accessToken']);
  });
  cy.wait(500);
  cy.visit(`${Cypress.config('baseUrl')}/#/dashboard`);
});

// To visit projects list page
Cypress.Commands.add("projectsPage", () => {
  cy.get('[data-cy="Projects"]').click();
  cy.url().should("eq", `${Cypress.config().baseUrl}/#/projects`);
});

// To visit newest project
Cypress.Commands.add("newestProject", () => {
  cy.wait(500);
  cy.get('[data-cy-btn="0"]').click();
});

// To wait half second
Cypress.Commands.add("waitHalfSecond", () => {
  cy.wait(500);
});
