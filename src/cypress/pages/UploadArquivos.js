class UploadArquivos {
  chooseFile = "#file-upload";
  uploadBtn = ".button";
  dragDropArea = "#drag-drop-upload";
  filePath = Cypress.env("file");
  filePath2 = Cypress.env("file2");
  filePath3 = Cypress.env("file3");
  divMensagem = ".example";
  textMensagem = "File Uploaded!";

  visit() {
    cy.visit("/upload");
  }
  selectFile(file = this.filePath) {
    cy.get(this.chooseFile).selectFile(file);
  }
  submit() {
    cy.get(this.uploadBtn).click();
  }
  uploadFileSelect() {
    this.selectFile();
    this.submit();
  }
  dragAndDropFile() {
    cy.get(this.dragDropArea).selectFile(this.filePath, {
      action: "drag-drop",
    });
  }
  uploadFileDragAndDrop() {
    this.dragAndDropFile();
    this.submit();
  }
  uploadSequencia() {
    this.selectFile();
    this.selectFile(this.filePath2)
    this.selectFile(this.filePath3)
    this.submit()
  }
  validaUploadOK() {
    cy.get(this.divMensagem).should("contain", this.textMensagem.trim());
  }
}

export default new UploadArquivos();
