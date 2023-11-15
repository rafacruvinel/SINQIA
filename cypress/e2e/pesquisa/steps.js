

Given(/^que acesso a pagina inicial$/, () => {
	cy.visit('/');
});

Then(/^clicar no icone de pesquisar$/, () => {
    cy.contains('Pesquisar')
    .should('be.visible')
    cy.get('#search-open')
    .click()
});

Then(/^digitar um termo valido$/, () => {
    cy.get('Pesquisar')
    .click();
    cy.get('input[name="Pesquisar"').type(FGTS);


});

Then(/^acionar botão pesquisar$/, () => {
    cy.get('#checkoox-select-facilities').click();
    cy.contains('Acessibilidade').click();

});
When(/^então sistema apreseta pesquisa de acordo com os termos$/, () => {
    cy.contains('Com o Empréstimo FGTS do Agi Bank você tem dinheiro na conta em até 24h')
    .should('be.visible');
	
});





Given(/^que acesso a pagina inicial$/, () => {
	cy.visit('/');
});

Then(/^clicar no icone de pesquisar$/, () => {
    cy.contains('Pesquisar')
    .should('be.visible')
    cy.get('#search-open')
    .click()
});

Then(/^digitar um termo não valido$/, () => {
    cy.get('Pesquisar')
    .click()
    cy.get('input[name="Pesquisar"').type(BolaBola);



});

Then(/^acionar botão pesquisar$/, () => {
    cy.get('#checkoox-select-facilities').click();
    cy.contains('Acessibilidade').click();

});
When(/^então sistema apreseta pesquisa de acordo com os termos$/, () => {
    cy.contains('Com o Empréstimo FGTS do Agi Bank você tem dinheiro na conta em até 24h')
    .should('be.visible');
	
});