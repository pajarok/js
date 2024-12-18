const todos = JSON.parse(localStorage.getItem('otra vez mas')) || []; // Declare the todos array globally

// Function to render the to-do list on the page
const render = () => {
    const todoList = document.getElementById('todo-list'); // Get the UL element

    // Create list items dynamically from the todos array
    const todosTemplate = todos.map((t, i) => `<li data-index="${i}">${t}</li>`).join('');

    // Update the UL with the list items
    todoList.innerHTML = todosTemplate;

    // Add click event listeners to each list item
    const todoItems = todoList.querySelectorAll('li');
    todoItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            console.log(item.textContent, i); // Log the content and index of the clicked item
        });
    });
};

// Function to handle the form submission
window.onload = () => {
    const form = document.getElementById('todo-form');
    
    form.onsubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submit
        const todo = document.getElementById('todo'); // Get the input field
        const todoText = todo.value.trim(); // Get the value entered in the input
        if (todoText) {
            todos.push(todoText); // Add the new todo to the todos array
            todo.value = ''; // Clear the input field
            render(); // Re-render the to-do list
            // Save to localStorage
            localStorage.setItem('tra vez mas', JSON.stringify(todos)); // Store the updated todos in localStorage
        }
    };

    // Initial render when the page loads
    render();
};

