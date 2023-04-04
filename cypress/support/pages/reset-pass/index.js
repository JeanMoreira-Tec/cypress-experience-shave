class ResetPassPage {

    go(token) {
        cy.visit('/reset-password?token=' + token)

        cy.get('form h1')
            .should('have.text', 'Resetar senha')
    }

    submit(newPassword, confirmPassword) {
        cy.get('input[placeholder="Nova senha"]')
            .type(newPassword)

        cy.get('input[placeholder="Confirmação da senha"]')
            .type(confirmPassword)

        cy.contains('button', 'Alterar senha')
            .click()
    }

    noticeShouldBe(expectedText) {
        cy.get('.notice p', { timeout: 50000 })
            .should('be.visible')
            .should('have.text', expectedText)
    }

}

export default new ResetPassPage()