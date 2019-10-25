# API - Albert Einstein

Simples API RESTful criada com NodeJS + Express que possui um objetivo e único endpoint /api/solve. Onde rota receber um array de inteiros A e um inteiro K, e responde se é possível que a soma de dois números distintos de A resultem em K.

## Sobre este projeto

Este projeto faz parte do meu portfólio pessoal, portanto, ficarei feliz se você puder me fornecer algum feedback sobre o projeto, código, estrutura ou qualquer coisa que você possa relatar que possa me tornar um desenvolvedor melhor!

Email-me: andrewvazzoler15@gmail.com

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/andrew-vazzoler-a7363614a/)

## Começando

### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico com o NodeJS 8+ instalado.

### Instalando

**Clonando o Repositório**

```
$ git clone https://github.com/AndrewVazzoler/api-einstein.git

$ cd api-einstein
```

**Instalar dependências**

```
$ yarn
```

_ou_

```
$ npm install
```

### Executando o ambiente de desenvolvimento

Com todas as dependências instalado eo ambiente configurado corretamente, você pode agora executar o servidor:

```
$ yarn start
```

_ou_

```
$ npm run start
```

### Executar os Testes

```
$ yarn test
```

_ou_

```
$ npm run test
```

### Executando os testes + cobertura

```
$ yarn test:cov
```

_ou_

```
$ npm run test:cov
```

## Routes

O URL base é: http://localhost:3333/api/

**Verificar se é posivel com a soma de dois numeros da lista de inteiros é possivel obter o valor desejado**

> http://localhost:3333/api/solve

| ENDPOINT | Method | Body                                                      | Success Response                                                                                                                                                                                                                                                | Error Response                                                                                                                       |
| -------- | ------ | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| /solve   | `POST` | `{ "arrIntegers": [3, 6, 9, 10, 12], "valueWanted": 10 }` | **Code:** 200 - OK <br />**Content:** `{ "message": "With the integers passed it is possible to do the operation", "status": "success"}` <br /> **OR** <br /> `{ "message": "With integers passed it is not possible to do the operation", "status": "failed"}` | **Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ "message": "Must enter arrIntegers and valueWanted", "status": "error" }` |

<br />

> _arrIntegers_: Lista com os numeros inteiros.

> _valueWanted_: Valor desejado.

# Construído com

- [NodeJS](https://nodejs.org/en/) - Construa o servidor
- [body-Parser](https://github.com/expressjs/body-parser#readme) - Node.js body parsing middleware
- [express](https://expressjs.com/) - Roteador do Aplicativo
- [nodemon](https://nodemon.io/) - Process Manager usado no desenvolvimento
- [tslint](https://palantir.github.io/tslint/) - TS Linter and code style
- [JEST](https://jestjs.io/) - Testes
- [Chai](https://www.chaijs.com/) - Testes
- [prettier](https://github.com/prettier/prettier) - Formatador de código
- [super-test](https://github.com/visionmedia/supertest) - Testar solicitações HTTP
- [husky](https://github.com/typicode/husky) - Git hooks

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE.md](https://github.com/steniowagner/mindcast-server/blob/master/LICENSE) para obter detalhes.
