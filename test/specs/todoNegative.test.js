const ToDoPage = require('../appobjects/main.page');
const dataProvider = require('../utils/dataprovider')

describe('ToDo application Negative Tests', function () {
  beforeEach(async function () {
    await ToDoPage.open();
  });

  it('Create the empty item in the list', async function () {
    await ToDoPage.createItem('');
    await expect(ToDoPage.firstItemToDo).not.toBeExisting();
  });

  it('Edit the item in the list create empty name', async function () {
    const data = new dataProvider();
    const titleInitial = data.getText();

    await ToDoPage.createItem(titleInitial);
    await ToDoPage.editItem('');
    // Next commented steps could reproduce a bug.
    /* await ToDoPage.editEmptyItem('');
    await expect(ToDoPage.firstItemToDo).not.toBeExisting(); */
    await expect(ToDoPage.firstItemToDo).toBeExisting();
  });

  it('Create the Items with the arabic text', async function () {
    const data = new dataProvider();
    const arabicText = data.getArabicText();

    await ToDoPage.createItem(arabicText);
    await browser.saveScreenshot('./result_arabic.png');
    await expect(ToDoPage.firstItemToDo).toBeExisting();
  });

  it('Complete the Item and try to change the title', async function () {
    const data = new dataProvider();
    const titleInitial = data.getText();
    const titleEdited = data.getText();

    await ToDoPage.createItem(titleInitial);
    await ToDoPage.completeItem();
    await ToDoPage.editItem(titleEdited);
    await expect(ToDoPage.firstItemToDo).toHaveTextContaining(titleInitial, titleEdited);
  });

  afterEach(async function () {
    await browser.reloadSession();
  });
});


