# Testes E2E - Cypress

Os testes aplicam os métodos Don't Repeat Yourself (D.R.Y) e Page Object Model (P.O.M) como boas práticas para escalabilidade e legibilidade.

---

## 🔧 Estrutura do Projet​o

cypress-testing/    
├── src/   
│ ├── cypress/   
│ │ ├── e2e/   
│ │ ├── fixtures/  
│ │ ├── pages/  
│ │ └── support/   
│ └── cypress.config.js   
└── README.md     

## Pré-requisitos

- Node.js (versão 14+)
- npm ou yarn
- Navegador suportado pelo Cypress (Electron, Chrome, Firefox etc.)

---

## Clone e Execução

```bash
git clone https://github.com/lidiaaacf/cypress-testing.git
cd cypress-testing/src
npm install cypress --save-dev
# ou
yarn install cypress --save-dev
```

### Roda os testes em modo headless:
```bash
npx cypress run
```
### Abre uma interface para visualização dos testes:
```bash
npx cypress open
```
