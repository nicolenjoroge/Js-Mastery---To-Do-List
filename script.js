// Step 1: DOM Elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Step 2: Add Task Function
function addTask() {
    const taskText = taskInput.value.trim(); // Get input value and trim whitespace

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    // Add task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create Edit Button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';

    // Add click event to edit task
    editButton.addEventListener('click', () => {
        const currentText = taskSpan.textContent;
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = currentText;
        listItem.replaceChild(inputField, taskSpan);

        // Replace input field back with updated task on pressing Enter
        inputField.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                taskSpan.textContent = inputField.value.trim() || currentText; // Keep the old text if new text is empty
                listItem.replaceChild(taskSpan, inputField);
            }
        });
    });

    // Create Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    // Add click event to delete task
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    // Append task text, edit button, and delete button to list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Add the new list item to the task list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';
}

// Attach Events
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

