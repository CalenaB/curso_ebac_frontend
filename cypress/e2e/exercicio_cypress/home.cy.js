/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        // Visita a página da aplicação antes de cada teste
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve incluir um novo contato na agenda', () => {
        cy.get('input[type="text"]').type('Nome de Teste')
        cy.get('input[type="email"]').type('teste@email.com')
        cy.get('input[type="tel"]').type('41999999999')
        cy.get('.adicionar').click()

        // Verifica se o novo contato aparece na lista
        cy.contains('Nome de Teste').should('exist')
    })

    it('Deve alterar as informações de um contato', () => {
        // Clica no botão 'EDITAR' do primeiro contato da lista
        cy.get('.edit').first().click()

        // Limpa o campo e digita o novo nome
        cy.get('input[type="text"]').clear().type('Nome Alterado')
        cy.get('input[type="email"]').clear().type('alterado@email.com')
        
        // Clica no botão para salvar a alteração
        cy.get('.alterar').click()

        // Verifica se o nome alterado aparece na tela
        cy.contains('Nome Alterado').should('exist')
    })

    it('Deve remover um contato da agenda', () => {
        // Captura o número de contatos antes da remoção (opcional para validação robusta)
        cy.get('.contato').then((contatos) => {
            const quantidadeInicial = contatos.length

            // Clica no botão 'DELETAR' do último contato
            cy.get('.delete').last().click()

            // Verifica se a lista diminuiu em 1
            cy.get('.contato').should('have.length', quantidadeInicial - 1)
        })
    })
})