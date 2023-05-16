# ToDoList



// Get elements from DOM
const todoInput = document.getElementById('todo-input');  // The input field where the user enters a task
const addButton = document.getElementById('add-button');  // The button to add a task to the list
const todoList = document.getElementById('todo-list');  // The unordered list where the tasks are displayed

// Initialize variables
let editMode = false;
let editableTask = null;

// Function to add a task to the list
function addTask() {
  const taskText = todoInput.value;
  if (taskText.trim() !== '') {
    if (editMode) {
      editableTask.firstChild.textContent = taskText;
      addButton.textContent = 'Add';
      editMode = false;
      todoInput.value = '';
      editableTask = null;
    } else {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = taskText;
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        li.remove();
      });
      editButton.addEventListener('click', () => {
        editMode = true;
        editableTask = li;
        todoInput.value = span.textContent;
        addButton.textContent = 'Save';
      });
      li.appendChild(span);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
      todoInput.value = '';
    }
  }
}

// Event listeners
addButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});






 // Get the text entered by the user
   // Check if the text is not empty or just whitespace
      // If the user is editing a task
      // Update the task text
     // Change the button text back to "Add"
     // Set the edit mode flag to false
       // Clear the input field
       // Reset the editable task variable
    } else { // If the user is adding a new task
      const li = document.createElement('li'); // Create a new list item element
      const span = document.createElement('span'); // Create a new span element to hold the task text
      span.textContent = taskText; // Set the text of the span element to the task text
      const editButton = document.createElement('button'); // Create a new button element for editing the task
      editButton.textContent = 'Edit'; // Set the text of the edit button
      const deleteButton = document.createElement('button'); // Create a new button element for deleting the task
      deleteButton.textContent = 'Delete'; // Set the text of the delete button
      deleteButton.addEventListener('click', () => { // Add a click event listener to the delete button
        li.remove(); // Remove the list item element from the DOM
      });
      editButton.addEventListener('click', () => { // Add a click event listener to the edit button
        editMode = true; // Set the edit mode flag to true
        editableTask = li; // Set the editable task variable to the current list item element
        todoInput.value = span.textContent; // Set the input field value to the task text
        addButton.textContent = 'Save'; // Change the button text to "Save"
      });
      li.appendChild(span); // Add the span element to the list item element
      li.appendChild(editButton); // Add the edit button element to the list item element
      li.appendChild(deleteButton); // Add the delete button element to the list item element
      todoList.appendChild(li); // Add the list item element to the unordered list
      todoInput.value = ''; // Clear the input field
    }
  }
}

// Add event listeners to the input field and the add button
addButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
