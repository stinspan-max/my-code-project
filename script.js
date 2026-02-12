document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const renderTasks = () => {
        todoList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            
            const span = document.createElement('span');
            span.textContent = task.text;
            span.classList.add('task-text');
            if (task.completed) span.classList.add('completed');
            
            // Toggle complete status
            span.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
                renderTasks();
            });

            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.classList.add('delete-btn');
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            li.appendChild(span);
            li.appendChild(delBtn);
            todoList.appendChild(li);
        });
    };

    const addTask = () => {
        const text = input.value.trim();
        if (text !== '') {
            tasks.push({ text, completed: false });
            input.value = '';
            saveTasks();
            renderTasks();
        }
    };

    addBtn.addEventListener('click', addTask);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    renderTasks();
});