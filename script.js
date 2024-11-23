const taskInput = document.getElementById('task-input')
const addButton = document.getElementById('add-button')
const taskList = document.getElementById('task-list')

//Create a task
function addTask() {
    const taskText = taskInput.value.trim()

    if (taskText === '') {
        alert ('Enter a task')
        return;
    }

    //Create the list
    const listItem = document.createElement('li')
    listItem.className = 'task-item'

    //Create a task item
    const taskSpan = document.createElement('span')
    taskSpan.textContent = taskText


    //Updating
    const editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.className = 'edit-button'
    //<button classname="edit-button">Edit</button>

    //Add click event
    editButton.addEventListener('click', () => {
        const currentText = taskSpan.textContent
        const inputField = document.createElement('input')
        inputField.type = 'text'
        inputField.value = currentText
        //<input type="text" value={currentText}>
        listItem.replaceChild(inputField, taskSpan)

        //Replacing
        inputField.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                taskSpan.textContent = inputField.value.trim() || currentText; 
                listItem.replaceChild(taskSpan, inputField)
            }
        })
    })

    //Deleting
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className= 'delete-button'
    //<button className = "delete-button">Delete</button>

    deleteButton.addEventListener('click', () => {
        listItem.remove()
    })

    //append
    listItem.appendChild(taskSpan)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)

    taskList.appendChild(listItem)

    taskInput.value = '';

}

addButton.addEventListener('click', addTask)
taskInput.addEventListener('keypress', (e) => {
    if (event.key === 'Enter') {
        addTask()
    }
})