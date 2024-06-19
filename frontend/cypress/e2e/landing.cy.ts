// Test to make sure the landing page renders at least
describe("Landing Page", () => {
    it("should render the landing page", () => {
        cy.visit("/");
        cy.get("main").should("exist");
    });
});
