// Test to make sure the landing page renders at least
describe("Landing Page", () => {
    it("should render the landing page", () => {
        cy.visit("/");
        cy.get("main").should("exist");
    });

    it('should display search input', () => {
        cy.visit("/");
        cy.get('#searchInput').should('be.visible');
    });

    it('renders the books container', () =>{
        cy.visit("/");
        cy.get('#booksContainer').should('exist');
    })
});
