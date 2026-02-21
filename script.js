document.addEventListener('DOMContentLoaded',  ()  => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    addButton.addEventListener('click', addTask);
    todoInput.addEventListener('keypress',  (event)  => {
        if  (event.key === 'Enter')  {
            addTask();
         }
     });

    todoList.addEventListener('click',  (event)  => {
         // Toggle 'completed' class on task text click
         if  (event.target.tagName === 'SPAN'  && event.target.closest('li'))  {
            toggleTaskCompletion(event.target.closest('li'));
         }
         // Delete task on delete button click
         if  (event.target.classList.contains('delete-button'))  {
             deleteTask(event.target.closest('li'));
          }
     });
    /* The rest of your JavaScript code is provided in the question */
});