# garupa-teste

## Como rodar o projeto frontend

1. Ter o [yarn](https://nodejs.org/en/) ou NPM instalado na máquina.


### 1º passo 

Realize um `clone` do repositório para a sua maquina local.

```bash
git clone <fork-link>
```

### 2º Passo
na pasta do projeto, instale as dependências necessárias.

```bash
yarn install
```
ou
```bash
npm install
```

### 4º Passo
na pasta raiz do projeto rode o comando.
```bash
yarn start
```
ou
```bash
npm run start
```
#### Acessando a aplicação.

Ao rodar o projeto, você vai se deparar com uma tela de login, para ter acesso ao conteúdo, basta informar um e-mail válido Ex: `teste@gmail.com` 
seguido de uma senha.

Você também pode realizar o acesso através de sua conta do Google.

### Link do projeto frontend em produção: (https://site-beers.netlify.app/)

## :rocket: Tecnologias Utilizadas

-  [Reactjs](https://pt-br.reactjs.org/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Styled Components](https://styled-components.com/)
-  [Firebase](https://firebase.google.com/?hl=pt)
-  [Axios](https://github.com/axios/axios)

## Como rodar o projeto backend
1. Ter o [node](https://nodejs.org/en/) instalado na máquina, o [yarn](https://nodejs.org/en/) ou NPM e [insomnia](https://insomnia.rest/download) ou [postman](https://www.postman.com/downloads/).

### 1º Passo
na pasta do projeto, instale as dependências necessárias.

```bash
yarn install
```
ou
```bash
npm install
```

### 3º Passo

Configurar o arquivo do banco de dados, na raiz do projeto tem um arquivo chamado `ormconfigexemple.json`, crie ou altere o nome desse arquivo para `ormconfig.json`. O arquivo terá a estrutura abaixo, altere os dados necessários para a conexão com o seu banco local.

```bash
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "",
  "database": "users",
  "entities": ["src/entities/*.ts"],
  "migrations": ["src/database/migrations/*.ts"],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/database/migrations"
  }
}
```
### 4º Passo

Após a conexão bem sucedida com o banco, rode o comando abaixo para criação das `migrations` do banco.

Criar migration:
```bash
yarn typeorm migration:run
```
Desfazer uma migration:

```bash
yarn typeorm migration:revert
```

### 5º Passo

Para conseguir realizar requisições nos endpoints da aplicação, será necessário adicionar o `token` abaixo no `Header` do insomnia ou do postman, nas requisições: `GET`, `POST`, `PUT` e `DELETE`, caso contrário, um erro de `Falha na autenticação` será exibido:

nome do header:
```bash
_token
```
valor do header
```bash
ae1980c688c5252ac76a0db02276e8ac44af2eed7cc1e8e5d22544f53a8ab0b13169cef43b0d1ef3381133ffb4cad731657225bd20cd35785794ca27baf200ec
```

### 6º Passo

Para rodar o projeto, execute o comando abaixo:
```bash
yarn dev
```
O projeto estará rodando na porta 3333.

## Endpoints

Métodos | Endpoints
------------- | -------------
GET  | /users
GET  | /users/{id}
POST  | /users
PUT  | /users/{id}
DELETE  | /users/{id}

### Estrutura do método POST:
```bash
{
  "name": "teste",
  "phone": "9999999",
  "cpf": "123456789",
  "email": "teste@teste.com",
  "city": "Palmas",
  "state": "TO"
}
```

### Estrutura do método PUT:
```bash
{
  "name": "teste atualizado",
  "phone": "8888888",
  "email": "novoteste@teste.com",
  "city": "Araguaina",
  "state": "TO"
}
```

## :rocket: Tecnologias Utilizadas

-  [Nodejs](https://nodejs.org/en/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Express](https://expressjs.com/pt-br/)
-  [PostgreSQL](https://www.postgresql.org/)
-  [TypeORM](https://typeorm.io/)
