/*
Grandpa has a Christmas wish list to keep track of all the gifts he wants to ask for. But there’s a problem: if he forgets he’s already added something, the list gets clogged up with duplicates. This happened last year, and he ended up with 8 talking picture frames on Christmas Day!

Your task is to complete the `checkDuplicate()` function 👇 to ensure no duplicates are added to the list. But here’s the tricky part: Grandpa sometimes hits the spacebar more than once, making it harder to spot duplicates.

For example, only one of these entries should be added to the list — the others should be flagged as duplicates:

- "talking picture frames"
- "talking  picture frames"
- "talking picture    frames"
- " talking picture frames "

**Your tasks:**
1. Ensure no duplicates can be added to the list.
2. Account for extra spaces at the beginning/end and between words.
 
**Stretch Goals:**
1. Case Sensitivity: Handle cases where capitalization differs. For example:
   - `"Cat Hammock"` should be flagged as a duplicate of `"cat hammock"`.
   - Preserve Grandpa’s original capitalization (e.g., if `"Cat Hammock"` is added first, that should be added to the list). Do not simply convert all entries to lower case - Grandpa might well want to capitalize some words. 

2. Additional Features: Add functionality to delete or edit items on the list.
*/

// Get references to DOM elements
const itemInput = document.getElementById("item-input");
const addItemButton = document.getElementById("add-item-button");
const shoppingList = document.getElementById("shopping-list");
const todoList = {};
// const listArr = [];

const handleEdit = (id) => {
  const editedText = prompt("Edit Item: ");
  const sanitizedText = editedText.trim().toLowerCase().replaceAll(/\s+/g, " ");

  todoList[id].text = sanitizedText;
  renderList();
};

const handleDelete = (id) => {
  delete todoList[id];
  renderList();
};

// Function to add an item to the shopping list
function renderList() {
  shoppingList.innerHTML = "";

  const listArr = Object.values(todoList).map((item) => item);

  listArr.forEach((gift) => {
    // Create the <li> element
    const listItem = document.createElement("li");
    listItem.id = `item-${gift.id}`; // Assign unique ID for each item

    // Create a <p> element for the gift description
    const description = document.createElement("p");
    description.textContent = gift.text;
    gift.isCompleted && description.classList.add("is-completed");

    const span = document.createElement("span");
    // Create Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit", "btn");
    editButton.addEventListener("click", () => handleEdit(gift.id));

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete", "btn");
    deleteButton.addEventListener("click", () => handleDelete(gift.id));

    const completedButton = document.createElement("button");
    completedButton.textContent = gift.isCompleted ? "Undo" : "Completed";
    completedButton.classList.add("completed", "btn");
    completedButton.addEventListener("click", () => {
      gift.isCompleted = !gift.isCompleted;
      renderList();
    });

    // Append the <p> and buttons to the <li> element
    span.appendChild(editButton);
    span.appendChild(deleteButton);
    span.appendChild(completedButton);
    listItem.appendChild(description);
    listItem.appendChild(span);

    // Append the <li> to the shopping list
    shoppingList.appendChild(listItem);
  });

  itemInput.value = ""; // Clear the input field
}
const appendItem = () => {
  const text = document.getElementById("item-input").value;
  const formattedText = text.trim().toLowerCase().replaceAll(/\s+/g, " ");
  const isDuplicate = Object.values(todoList).some(
    (item) => item.text === formattedText
  );
  if (isDuplicate) {
    alert("Item already exists");
    return;
  }
  const id = Date.now();

  const newItem = { id, text: formattedText, isCompleted: false };

  todoList[id] = newItem;
  renderList();
};

// Add event listener to button
addItemButton.addEventListener("click", appendItem);

// Allow adding items by pressing Enter key
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    appendItem();
  }
});
