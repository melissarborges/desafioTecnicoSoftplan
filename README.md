# Desafio Técnico Softplan

 Este projeto foi desenvolvido em JavaScript com Cypress

# Pré-requisitos e configurações iniciais:

   ### NodeJS [versão LTS](https://nodejs.org/en/download/)
    
    - após instalar node, instalar yarn através do npm utilizando o comando:
        - npm install --global yarn

# Baixando as dependências:

    - yarn upgrade && yarn
    
    com as dependências baixadas executar o comando:
        - yarn cypress open

# Rodando o projeto em modo headless:

    - yarn cy:run

# Allure report:

    - yarn add allure-commandline
    (o comando acima deve ser rodado apenas uma vez)
    - yarn cy:run
    - yarn allure:generate
    - yarn allure:open
    

