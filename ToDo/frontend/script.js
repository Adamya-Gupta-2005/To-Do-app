let todos = [];
const container = document.getElementById("content-section");
if(todos.length !== 0){
    container.style.visibility = "visible";
}
function addTodo(){
    const input = document.getElementById('todoInput');
    todos.push(input.value);
    input.value = "";
    render();
}

function render(){
    const container = document.getElementById("content-section");
    const list = document.getElementById("todo-list");
    
    list.innerHTML = "";

    if(todos.length > 0){
        container.style.visibility = "visible";
    }

    todos.forEach(todo => {
        let li = document.createElement('li');
        li.innerText = todo;
        list.appendChild(li);
    });
}