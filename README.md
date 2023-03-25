## Testes automatizados com Cypress

_Pare reproduzir os testes é necessário fazer o deploy da aplicações web de serviços de barbearia localmente, um banco de dados externo e um serviço de e-amil._

### Configuração do banco no arquivo env na pasta api:
* POSTGRES_HOST=?
* POSTGRES_USER=?
* POSTGRES_PASS=?
* POSTGRES_NAME=?

**No projeto foi utilizado o banco de dados na nuvem disponivel no site https://www.elephantsql.com**

### Configuração do e-mail no arquivo env na pasta api:
* MAIL_DRIVER=?
* MAIL_USER=?
* MAIL_PASS=?

**No projeto foi utilizado o serviço de e-mail na nuvem disponivel no site https://ethereal.email/**

**Deploy da local da aplicações, acesse a pasta API e Web execute os comando abaixo:**  

### Comandos com yarn:

* yarn install
* yarn db:init
* yarn db:populate
* yarn dev

### Comandos com npm:

* npm install
* npm run db:init
* npm run db:populate
* npm run dev

**Iniciar a API Helper da local da aplicações, acesse a pasta do projeto e execute os comando abaixo:** 
### Comandos com npx:
* npx nodemon apiHelper/app.js

### Comandos com yarn:

* yarn nodemon apiHelper/app.js