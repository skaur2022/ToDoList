// Get elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

let editMode = false;
let editableTask = null;

// Add task
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

