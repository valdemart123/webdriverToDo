const Page = require('./page');

class MainPage extends Page {
  get inputFieldToDo() {
    return $('.new-todo')
  }

  get firstItemToDo() {
    return $('li:nth-child(1)')
  }

  get editField() {
    return $('input.edit')
  }

  get textItem() {
    return $('.todo-list li:nth-child(1)>div>label')
  }

  get checkBoxComplete() {
    return $('.toggle')
  }

  get toDoCounter() {
    return $('.todo-count')
  }

  async createItem(value) {
    await this.inputFieldToDo.setValue(value);
    await browser.keys("Enter");
  }

  async deleteItem() {
    // Due to ::after properties for delete button general approaches is not working
    await browser.execute(() => {
      document.querySelector('.destroy').click();
    });
  }

  async editItem(value) {
    await this.firstItemToDo.doubleClick();
    await this.editField.addValue(value);
    //await this.editField.setValue(value)
    await browser.keys("Enter");
  }

  // I have created this method just for workaround bug
  async editEmptyItem(value) {
    await this.firstItemToDo.doubleClick();
    await this.editField.setValue(value);
    //await browser.keys("Enter");
  }

  async getValueToDoItem() {
    return await this.textItem.getText();
  }

  async completeItem() {
    await this.checkBoxComplete.click();
  }

  open() {
    return super.open('examples/angular2/');
  }
}

module.exports = new MainPage();