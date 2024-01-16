# Aplicação de Lista de Dragões

Este é um teste de desenvolvimento que tem como objetivo criar uma aplicação web com as seguintes funcionalidades:

- Página de login: A única página disponível se não estiver logado. Um usuário básico para acesso será criado.

- Página de lista de dragões: Os nomes dos dragões devem estar em ordem alfabética. A partir da lista, é possível remover e alterar as informações dos dragões.

- Página com os detalhes de um dragão específico: Os seguintes dados devem ser apresentados na página: Data de criação, Nome e Tipo.

- Página para cadastro de dragões: O layout é responsivo e a aplicação foi desenvolvida utilizando React, Vite, Axios, React Query, Styled-Components e TypeScript.

## Como baixar e executar o projeto

Para rodar o projeto em sua máquina, siga os passos abaixo:

- Certifique-se que você possui o NodeJs instalado em sua máquina;

### Clone este repositório em seu ambiente.

```js
git clone https://github.com/DeboraZandonai/Dragon.git
```

### Instale as dependências do projeto utilizando o npm ou yarn:
```js
npm install
# ou
yarn install
```

### Após a instalação das dependências, inicie a aplicação:
```js
npm run dev
# ou 
yarn run dev
```

### Acesse a aplicação

[http://localhost:5173/](http://localhost:5173/)

## Funcionalidades

- Página de Login: Acesse a página de login para entrar na aplicação utilizando um usuário básico. Rota (/)

### Acessos para o login

```js
E-MAIL: teste@gmail.com

SENHA: testedragon
```

- Página de Lista de Dragões: Visualize uma lista de dragões em ordem alfabética, remova dragões ou altere suas informações. Rota (/lista)

- Página de Detalhes de Dragão: Veja os detalhes de um dragão específico, incluindo Data de Criação, Nome, Tipo e História. Rota (/detalhe/id)

- Página de Cadastro de Dragão: Cadastre novos dragões à lista. Rota (/cadastrar)

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [ReactQuery](https://tanstack.com/query/v3/)
- [styled-components](https://styled-components.com/)
- [react-router-dom](https://reactrouter.com/en/main)

## API utilizada

A aplicação consome uma API para gerenciar os dragões. Aqui estão os endpoints disponíveis:

- Lista de Dragões: GET /api/v1/dragon

- Detalhes de um Dragão: GET /api/v1/dragon/:id

- Criação de um Dragão: POST /api/v1/dragon

- Edição de um Dragão: PUT /api/v1/dragon/:id

- Deleção de um Dragão: DELETE /api/v1/dragon/:id

- Link do desafio: [Desafio-Dragon](https://github.com/rh-southsystem/desafio-front-dragon)


