class FormularioLogin {
  usernameInput = '#username';
  passwordInput = '#password';
  submitButton  = '.radius'  ;

  visit() {
    cy.visit('/login');
  }

  setUsername(username) {
    cy.get(this.usernameInput).clear().type(username);
  }

  setPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  login(username, password) {
    this.setUsername(username);
    this.setPassword(password);
    this.submit();
  }
}

export default new FormularioLogin();
