describe('login', () => {


    context('quando submeto o formulário de login', () => {

        it("deve logar com sucesso", () => {
            const user = {
                name: 'Jean',
                email: 'Jeanmoreira@yahoo.com',
                password: 'pwd123'
            }

            cy.visit('http://localhost:3000')

            cy.get('input[placeholder$=email]').type(user.email)
            cy.get('input[placeholder*=senha]').type(user.password)


            cy.contains('button', 'Entrar')
                .click()

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

            cy.visit('http://localhost:3000')

            cy.get('input[placeholder$=email]').type(user.email)
            cy.get('input[placeholder*=senha]').type(user.password)


            cy.contains('button', 'Entrar')
                .click()
        
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

            cy.visit('http://localhost:3000')

            cy.get('input[placeholder$=email]').type(user.email)
            cy.get('input[placeholder*=senha]').type(user.password)


            cy.contains('button', 'Entrar')
                .click()
        
            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'

            cy.get('.notice-container')
                .should('be.visible')
                .find('.error p')
                .should('have.text', message)
        })
    })

})