const ModalPage = function () {
  const modalContainerCss = ".mat-dialog-container";
  const cancelButtonCss = "adf-folder-cancel-button";
  const snackBarCss = ".mat-snack-bar-container";
  const nameFieldCss = "adf-folder-name-input";
  const modalTitleCss = ".mat-dialog-title";
  const newButtonCss = "[data-automation-id='create-button']";
  const createNewFolderCss = "app.create.folder";
  const createButtonCss = "adf-folder-create-button";

  this.isModalPresent = () => {
    return element(by.css(modalContainerCss)).isPresent();
  };
  this.closeModal = () => {
    const cancelButton = element(by.id(cancelButtonCss));
    cancelButton.click();
  };

  this.getSnackBarText = () => {
    const snackBar = element(by.css(snackBarCss));
    return snackBar.getText();
  };

  this.getUserNameValue = () => {
    const nameField = element(by.id(nameFieldCss));
    return nameField.getAttribute("value");
  };

  this.getFormTitle = () => {
    const formTitle = element(by.css(modalContainerCss)).$(modalTitleCss);
    return formTitle.getText();
  };

  this.openNewModal = () => {
    const newButton = element(by.css(newButtonCss));
    newButton.click();
    const createFolderButton = element(by.id(createNewFolderCss));
    createFolderButton.click();
  };

  this.completeForm = () => {
    const nameField = element(by.id(nameFieldCss));
    nameField.sendKeys("oviozi");
  };

  this.submitForm = () => {
    const createButton = element(by.id(createButtonCss));
    createButton.click();
  };
};

module.exports = ModalPage;

