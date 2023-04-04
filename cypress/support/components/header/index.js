class Header {
    userShouldbeLoggedIn(name) {

        const firtName = name.split(' ')[0]

        cy.get('.logged-user div a')
            .should('be.visible')
            .should('have.text', 'Olá, ' + firtName)
    }

}

export default new Header()