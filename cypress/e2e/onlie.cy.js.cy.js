describe('app', () => {
  it('deve estar online', () => {
    cy.visit('http://localhost:3000')

    cy.title().should('eq', 'Shave eXperience')
  })
})