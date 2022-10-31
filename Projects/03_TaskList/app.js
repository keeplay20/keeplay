// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection'); // This is the UL
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter'); // Filter is the below placeholder 
const taskInput = document.querySelector('#task'); // Place to add input

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    //DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks)
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//Get tasks from LS
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        //Create list item - li element
        const li = document.createElement('li')
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        // Append child will move the element from one source to another
        console.log(li.appendChild(document.createTextNode(task)));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add the link to li
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);
        //Append the li to ul
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }
    else {
        //Create list item - li element
        const li = document.createElement('li')
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        // Append child will move the element from one source to another
        console.log(li.appendChild(document.createTextNode(taskInput.value)));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add the link to li
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);
        //Append the li to ul
        taskList.appendChild(li);
        // Store in LS
        storeTaskInLocalStorage(taskInput.value);
        //Clear input
        taskInput.value = '';
    }
    e.preventDefault();
}

// Add value in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure ?')) {
            e.target.parentElement.parentElement.remove();
            //remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task)
            tasks.splice(index, 1);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear tasks from button
function clearTasks() {
    //    taskList.innerHTML = '';
    // Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    //clear from LS
    clearRasksfromLocalStorage();
}

function clearRasksfromLocalStorage() {
    localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase(); // This will give the input entered by user in lowercase

    //  All the list items (li) will be iterated by forEach
    // querySelectorAll returns node list hence we can use forEach
    document.querySelectorAll('.collection-item').forEach
        (function (task) {
            const item = task.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
}