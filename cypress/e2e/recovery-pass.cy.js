import forgotPassPage from '../support/pages/forgot-password'

describe('esqueci minha senha', () => {

    it('deve poder solicitar o resgate de senha', () => {

        const user = {
            name: "User Qa He Forgot",
            email: "UserQaHeForgot@quality .com",
            password: "pwd123",
            is_shaver: false
        }

        cy.createUser(user)

        forgotPassPage.go()
        forgotPassPage.submit(user.email)

        const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
        forgotPassPage.noticeShouldBe(message)


    })

    it.only('deve poder cadastrar uma nova senha', () => {

        const user = {
            name: "QA User He Forgot",
            email: "QaUserHeForgot@quality.com",
            password: "pwd123",
            is_shaver: false
        }

        cy.createUser(user)

        forgotPassPage.go()
        forgotPassPage.submit(user.email)

        const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
        forgotPassPage.noticeShouldBe(message)

        cy.request({
            method: 'GET',
            url: 'http://localhost:5000/token/' + user.email
        }).then(result => {
            expect(result.status).to.eql(200)

        })

    })

})