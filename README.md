# React Authentication

Este projeto tem como objetivo realizar o processo de autenticação de usuário no React. O projeto também conta com o conceito de rotas privadas, garantindo que somente usuários autenticados tenham acesso a Dashboard.

## Como utilizar

Clone este repositório:

```
git clone git@github.com:LucasLuccaCode/react-router-authentication.git
```

Navegue para a pasta do projeto:

```
cd react-router-authentication
```

Instale as dependências:

```
yarn install 

ou

npm install
```

Em seguida, execute o comando para iniciar o projeto:
 
```
yarn start

ou

npm start
```

## Como funciona:

A página de login é a primeira página a ser exibida, onde ao clicar no botão de logar, é chamada a função `signIn` presente no arquivo de contexto `AuthContext.js`. Essa função, por sua vez, chama a função `signInRequest`, que simula o envio dos dados para uma api, que seria feito usando uma biblioteca como o axios por exemplo. Após o login ser efetuado, os dados são retornados, e o usuário é redirecionado para a página Dashboard. Os dados do usuário e o token são salvos em cache e o token de autorização é definido na instancia do axios para ser enviado automaticamente nas futuras requisições.

## Extra:

Por padrão é usada uma request fake para realizar o login, mas o axios já está totalmente configurado para poder fazer futuras requisições enviando o token no headers. Basta importa-lo de `services/api.js`

## Tecnologias utilizadas

- React
- React Router Dom
- Axios

![Preview demo](https://github.com/LucasLuccaCode/react-router-authentication/blob/main/docs/img/demo.png)