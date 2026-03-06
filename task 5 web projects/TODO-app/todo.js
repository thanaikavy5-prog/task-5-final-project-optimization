function addTask(){

let input=document.getElementById("taskInput");
let text=input.value;

if(text==="") return;

let li=document.createElement("li");

li.innerHTML = `
<span onclick="completeTask(this)">${text}</span>
<button onclick="deleteTask(this)">❌</button>
`;

document.getElementById("taskList").appendChild(li);

input.value="";

}

function deleteTask(btn){

btn.parentElement.remove();

}

function completeTask(task){

task.classList.toggle("completed");

}