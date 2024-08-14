function handleSubmit() {
    const todoInput = document.getElementById('todo-input');
    addTodoItem(todoInput.value);
    todoInput.value = '';
}

function addTodoItem(task) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('onclick', 'deleteTodoItem(this)');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('onclick', 'editTodoItem(this)');

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    todoList.appendChild(li);
}

function deleteTodoItem(button) {
    const li = button.parentElement;
    li.parentElement.removeChild(li);
}

function editTodoItem(button) {
    const li = button.parentElement;
    const task = li.firstChild.textContent;
    const todoInput = document.getElementById('todo-input');
    todoInput.value = task;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.setAttribute('onclick', 'saveTodoItem(this)');

    li.appendChild(saveButton);
    button.style.display = 'none';
}

function saveTodoItem(button) {
    const li = button.parentElement;
    const todoInput = document.getElementById('todo-input');
    li.firstChild.textContent = todoInput.value;
    todoInput.value = '';

    const editButton = li.querySelector('button[onclick="editTodoItem(this)"]');
    editButton.style.display = 'inline';

    li.removeChild(button);
}