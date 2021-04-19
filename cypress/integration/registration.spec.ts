import {mount} from '@cypress/react'

beforeEach(() => {
    cy.visit('/')
})

describe('registration test', () => {
    it('registration success', () => {
        cy.contains('Зарегистрироваться').click()
        cy.url().should('include', '/register/')

        const randomId = () => {
            return Math.floor(Math.random() * 1000)
        }

        const registerUser = {
            username: 'username' + randomId(),
            password: 'password',
        }

        cy.get('#username')
            .type(registerUser.username)

        cy.get('#password')
            .type(registerUser.password)

        cy.get('#confirmPassword')
            .type(registerUser.password)

        cy.contains('Зарегистрироваться').click()

        cy.url().should('include', '/register/')
        cy.contains('Вы успешно зарегистрировальсь!')
    })
})