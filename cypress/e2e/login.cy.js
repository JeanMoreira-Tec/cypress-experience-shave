import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'

describe('login', () => {

    context('quando submeto o formulário de login', () => {

        it("deve logar com sucesso", () => {
            const user = {
                name: 'Jean',
                email: 'Jeanmoreira@yahoo.com',
                password: 'pwd123'
            }

            loginPage.submit(user.email, user.password)
            shaversPage.header.userShouldbeLoggedIn(user.name)

        })

        it("não deve logar com senha incorreta", () => {
            const user = {
                name: 'Jean',
                email: 'Jeanmoreira@yahoo.com',
                password: 'pwd321'
            }

            loginPage.submit(user.email, user.password)

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.noticeShouldBe(message)

        })

        it("não deve logar com email não cadastrado", () => {
            const user = {
                name: 'Jean',
                email: 'Jeanmoreira@404.com',
                password: 'pwd321'
            }

            loginPage.submit(user.email, user.password)

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.noticeShouldBe(message)

        })

        it("campos obrigatórios", () => {
            loginPage.submit()
            loginPage.requiredFields('E-mail é obrigatório', 'Senha é obrigatória')
        })

    })

    context('senha muito curta', () => {

        const passwords = [
            '1',
            '12',
            '123',
            '1234',
            '12345',
        ]

        passwords.forEach((p) => {
            it(`não deve logar com a senha: ${p}`, () => {
                loginPage.submit('Jeanmoreira@yahoo.com', p)
                loginPage.alertShouldBe('Pelo menos 6 caracteres')
            })
        })
    })

    context('email no formato incorreto', () => {

        const emails = [
            'Jeanmoreira&yahoo.com',
            'Jeanmoreira2yahoo.com',
            'Jeanmoreirayahoo.com',
            '@yahoo.com',
            '@',
            '123456',
            'Alf$Num3ric0'
        ]

        emails.forEach((e) => {
            it(`não deve logar com o email: ${e}`, () => {
                loginPage.submit(e, 'pwd123')
                loginPage.alertShouldBe('Informe um email válido')

            })
        })
    })

})