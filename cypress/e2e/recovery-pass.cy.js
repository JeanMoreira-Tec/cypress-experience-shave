import forgotPassPage from '../support/pages/forgot-password'
import resetPassPage from '../support/pages/reset-pass'
import loginPage from   '../support/pages/login'
import shaversPage from '../support/pages/shavers'


describe('esqueci minha senha', () => {

    it('deve poder solicitar o resgate de senha', () => {

        const user = {
            name: "User Qa He Forgot",
            email: "UserQaHeForgot@quality.com",
            password: "pwd123",
            is_shaver: false
        }

        cy.createUser(user)

        forgotPassPage.go()
        forgotPassPage.submit(user.email)

        const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
        forgotPassPage.noticeShouldBe(message)

    })

    context('quando o usuário solicita resgate de senha', () => {

        const user = {
            name: "QA User He Forgot",
            email: "QaUserHeForgot@quality.com",
            password: "pwd123",
            is_shaver: false
        }

        beforeEach(() => {
            cy.createUser(user)
            cy.recoveryPass(user.email)
            cy.getToken(user.email)
        })

        it('deve poder cadastrar uma nova senha', () => {
            resetPassPage.go(Cypress.env('token'))
            resetPassPage.submit('abc123', 'abc123')

            const message = 'Agora você já pode logar com a sua nova senha secreta.'
            resetPassPage.noticeShouldBe(message)
        })

        afterEach(() => {
            loginPage.submit(user.email, 'abc123')
            shaversPage.header.userShouldbeLoggedIn(user.name)

        })

    })

})