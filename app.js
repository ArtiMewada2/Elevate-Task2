const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function createTaskItem(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    return li;
}

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskInput.focus();
    }
});

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});