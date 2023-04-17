import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'
import catalogPage from '../support/pages/catalog'
import orderPge from '../support/pages/order'
import data from '../fixtures/order.json'

describe('pedido', () => {

    context('usuario logado', () => {

        const { customer, shaver, service } = data

        before(() => {

            cy.createUser(customer)
            cy.uiLogin(customer)


        })

        it('deve poder solicitar serviços', () => {
            shaversPage.selectShaver(shaver.name)
            catalogPage.hasShaver(shaver.name)
            catalogPage.selectService(service.description)
            catalogPage.hasTitle(service.description)
            catalogPage.confirmeOrder()
            orderPge.hasOrder()

        })

    })
}) 