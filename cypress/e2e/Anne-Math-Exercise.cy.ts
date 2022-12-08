describe("Anne Math Exercise - Answer", () => {
it("tests Anne Math Exercise - Answer", () => {
  cy.viewport(980, 809);

  cy.visit("http://localhost:4200/");

  cy.get("#mat-input-0").click();

  cy.get("#mat-input-0").type("12");

  cy.get("body > app-root > div > div > mat-card > mat-card-actions > div > button > span.mat-button-wrapper").click();

  cy.get("#toast-container > div").click();

  cy.get("#mat-input-0").click();

  cy.get("#mat-input-0").click();

  cy.get("#mat-input-0").clear();

  cy.get("body > app-root > div > div > mat-card > mat-card-content").click();

  cy.get("#mat-input-0").click();

  cy.get("#mat-input-0").type("11");

  cy.get("body > app-root > div > div > mat-card > mat-card-actions > div > button > span.mat-button-wrapper").click();

  cy.get("#toast-container > div").click();

  });
});
