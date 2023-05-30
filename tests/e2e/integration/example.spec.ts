// https://docs.cypress.io/api/introduction/api.html

describe("Home Page", () => {
  it("has correct heading", () => {
    cy.visit("/");
    cy.dataCy("heading").should("have.text", "Counter Demo");
  });

  it("can increment the counter", () => {
    cy.visit("/");
    cy.dataCy("increment-button").click();
    cy.dataCy("counter-value").should("have.text", "43");
  });

  it("can decrement the counter", () => {
    cy.visit("/");
    cy.dataCy("decrement-button").click();
    cy.dataCy("counter-value").should("have.text", "41");
  });

  it("can change the counter based on the input field value", () => {
    cy.visit("/");
    cy.dataCy("counter-input").shadow().find("input").type("0");
    cy.dataCy("counter-value").should("have.text", "420");
  });
});
