import FormularioLogin from "../pages/FormularioLogin"

let login;
let senha;

describe("Formulário Login - E2E", () => {
  beforeEach(() => {
    FormularioLogin.visit();
    login = Cypress.env("login");
    senha = Cypress.env("senha");
  });
  // Teste 1 - validar tratamento de erro campo username vazio
  it("deve retornar uma mensagem de erro sinalizando um campo vazio", () => {
    FormularioLogin.login(" ", senha);
    FormularioLogin.validaUsernameIncorreto(); 
  });
  // Teste 2 - validar tratamento de erro campo senha vazio
  it("deve retornar uma mensagem de erro sinalizando um campo vazio", () => {
    FormularioLogin.login(login, " ");
    FormularioLogin.validaSenhaIncorreta(); 
  });
  // Teste 3 - validar cenário de login com sucesso
  it("deve conseguir realizar o login com êxito", () => {
    FormularioLogin.login(login, senha);
    cy.url().should("include", "/secure");
    FormularioLogin.validaLoginOK();
  });
  // Teste 4 - validar tratamento de erro credenciais incorretas
  it("deve retornar um erro que varia de acordo com o campo incorreto", () => {
    FormularioLogin.login('usernameErrado', senha);
    FormularioLogin.validaUsernameIncorreto();
    FormularioLogin.login(login, 'senhaErrada');
    FormularioLogin.validaSenhaIncorreta();
  });
  // teste 5 - validar tratamento de erro acesso sem autenticação
  it("deve retornar um erro sinalizando que o login é necessário", () => {
    cy.visit("/secure");
    FormularioLogin.validaAuthFalha();
  });
});
