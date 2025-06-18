class UploadArquivos {
  chooseFile   = "#file-upload";
  uploadBtn    = ".button";
  dragDropArea = "#drag-drop-upload";
  filePath     = "../file/emoji_pic.jpg";

  visit() {
    cy.visit("/upload");
  }

  selectFile() {
    cy.get(this.chooseFile).selectFile(this.filePath);
  }

  submit() {
    cy.get(this.uploadBtn).click();
  }

  uploadFileSelect() {
    this.selectFile();
    this.submit();
  }

  dragAndDropFile() {
    cy.get(this.dragDropArea).selectFile(this.filePath, { action: 'drag-drop' });
  }

  uploadFileDragAndDrop() {
    this.dragAndDropFile();
    this.submit();
  }
}

export default new UploadArquivos();
