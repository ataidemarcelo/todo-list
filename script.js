console.log('Project To Do List!!!');

function addTaskList() {
  const section = document.querySelector('section');
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  section.appendChild(ol);
}

addTaskList();

const btnAddTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');

function addClassSelected(item) {
  item.classList.add('selected');
}

function removeClassSelected(collection) {
  for (let index = 0; index < collection.length; index += 1) {
    collection[index].classList.remove('selected');
  }
}

function toggleClassSelected(collection) {
  for (let index = 0; index < collection.length; index += 1) {
    collection[index].addEventListener('click', (event) => {
      removeClassSelected(collection);
      addClassSelected(event.target);
    });
  }
}

function toggleClassCompleted(item) {
  item.addEventListener('dblclick', (event) => {
    if (event.target.className !== 'completed selected') {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  });
}

function addTask() {
  btnAddTask.addEventListener('click', () => {
    const text = input.value;
    const li = document.createElement('li');
    li.innerText = text;
    ol.appendChild(li);
    input.value = '';

    const lis = document.getElementsByTagName('li');
    toggleClassSelected(lis);
    toggleClassCompleted(li);
  });
}

function removeTasks() {
  ol.remove();
  addTaskList();
}

const btnApagaTudo = document.getElementById('apaga-tudo');
btnApagaTudo.addEventListener('click', removeTasks);

function removeFinished() {
  const finished = document.querySelectorAll('.completed');
  for (let index = 0; index < finished.length; index += 1) {
    finished[index].remove();
  }
}

const btnRemoverFinalizados = document.getElementById('remover-finalizados');
btnRemoverFinalizados.addEventListener('click', removeFinished);

function saveTasks() {
  const tasks = document.querySelector('#lista-tarefas');
  const li = tasks.innerHTML;
  localStorage.setItem('tasks', li);
  console.log(li);
}

const btnSaveTasks = document.getElementById('salvar-tarefas');
btnSaveTasks.addEventListener('click', saveTasks);

function loadTasks() {
  const tasksStorage = localStorage.getItem('tasks');
  const tasksOl = document.querySelector('#lista-tarefas');
  tasksOl.innerHTML = tasksStorage;
  const lis = document.getElementsByTagName('li');
  toggleClassSelected(lis);
  for (let index = 0; index < lis.length; index += 1) {
    toggleClassCompleted(lis[index]);
  }
}

loadTasks();
addTask();

function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected) {
    const previous = selected.previousSibling;
    if (previous !== null) {
      ol.insertBefore(selected, previous);
    }
  }
}

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected) {
    const next = selected.nextSibling;
    if (next !== null) {
      ol.insertBefore(next, selected);
    }
  }
}

const btnUp = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');

btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);

function removeElementSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

const btnRemoveElementSelected = document.getElementById('remover-selecionado');
btnRemoveElementSelected.addEventListener('click', removeElementSelected);
