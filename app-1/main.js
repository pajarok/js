
window.onload = () => {
    const todos = []; // Initialize the todos array
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submit
        const todo = document.getElementById('todo'); // Get the input field
        const todoText = todo.value; // Get the value entered in the input
        todo.value = ''; // Clear the input field
        todos.push(todoText); // Add the new todo to the todos array

        const todoList = document.getElementById('todo-list'); // Get the UL element
        const todosTemplate = todos.map(t => '<li>' + t + '</li>'); // Create list items
        todoList.innerHTML = todosTemplate.join(''); // Update the UL with the list items
        document.querySelectorAll('#todo-list ')
    };
};


// estas son los elemsntos que vamos a utilizar para elminar los todos de nuestra aplicacion
//se aplican en la consola
// const arr = [1, 2, 3, 4]
// undefined
// arr.splice(2, 1)
// [3]
// arr
// (3) [1, 2, 4]

// const todos = [];
// window.onload = () => {
//     const form = document.getElementById('todo-form');
//     form.onsubmit = (e) => {
//         e.preventDefault();
//         const todo = document.getElementById('todo');
//         const todoText = todo.value;
//         todo.value = '';
//         todos.push(todoText);
//         const todoList = document.getElementById('todo-list');
//         const todosTemplate = todos.map(t => '<li>' + t + '<li>');
//         todoList.innerHTML = todosTemplate.join('') 
         
//     }
// }       
  //version simplificada de map
 //otra manera de iterar nombrando los indices
        // const todosTemplate = todos.map(t => {
        //     return '<li>' + t + '</li>';
        // }
        // console.log(todosTemplate);
        // todoList.innerHTML = '';
        // for(let i = 0; i < todos.length; i++) {
        //     todoList.innerHTML += '<li>' + todos[i] + '</li>'