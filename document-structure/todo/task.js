const tasksList = document.querySelector('.tasks__list');
const taskInput = document.querySelector('.tasks__input');
const form = document.querySelector('.tasks__control');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = document.createElement('div');
  task.classList.add('task');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title');
  taskTitle.textContent = taskInput.value;

  const taskRemove = document.createElement('a');
  taskRemove.href = '#';
  taskRemove.classList.add('task__remove');
  taskRemove.innerHTML = '&times;';
  taskRemove.addEventListener('click', () => {
    task.remove();
  });

  task.appendChild(taskTitle);
  task.appendChild(taskRemove);
  tasksList.appendChild(task);

  taskInput.value = '';
})

