import formularioLogin from "../pages/formularioLogin";

let login;
let senha;

describe("Formulário Login - E2E", () => {
  beforeEach(() => {
    formularioLogin.visit();
    login = Cypress.env("login");
    senha = Cypress.env("senha");
  });
  // Teste 1 - validar tratamento de erro campo username vazio
  it("deve retornar uma mensagem de erro sinalizando um campo vazio", () => {
    formularioLogin.login(" ", senha);
    formularioLogin.validaUsernameIncorreto(); 
  });
  // Teste 2 - validar tratamento de erro campo senha vazio
  it("deve retornar uma mensagem de erro sinalizando um campo vazio", () => {
    formularioLogin.login(login, " ");
    formularioLogin.validaSenhaIncorreta(); 
  });
  // Teste 3 - validar cenário de login com sucesso
  it("deve conseguir realizar o login com êxito", () => {
    formularioLogin.login(login, senha);
    cy.url().should("include", "/secure");
    formularioLogin.validaLoginOK();
  });
  // Teste 4 - validar tratamento de erro credenciais incorretas
  it("deve retornar um erro que varia de acordo com o campo incorreto", () => {
    formularioLogin.login('usernameErrado', senha);
    formularioLogin.validaUsernameIncorreto();
    formularioLogin.login(login, 'senhaErrada');
    formularioLogin.validaSenhaIncorreta();
  });
  // teste 5 - validar tratamento de erro acesso sem autenticação
  it("deve retornar um erro sinalizando que o login é necessário", () => {
    cy.visit("/secure");
    formularioLogin.validaAuthFalha();
  });
});
