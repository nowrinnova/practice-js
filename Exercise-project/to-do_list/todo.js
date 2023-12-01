todoList=[];

function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let inputDate=document.querySelector('#todo-date');

    let todoElement=inputElement.value;
    let todoDate=inputDate.value;
    todoList.push(todoElement , todoDate);
inputElement.value='';

}