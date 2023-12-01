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
    displayElement.innerText='';
    for(let i=0 ; i<todoList.length ;i++){
        displayElement.innerText=displayElement.innerText+'\n'+todoList[i];
        
    }
   
  


}