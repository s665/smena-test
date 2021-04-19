import {mount} from "@cypress/react";

beforeEach(() => {
    cy.visit('/')
})

describe('authorization testing', () => {
    it('login success and logout testing', () => {
        cy.contains('Вход').click()
        cy.url().should('include', '/login/')

        const authData = {
            username: 'test',
            password: '123'
        }

        cy.get('#username')
            .type(authData.username)

        cy.get('#password')
            .type(authData.password)

        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/login/',
            failOnStatusCode: false,
            body: {
                username: 'test',
                password: '123'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
        })

        cy.contains('Войти').click()
        cy.url().should('include', '/')

        cy.get('.ant-card-meta-title')
            .should('contain', 'test')

        cy.contains('Выход')
            .click()

        cy.get('h1')
            .should('contain', 'Добро пожаловать')

    })
    it('login failure testing', () => {
        cy.contains('Вход').click()
        cy.url().should('include', '/login/')
        cy.get('#username')
            .type('error-username')

        cy.get('#password')
            .type('error-password')
        cy.contains('Войти').click()

        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/login/',
            failOnStatusCode: false,
            body: {
                username: 'error-username',
                password: 'error-password'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(401)
        })

        cy.url().should('include', '/login/')
        cy.get('.ant-alert.ant-alert-error')
            .should('contain', 'Введите правильные')
    })
})
