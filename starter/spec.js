const ModalPage = require("./page-objects/modal-page");
const FilesPage = require("./page-objects/files-page");

describe("ADF Demo App", function () {
  const modal = new ModalPage();
  const files = new FilesPage();

  it("Check that modal title is correct", function () {
    modal.openNewModal();
    expect(modal.getFormTitle()).toEqual("Create new folder");
  });

  it("Create new folder", function () {
    modal.completeForm();
    expect(modal.getUserNameValue()).toEqual("oviozi");
    modal.submitForm();
  });

  it("Check modal is closed and new folder is created.", function () {
    expect(files.getFolderName()).toEqual("oviozi");
  });

  it("Check snackbar text warning", function () {
    modal.openNewModal();
    modal.completeForm();
    modal.submitForm();
    expect(modal.getSnackBarText()).toEqual(
      "There's already a folder with this name. Try a different name."
    );
  });

  it("Check if modal is not present.", function () {
    modal.closeModal();
    expect(modal.isModalPresent()).toBe(false);
  });

  it("Delete created folder", function () {
    files.selectFolder();
    files.rightClickFolder();
    files.deleteFolder();
    expect(files.isFolderPresent()).toBe(false);
  });
});
