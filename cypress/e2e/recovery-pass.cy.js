import forgotPassPage from '../support/pages/forgot-password'

describe('esqueci minha senha', () => {

    it('deve poder solicitar o resgate de senha', () => {

        const user = {
            name: "UserQaHeForgot",
            email: "UserQaHeForgot@shavexp.com",
            password: "pwd123",
            is_shaver: false
        }

        cy.createUser(user)

        forgotPassPage.go()
        forgotPassPage.submit(user.email)

        const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
        forgotPassPage.noticeShouldBe(message)


    })

    // it('deve poder cadastrar uma nova senha', {

    // })

})