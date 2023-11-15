
# language: pt

Feature: Pesquisa
    Como usuario, desejo pesquisar por informações


    Scenario: Scenario name: Pesquisa Valida
        Given que acesso a pagina inicial
        And clicar no icone de pesquisar
        And digitar termo valido 
        When acionar botão pesquisar
        Then então sistema apreseta pesquisa de acordo com os termos



    Scenario: Scenario name: Pesquisa com Termo Inválido
        Given que acesso a pagina inicial
        And clicar no icone de pesquisar
        And digitar termo não valido
        When acionar botão pesquisar
        Then então sistema apresenta pesquisa de acordo com os termos