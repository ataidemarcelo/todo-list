console.log('Project To Do List!!!');

const btnAddTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');

function fillBackgroundLi(collection) {
  const list = collection;
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', () => {
      list[index].style.backgroundColor = 'gray';
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
    fillBackgroundLi(lis);
  });
}

addTask();
