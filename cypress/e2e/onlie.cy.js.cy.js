describe('app', () => {
  it('deve estar online', () => {
    cy.visit('/')

    cy.title().should('eq', 'Shave eXperience')
  })
})