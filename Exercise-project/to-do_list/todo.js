todoList=['nova','bye'];

function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let todoElement=inputElement.value;
    todoList.push(todoElement );
    inputElement.value='';
    displayItem();
    
    }
    function displayItem(){
    let displayElement=document.getElementById('todoItems');
    for(let i=0 ; i<todoList.length ;i++){
        displayElement.innerText=displayElement.innerText+todoList[i];
    }
   
  


}