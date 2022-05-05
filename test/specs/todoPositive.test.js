const ToDoPage = require('../appobjects/main.page');
const dataProvider = require('../utils/dataprovider')

describe('ToDo application Positive Tests', function () {
  beforeEach(async function () {
    await ToDoPage.open();
  });

  it('Create the item in the list', async function () {
    const data = new dataProvider();
    const titleItem = data.getText();

    await ToDoPage.createItem(titleItem);
    await expect(ToDoPage.firstItemToDo).toBeExisting();
    await expect(ToDoPage.firstItemToDo).toHaveTextContaining(titleItem);
    await expect(ToDoPage.toDoCounter).toHaveText(
      '1 item left');
  });

  it('Delete the item in the list', async function () {
    const data = new dataProvider();
    const titleItem = data.getText();

    await ToDoPage.createItem(titleItem);
    await ToDoPage.deleteItem();
    await expect(ToDoPage.firstItemToDo).not.toBeExisting();
  });

  it('Edit the item in the list', async function () {
    const data = new dataProvider();
    const titleInitial = data.getText();
    const titleEdited = data.getText();

    await ToDoPage.createItem(titleInitial);
    await ToDoPage.editItem(titleEdited);
    const result = await ToDoPage.getValueToDoItem();
    //Here I've added several ways for assertion and try to avoid setValue bug
    const expected = titleInitial + titleEdited;
    await expect(result).toEqual(expected);
    await expect(ToDoPage.firstItemToDo).toHaveText(
      expected);
  });

  it('Complete the item in the list', async function () {
    const data = new dataProvider();
    const titleItem = data.getText();

    await ToDoPage.createItem(titleItem);
    await expect(ToDoPage.toDoCounter).toHaveText(
      '1 item left');
    await ToDoPage.completeItem();
    await expect(ToDoPage.toDoCounter).toHaveText(
      '0 items left');
  })
  afterEach(async function () {
    await browser.reloadSession();
  });
});


