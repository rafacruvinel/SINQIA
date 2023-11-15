/// <reference types="cypress" />


describe ('Pesquisar no blog agi', () => {
    it('Pesquisa Valida', () => {

        // Acessa home page
        cy.visit('baseurl');


        // Icone pesquisar
        cy.contains('Pesquisar')
        .should('be.visible')
        cy.get('#search-open')
        .click()


        // Inserir termo de pesquisa    
        cy.get('Pesquisar')
        .click();
        cy.get('input[name="Pesquisar"').type(FGTS);

         
        // Acionar botão pesquisar
         cy.get('Pesquisar')
         .click();

    
        // Validar pesquisa
        cy.contains('Com o Empréstimo FGTS do Agi Bank você tem dinheiro na conta em até 24h')
        .should('be.visible');

    });
    


    it('Pesquisa Invalida', () => {

        // Acessa home page
        cy.visit('baseurl');

        
        // Icone pesquisar
        cy.contains('Pesquisar')
        .should('be.visible')
        cy.get('#search-open')
        .click();


        // Inserir termo de pesquisa    
        cy.get('Pesquisar')
        .click();
        cy.get('input[name="Pesquisar"').type(BolaBola);


        // Acionar botão pesquisar
        cy.get('Pesquisar')
        .click();

    
        // Validar pesquisa
        cy.contains('Não encontramos nada para estes termos de busca.')
        .should('be.visible');

    });

});