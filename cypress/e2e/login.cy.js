import loginPage from '../support/page/login'


describe('login', () => {

    context('quando submeto o formulário de login', () => {

        it("deve logar com sucesso", () => {
            const user = {
                name: 'Jean',
                email: 'Jeanmoreira@yahoo.com',
                password: 'pwd123'
            }

            loginPage.submit(user.email, user.password)

            cy.get('.logged-user div a')
                .should('be.visible')
                .should('have.text', 'Olá, ' + user.name)

        })

        it("não deve logar com senha incorreta", () => {
            const user = {
                name: 'Jean',
                email: 'Jeanmoreira@yahoo.com',
                password: 'pwd321'
            }

            loginPage.submit(user.email, user.password)
        
            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            cy.get('.notice-container')
                .should('be.visible')
                .find('.error p')
                .should('have.text', message)

        })

        it("não deve logar com email não cadastrado", () => {
            const user = {
                name: 'Jean',
                email: 'Jeanmoreira@404.com',
                password: 'pwd321'
            }

            loginPage.submit(user.email, user.password)
        
            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            cy.get('.notice-container')
                .should('be.visible')
                .find('.error p')
                .should('have.text', message)
        })
        
    })

})