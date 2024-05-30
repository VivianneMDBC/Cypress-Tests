describe('Testes de Login', () => {
    beforeEach( () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    })

    it('TC01 - Login com credenciais válidas', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('.btn_action').click()
        cy.url('eq', 'https://www.saucedemo.com/v1/inventory.html')
    })

    it('TC02 - Login com username inválido', () => {
        cy.get('#user-name').type('maria_joana')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('.btn_action').click()
        cy.xpath('/html/body/div[2]/div[1]/div/div/form/h3').should('be.visible')
    })
    
    it('TC03 - Login com senha inválida', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('[placeholder="Password"]').type('123456789')
        cy.get('.btn_action').click()
    })

    it('TC04 - Login com username vazio', () => {
        cy.get('#user-name').clear()
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('.btn_action').click()
        cy.xpath('/html/body/div[2]/div[1]/div/div/form/h3').should('be.visible')
    })

    it('TC05 - Login com senha vazia', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('[placeholder="Password"]').clear()
        cy.get('.btn_action').click()
        cy.xpath('/html/body/div[2]/div[1]/div/div/form/h3').should('be.visible')
    } )
})

describe('Testes Add To Cart', () => {
    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('.btn_action').click()
        cy.url('eq', 'https://www.saucedemo.com/v1/inventory.html')
     })

     it('TC01 - Adicionar item ao carrinho a partir da página inventory.html', () => {
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
        cy.xpath('/html/body/div/div[2]/div[1]/div[2]/a/span').contains('1')
     })

     it('TC02 - Adicionar item ao carrinho a partir da página do item', () => {
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[2]/a/div').click()
        cy.url().should('include', '-item.html?id=4')
        cy.xpath('/html/body/div/div[2]/div[2]/div/div/div/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div/div/button').contains('REMOVE')
        cy.xpath('/html/body/div/div[2]/div[1]/div[2]/a/span').contains('1')
     })

     it('TC03 - Remover item do carrinho a partir da página inventory.html', () => {
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('ADD TO CART')
     })

     it('TC04 - Remover do carrinho de compra a partir da página do item', () => {
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[2]/a/div').click()
        cy.url().should('include', '-item.html?id=4')
        cy.xpath('/html/body/div/div[2]/div[2]/div/div/div/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div/div/button').contains('REMOVE')
        cy.xpath('/html/body/div/div[2]/div[2]/div/div/div/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div/div/button').contains('ADD TO CART')
     })

     it('TC05 - Remover do carrinho de compra a partir da página cart.html', () => {
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
        cy.xpath('/html/body/div/div[2]/div[1]/div[2]/a/span').click()
        cy.url().should('include', 'cart.html')
        cy.xpath('/html/body/div/div[2]/div[3]/div/div[1]/div[3]/div[2]/div[2]/button').click()
     })
})

describe('Teste Checkout com sucesso', () => {
    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('.btn_action').click()
        cy.url('eq', 'https://www.saucedemo.com/v1/inventory.html')
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
        cy.xpath('/html/body/div/div[2]/div[1]/div[2]/a/span').click()
        cy.url().should('include', 'cart.html')

    })
    
    it('TC01 - Checkout com sucesso', () => {
        cy.get('.btn_action').click()
        cy.get('#first-name').type('Manoel')
        cy.get('#first-name').should('have.value', 'Manoel')
        cy.get('#last-name').type('Soares')
        cy.get('#last-name').should('have.value', 'Soares')
        cy.get('#postal-code').type('4715-356')
        cy.get('#postal-code').should('have.value', '4715-356')
        cy.get('.btn_primary').click()
        cy.url().should('include', 'checkout-step-two.html')
        cy.get('.btn_action').click()
        cy.get('.pony_express').should('be.visible')
        .and('exist')
    })
})