# Webdriver IO TodoList Application

This solution is intended to test ToDo application. A testing tool for test cases was used WebrdiverIO.

## Getting Started

### Run the tests:

To install the dependencies

```bash
npm install
```

For running the test suites

```bash
npx wdio run ./wdio.conf.js
```

All results will be displayed in the terminal.

## Technical description

The project consists of folders

```bash
webdriverToDo
|
|_ logs
|
|_test
|_
  |_appobjects
  |
  |_specs
```

Folder ```appobjects``` contains the files for realization of page object pattern. As we have a one-page application, it
was decided to change a little the traditional approaches and describe the methods with components inside
the ```main.page.js```
Several methods that could be used in the future.

```js
await ToDoPage.createItem(value);
```

#### createItem()

The method for the creation of a new Item in the toDoApplication. Inside the method, we have used the selector for the input field
and send the value, which is received from the test.

```js
await ToDoPage.deleteItem();
```

#### deleteItem()

The method for deleting the first Item in the ToDo Items List. Inside the method we just used ```browser.execute()```
functionality due to the unavailability of the delete button with ```::after``` property.

#### editItem()

```js
await ToDoPage.editItem(value);
```

The method for the edit of the first existing Item in the toDoApplication. Inside the method, we have used the selector for
the first item and sent the value with the ```addValue()``` method. Due to a bug in the application the ```setValue```
the method that can delete the previous existing title of items could break the application.

#### editEmptyItem()

```js
await ToDoPage.editEmptyItem(value);
```

The method was created for a negative scenario in the negative test cases. For the testing purpose, it was commented in the test.

#### getValueToDoItem()

```js
await ToDoPage.getValueToDoItem();
```

The method returns the text value of the Title of the first item in the ToDo list.

#### completeItem()

```js
await ToDoPage.completeItem();
```

The methods change the toggle for the item, to complete the task in the ToDoApp.

#### open()

```js
await ToDoPage.open();
```

The method for opening the page with the ToDo Applications.

## Test Case Creation

For creating a new test case, you should use the next code.

```js
describe('Test suites title', function () {
  beforeEach(async function () {
    // Yor repeatively steps in test cases. Before each test cases.
  });

  it('Test case title', async function () {
    //Your test case steps 
  });
  afterEach(async function () {
    // Your steps after each test cases.
  });
});
```

## Possible Improvements

For future improvements it is possible to change the architecture of page object patterns, e.g. we can make the
abstraction of methods for testing the components and abstracting the page component. Here it's not realized due to the small
size of the application. It is possible to change the reporter for test results (allure or something else).

## Test Cases

Test case | Title | Steps | Result |
--- | --- | --- | --- |
#1 | Create the item in the list | 1. Open the page. 2. Create item 3. Check that item is added | Passed
#2 | Delete the item in the list | 1. Open the page. 2. Create item 3. Check that item is deleted | Passed |
#3 | Edit the item in the list | 1. Open the page. 2. Create item 3. Edit the item by double-clicking 4. Check that the new title item is saved| Passed |
#4 | Complete the item in the list | 1. Open the page. 2. Create item 3. Complete the item by clicking on the toggle 4. Check that item is completed and the counter is decreased | Passed|
#5 | Create the empty item in the list | 1. Open the page. 2. Try to create the item without a title 3. Check that item is not added | Passed |
#6 | Edit the item in the list and create an empty name | 1. Open the page. 2. Create item 3. Edit the item by double-clicking and deleting the title. 4. Click outside the input field  4. Check that the empty item is deleted. | Failed The Empty field exists and has a broken layout|
#7 | Create the Items with the Arabic text | 1. Open the page. 2. Create the item with Arabic text 3. Check that item is added and Arabic text is displayed| Failed. The Arabic text is not displayed from right to left.|
#8 | Complete the Item and try to change the title | 1. Open the page. 2. Create item 3. Complete the item by clicking on the toggle 4. Edit the item by double-clicking 5. Check that user is unable to edit the completed title.| Failed. The user can edit the completed task.|

