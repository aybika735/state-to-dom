
  const todos = [
    {
      text: 'Выкинуть ненужные вещи',
      done: false
    },
    {
      text: 'Купить MacBook с процессором M1',
      done: true,
    },
    {
      text: 'Отправиться в кругосветное путешествие',
      done: false
    },
    {
      text: 'Разбить всю посуду в доме',
      done: false
    },
    {
      text: 'Узнать кто убил Кеннеди',
      done: false
    }
  ];



const render = (todoList) =>{
    const list = document.querySelector('#list');
    list.textContent = '';

    for(let i = 0; i< todoList.length; i++){


        const container = document.createElement('div');
        container.classList = 'list__item';

        const inputtoDo = document.createElement('input');
        inputtoDo.type = 'checkbox';
inputtoDo.addEventListener('click', function(){
    checktoDo(i);
})
if(todoList[i].done === true){
    container.classList.add('list__item_checked');
}
inputtoDo.checked = todoList[i].done;
        const textTodo = document.createElement('div');
        textTodo.textContent = todoList[i].text;

        const removetoDo = document.createElement('button');
        removetoDo.textContent = '❌';

        list.append(container);
        container.prepend(inputtoDo, textTodo, removetoDo);

        removetoDo.addEventListener('click', function(){
            remove(i);
        })



    }
}

const remove = (index) =>{
todos.splice(index, 1)
render(todos);
}

const checktoDo = (index)=>{
todos[index].done = !todos[index].done;
render(todos);
}

const addtoDo = (text) =>{
todos.push({
text:text,
done:false
    })
    render(todos);
}



document.getElementById('form').addEventListener('submit', function(){
const input = document.getElementById('form__input');
addtoDo(input.value);
input.value = '';



})



render(todos);





// const render = (todoList) => {
// const list = document.querySelector('#list');
//     list.textContent = '';
// for(let i = 0; i<todoList.length; i++){
    
//     const container = document.createElement('div');
//     container.classList = 'list__item';
//     const input = document.createElement('input');
//     input.type = 'checkbox';
//     input.checked = todoList[i].done;

//     input.addEventListener('change', () => {
//          checkTodo(i);
//         })

//    if(todoList[i].done === true) {
//    container.classList.add('list__item_checked')
//    }

//     const text = document.createElement('div');
//     text.textContent = todoList[i].text;
//     const removetodo = document.createElement('button');
//     removetodo.textContent= '❌';
//     list.append(container);
//     container.prepend(input, text, removetodo);

//     removetodo.addEventListener('click', function(){
//     remove(i);
//     })


// }
//   }

// const remove = (index) =>{
// todos.splice(index, 1);
// render(todos);

// }
// const checkTodo = (index) => {
// todos[index].done = !todos[index].done 
// render(todos);
//    }

// const addToDo = (text) =>{
// todos.push({
// text: text,
// done: false
//  });
// render(todos);
// }

// document.getElementById('form').addEventListener('submit', (e) => {
  
// // e.preventDefault();
// const formInput = document.getElementById('form__input');
// addToDo(formInput.value);
// formInput.value = "";
// });



// render(todos);

























