console.log('Project To Do List!!!');

const btnAddTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');

console.log(btnAddTask, input, ol);

function addTask() {
  btnAddTask.addEventListener('click', () => {
    const text = input.value;
    const li = document.createElement('li');
    li.innerText = text;
    ol.appendChild(li);
    input.value = '';
    // console.log('Add Task!: ', text);
  });
}

addTask();
