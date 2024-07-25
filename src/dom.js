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

// function projectCreated(name){
//     projects.addToProj(name);
// }

function createProjectBtn(name){
    const container = document.getElementById("allP");

    const pBtn = document.createElement("button");
    pBtn.textContent = `${name}`;
    pBtn.id = name;
    pBtn.className = "pBtn";
    container.appendChild(pBtn);
}



// show the todo's from the list
function render(){
    let tasks = tks.getTasks();
    console.log(tasks);
    let proj = projects.getProjects();
    console.log(proj);

    document.getElementById("todos").innerHTML="";

    document.getElementById("allP").innerHTML="";

    tasks.forEach((ts) =>{
        createTaskCard(ts.title, ts.dueDate, ts.prior);
    });

    proj.forEach((pj) =>{
        createProjectBtn(pj.title);
    });
}


//adding to todo list from button
function taskCreated(){
    const showDialog = document.getElementById("aT")
    const dialog = document.getElementById("dialog");
    const closeDialog = document.getElementById("close");
    const taskInfo  = document.getElementById("taskInfo");

    const addTaskT = document.getElementById("addTaskT");

    showDialog.addEventListener("click", ()=>{
        dialog.showModal();
    });

    closeDialog.addEventListener("click", (e) =>{
        e.preventDefault();
        dialog.close();
    });

    addTaskT.addEventListener("click", (e)=>{
        const t = document.getElementById("title").value;
        const d = document.getElementById("da").value;
        const pr = document.getElementById("prior").value;
        const s = document.getElementById("seC").value;
    
        tks.addToTasks(t, d, pr, s);
        e.preventDefault();
        render();
        dialog.close();
        taskInfo.reset();
    });
}

function projectCreated(){
    const showDialog = document.getElementById("aP");
    const dialog = document.getElementById("projDialog");
    const closeDialog = document.getElementById("closeP");
    const projectInfo = document.getElementById("projectInfo");

    const addProjectP = document.getElementById("addProjectP");

    showDialog.addEventListener("click", ()=>{
        dialog.showModal();
    });

    closeDialog.addEventListener("click", (e) =>{
        e.preventDefault();
        dialog.close();
    });

    
    addProjectP.addEventListener("click", (e)=>{
        const pName = document.getElementById("pTitle").value;
        projects.addToProj(pName);
        // console.log(projects.getProjects());
        e.preventDefault();
        render();
        dialog.close();
        projectInfo.reset();
    });
}


export {render, taskCreated, projectCreated, createTaskCard};