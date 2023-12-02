let item=['nova'];

function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let inputValue=inputElement.value;
    let todoElement= document.querySelector('#todoItems');
    // console.log(todoElement.innerText=inputValue);
     item =todoElement.innerText=inputValue;
    inputElement.value='';
    console.log(item);

}