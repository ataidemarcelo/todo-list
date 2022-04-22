console.log('Project To Do List!!!');

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

function addTask() {
  btnAddTask.addEventListener('click', () => {
    const text = input.value;
    const li = document.createElement('li');
    li.innerText = text;
    ol.appendChild(li);
    input.value = '';
    const lis = document.getElementsByTagName('li');
    toggleClassSelected(lis);
  });
}

addTask();
