/// <referece types='cypress' />
// Faker js
import faker from "@faker-js/faker";
import { formatedDate } from "../extra/helpers";

const email = "json@example.com";
const password = "123456";

const title = faker.lorem.sentence();
const description = faker.lorem.sentence();
const todo = faker.lorem.sentence();
const moreTodo = faker.lorem.sentence();
const todoToDelete = faker.lorem.sentence();
const chat = faker.lorem.sentence();
const chatEmoji = faker.lorem.sentence();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

before("Should successfully signin with email and password", () => {
  cy.signIn(email, password);
  cy.projectsPage();
  cy.newestProject();
});

describe("Task details tests", () => {
  it("Should go to the newest project's Tasks tab", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="tasks"]').click();
  });
});

describe.skip("New task", () => {
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
    cy.get('[data-cy="save-btn"]').click({ force: true });
  });

  it.skip("Verify new task", () => {
    cy.get('[data-cy="task-list-title"]').should("contain", title);
    cy.waitHalfSecond();
  });
});

describe("Latest task tests", () => {
  it("Should open the latest task's detail modal", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="task-index-0"]').click({ force: true });
    cy.waitHalfSecond();
  });
});

describe("Task title tests", () => {
  it("Should update the task title", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="task-title"]').last().clear();
    cy.waitHalfSecond();
    cy.get('[data-cy="task-title"]').last().type(title);
  });

  it("Verify the updated task title", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="task-title"]').first().should("be.visible");
  });
});

describe("Task date tests", () => {
  it("Should update task dates", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="planned start"]')
      .last()
      .type("2020-03-05", { force: true });
    cy.waitHalfSecond();
    cy.get('[data-cy="actual start"]')
      .last()
      .type("2022-04-06", { force: true });
    cy.waitHalfSecond();
    cy.get('[data-cy="planned end"]').last().clear();
    cy.waitHalfSecond();
    cy.get('[data-cy="planned end"]')
      .last()
      .type("2022-07-11", { force: true });
    cy.waitHalfSecond();
    cy.get('[data-cy="actual end"]').last().clear();
    cy.waitHalfSecond();
    cy.get('[data-cy="actual end"]').last().type("2022-08-12", { force: true });
    cy.waitHalfSecond();
  });
});

describe("Update description", () => {
  it("Should update the task description", () => {
    cy.get('[data-cy="task-description"]').last().clear();
    cy.waitHalfSecond();
    cy.get('[data-cy="task-description"]')
      .last()
      .type(description, { force: true });
    cy.waitHalfSecond();
  });

  it("Verify updated description", () => {
    cy.get('[data-cy="task-description"]').last().should("be.visible");
  });
});

describe("Task priority", () => {
  it("Should update the task priority", () => {
    cy.get('[data-cy="priority-select"]').first().click({ force: true });
    cy.waitHalfSecond();
    // cy.get('[data-cy="Critical"]').first();
  });
  it("Verify priority", () => {
    cy.get(
      ".makeStyles-root-161 > .MuiFormControl-fullWidth > .MuiFormControl-root > .MuiOutlinedInput-root > #outlined-select-priority"
    ).should("be.visible");
    //cy.get('[data-cy="priority-select"]').should("be.visible");
  });
});

describe("Todos tests", () => {
  it("Should create a todo", () => {
    cy.get('[data-cy="todo-text"]').last().type(todo);
    cy.get('[data-cy="todo-text"]').last().type("{enter}");
  });

  it("Create more todo", () => {
    cy.get('[data-cy="todo-text"]').last().type(moreTodo);
    cy.get('[data-cy="todo-text"]').last().type("{enter}");
  });

  it("Verify todo", () => {
    cy.get('[data-cy="todo-text-value"]').first().should("be.visible");
    cy.get('[data-cy="todo-text-value"]').first().should("contain", moreTodo);
  });

  it("Mark todo as done", () => {
    cy.get('[data-cy="todo-done-0"]').should("be.visible");
    cy.get('[data-cy="todo-done-0"]').click();
  });
  it("Create todo to delete", () => {
    cy.get('[data-cy="todo-text"]').last().type(todoToDelete);
    cy.get('[data-cy="todo-text"]').last().type("{enter}");
  });
  it("Delete a todo", () => {
    cy.get('[data-cy="todo-delete-0"] > [data-testid="DeleteIcon"]')
      .should("be.visible")
      .dblclick();
  });
});

describe("Chat tests", () => {
  it("Should post new chat", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="task-chat-input"]').last().type(chat, { force: true });
    cy.waitHalfSecond();
    cy.get('[data-cy="chat-send-btn"]').last().click({ force: true });
    cy.waitHalfSecond();
  });

  it("Post chat with emoji", () => {
    cy.waitHalfSecond();
    cy.get('[data-cy="task-chat-input"]')
      .last()
      .type(chatEmoji, { force: true });
    cy.waitHalfSecond();
    cy.get('[data-testid="EmojiEmotionsIcon"] > path').click({ force: true });
    cy.get(
      '[data-name="smileys_people"] > :nth-child(1) > button > .emoji-img'
    ).click({ force: true });
    cy.get('[data-cy="chat-send-btn"]').last().click({ force: true });
    cy.waitHalfSecond();
  });

  it("Post chat with file upload", () => {});

  it("Post chat with emoji and file", () => {});

  it("Verify chat", () => {
    cy.get('[data-cy="chat-message-value"]').should("be.visible");
    cy.get('[data-cy="chat-message-value"]').should("contain", chat);
  });
});
