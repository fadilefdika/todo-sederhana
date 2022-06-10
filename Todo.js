//todo-input = #todo-text
//todo-button = #submit
//.todo-list

const todoText = document.querySelector('#todo-text');
const submit = document.querySelector('#submit');
const todoList = document.querySelector('.todo-list');

submit.addEventListener('click', function addTodo(event) {
  event.preventDefault();

  //buat div baru berkelas todo lalu didalamnya masukkan li dan 2 button
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  todoList.appendChild(todoDiv);
  //membuat li
  const li = document.createElement('li');
  li.innerText = todoText.value; //untuk menyimpan hasil todoText
  li.classList.add('todo-item');
  todoDiv.appendChild(li);
  //membuat button edit
  const button1 = document.createElement('button');
  button1.innerText = 'selesai';
  button1.classList.add('selesai');
  todoDiv.appendChild(button1);
  //membuat buttod hapus
  const button2 = document.createElement('i');
  button2.classList.add('fa-solid');
  button2.classList.add('fa-trash-can');
  todoDiv.appendChild(button2);
  //untuk membuat input kosong setelah ditambahkan
  todoText.value = ' ';
});

todoList.addEventListener('click', function (e) {
  const item = e.target; //ambil target
  //untuk menghapus list
  if (item.classList[0] === 'fa-solid') {
    //jika target memiliki class yang pertama bernama 'hapus'
    const todo = item.parentElement; //ambil parent dari item tsb
    todo.classList.add('transisi');
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }
  //untuk menandakan list selesai
  if (item.classList[0] === 'selesai') {
    const todo = item.parentElement;
    todo.classList.toggle('complete');
  }
});
