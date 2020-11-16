# tasklist

Projeto criado com intuito de ser um gerenciador de tasks.

## O que foi utilizado:
NodeJS: v8.11.3
Npm: v5.6.0
@angular/cli": v7.3.5
@@angular/material: v7.3.6
@rxjs: v6.3.3
@angular/core: v7.2.0
@angular/flex-layout: v7.0.0-beta.24

## Como utilizar
Para utilizar o projeto virtualmente, você pode acessar o link: https://tasklist-ui-angular.herokuapp.com/#/home ou [clicar aqui](https://tasklist-ui-angular.herokuapp.com/#/home) que será redirecionado para o aplicativo em funcionamento. Foi feito deploy no Heroku.

## Como instalar em máquina local
Para instalar o projeto, você precisa ter instado o NodeJS.
Após isso, basta fazer o clone do projeto, abrir um promp de comando na raiz dele e usar o comando "npm install" e depois "ng serve".

Obs.: As versões utilizadas estão listadas acima.

# O projeto
O projeto utiliza uma api pública para buscar as tasks, e realiza o gerenciamento das mesmas com service, utilizando typescript.

Ao entrar na página inicial, serão listadas dos temas, e para continuar, é preciso a escolha de uam tema. Após a escolha, será listada todas as tasks disponíveis.

Se for tema one, você utilizará o Drag and Drop, para alterar o estado da  task. onde a clicar você poderá ver o modo de edição, caso a task não esteja comcluída. e você terá a opção de  remover uma task. E para Adicionar, basta  clicar no botão "+ Add", que os campos estaram disponiveis para criação da task.

No caso da escolhar for o tema two, será listados todas a s tasks, onde você poderam apenas no checkbox, marcar e desmarcar, para  task conclída ou não. Ao clicar, vai abrir uma caixa abaixo, com as informações da mesma. E pode remover e editar, clicando nos icones, no lado esquerdo da tela, de  cada item. Para adiconar, bsta clicar no botão "+add" e preencher os campos necessarios.
