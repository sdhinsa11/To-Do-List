import './style.css';
import tks from'./task.js';
import projects from './categories.js';



// create the tasks for html
function createTaskCard(title, date, priority){
    const container = document.getElementById("todos");

    const card = document.createElement("div");
    card.id = "card";

    const n = document.createElement("h5");
    n.textContent = `${title}`;

    const d = document.createElement("p");
    d.textContent = `${date}`;

    const pri = document.createElement("p");
    pri.textContent = `${priority}`;

    const plusButton = document.createElement("button");
    plusButton.textContent = "+"

    card.appendChild(n);
    card.appendChild(d);
    card.appendChild(pri);

    container.appendChild(card);
}

// show the todo's


function render(){
    tks.addToTasks("coding", "lots", "Tmrw", "low", "none");
    tks.addToTasks("packing", "less", "monday", "high", "travel");
    tks.addToTasks("food", "less", "tuesday", "medium", "travel");
    let tasks = tks.getTasks();

    document.getElementById("todos").innerHTML="";

    tasks.forEach((ts) =>{
        createTaskCard(ts.title, ts.dueDate, ts.prior);
    });
}

export default render;