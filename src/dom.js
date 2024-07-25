import './style.css';
import tks from'./task.js';
import projects from './categories.js';

// Adding Project and Task 
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
        const pr = document.getElementById("optionsP").value;
        const s = document.getElementById("optionsS").value;
    
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
        e.preventDefault();
        dialog.close();
        projectInfo.reset();
        render();
    });
}




// Create the Tasks from List to be used in Render 
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

// Creating the project button to be displayed by in the UI (by Render )
function createProjectBtn(name){
    const container = document.getElementById("allP");

    const pBtn = document.createElement("button");
    pBtn.textContent = `${name}`;
    pBtn.id = name;
    pBtn.className = "pBtn";
    container.appendChild(pBtn);
}


// Shows everything 
function render(){
    let tasks = tks.getTasks();
    let proj = projects.getProjects();

    document.getElementById("todos").innerHTML="";

    document.getElementById("allP").innerHTML="";

    tasks.forEach((ts) =>{
        createTaskCard(ts.title, ts.dueDate, ts.prior);
    });

    proj.forEach((pj) =>{
        createProjectBtn(pj.title);
    });

    updateSecOptions(); // this is here to get updated every time just incase its added, so its insync 

    //attaches the function to button so when clicked you can see everything
    attachEventtoProject();
}





//When a project is added its reflected in the drop down menu when adding a task, 
function updateSecOptions(){
    //adding to drop down menu
    const dropDown = document.getElementById("optionsS");
    dropDown.innerHTML ='';

    const projs = projects.getProjects();
    projs.forEach(project => {
        const option = document.createElement('option');
        option.value = project.title;
        option.textContent = project.title;
        dropDown.appendChild(option);
    }); 

}




// This is for when you click on a page you see the section that the divs belong too
function attachEventtoProject(){
    let pBtns = document.querySelectorAll(".pBtn");
    for (let button of pBtns){
        button.addEventListener('click', ()=>{
            const projectId = button.id;
            const pTaskList = filterTasks(projectId);
            renderTasks(pTaskList);
        });
    }
}

function filterTasks(projectId){
    const tasks = tks.getTasks();
    let pTasks = []

    for(let t of tasks){
        console.log(t.sec);
        if (t.sec === projectId){
            pTasks.push(t);
        }
    }

    return pTasks;
}

function renderTasks(taskList){
    document.getElementById("todos").innerHTML="";
    taskList.forEach((ts) =>{
        createTaskCard(ts.title, ts.dueDate, ts.prior);
    });
}



export {render, taskCreated, projectCreated, createTaskCard};