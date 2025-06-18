import UploadArquivos from "../pages/UploadArquivos";

describe("Upload Arquivos - E2E", () => {
  beforeEach(() => {
    UploadArquivos.visit();
  });
  // Teste 1 - validar upload por meio do botao "choose file"
  it("deve retornar mensagem de êxito no upload via botão", () => {
    UploadArquivos.uploadFileSelect();
    UploadArquivos.validaUploadOK();
  });
  // Teste 2 - validar upload por meio da área de upload marcada
  it("deve retornar mensagem de êxito no upload via campo drag and drop", () => {
    UploadArquivos.uploadFileDragAndDrop();
    UploadArquivos.validaUploadOK();
  });
  // Teste 3 - validar upload de uma sequência de arquivos
  it("deve retornar mensagem de êxito no upload de diversos arquivos em sequência", () => {
    UploadArquivos.uploadSequencia();
    UploadArquivos.validaUploadOK();
  });
});