const FilesPage = function () {
  const folderContainerCss = "[data-automation-id='datatable-row-0']";
  const deleteButtonCss = "app.context.menu.delete";
  const newFolderCss = "[data-automation-id='adf-name-column']";

  this.isFolderPresent = () => {
    const folderContainer = element(by.css(folderContainerCss));
    return folderContainer.isPresent();
  };

  this.deleteFolder = () => {
    const deleteButton = element(by.id(deleteButtonCss));
    deleteButton.click();
  };

  this.rightClickFolder = () => {
    const folderContainer = element(by.css(folderContainerCss));
    browser.actions().click(folderContainer, protractor.Button.RIGHT).perform();
  };

  this.selectFolder = () => {
    const folderContainer = element(by.css(folderContainerCss));
    folderContainer.click();
  };

  this.getFolderName = () => {
    const newFolder = element(by.css(newFolderCss));
    return newFolder.getText();
  };
};

module.exports = FilesPage;
