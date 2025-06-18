class FormularioLogin {
  loginInput    = "#username";
  senhaInput    = "#password";
  submitBtn     = ".radius";
  logoutBtn     = ".secondary";
  loginOK       = ".success";
  loginFalha    = ".error";
  usernameFalha = " Your username is invalid! ";
  senhaFalha    = " Your password is invalid! ";
  authFalha     = " You must login to view the secure area! "

  visit() {
    cy.visit("/login");
  }
  setUser(username) {
    cy.get(this.loginInput).clear().type(username);
  }
  setSenha(password) {
    cy.get(this.senhaInput).clear().type(password);
  }
  submit() {
    cy.get(this.submitBtn).click();
  }
  logout() {
    cy.get(this.logoutBtn).click();
  }
  login(username, password) {
    this.setUser(username);
    this.setSenha(password);
    this.submit();
  }
  validaLoginOK() {
    cy.get(this.loginOK).should("be.visible");
  }
  validaUsernameIncorreto() {
    cy.get(this.loginFalha).should("contain", this.usernameFalha.trim());
  }
  validaSenhaIncorreta() {
    cy.get(this.loginFalha).should("contain", this.senhaFalha.trim());
  }
  validaAuthFalha(){
    cy.get(this.loginFalha).should("contain", this.authFalha.trim());
  }
}

export default new FormularioLogin();
