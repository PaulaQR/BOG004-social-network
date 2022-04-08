// eslint-disable-next-line import/named
import { saveTask } from './firebase.js';

export default () => {
  const home = `
<form id="task-form">
<label for="title">Title:</label>
<input type="text" placeholder="Task-title" id="task-title">
<label for="description">Description</label>
<textarea id="task-description" rows="3" placeholder="Task description"></textarea>
<button id="btn_task_save">Save</button>
</form>`;

  const taskContainer = document.createElement('div');
  taskContainer.innerHTML = home;
  const taskForm = taskContainer.querySelector('#task-form');
  // eslint-disable-next-line no-console
  console.log(taskForm);
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('task-title');
    const description = document.getElementById('task-description');
    saveTask(title.value, description.value);
    taskForm.reset();
  });
  return taskContainer;
};
