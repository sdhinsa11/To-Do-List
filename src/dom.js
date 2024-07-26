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
        projectInfo.reset();
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
function createTaskCard(ts){
    const container = document.getElementById("todos");

    const card = document.createElement("button");
    card.id = "card";
    card.className = "collapsible";
    card.innerHTML = `${ts.title}<br>${ts.dueDate}`;

    // const n = document.createElement("h5");
    // n.textContent = `${title}`;
    // const d = document.createElement("p");
    // d.textContent = `${date}`;

    const expandedCard = document.createElement("div");
    expandedCard.className = "content";

    const pri = document.createElement("p");
    pri.textContent = `${ts.prior}`;

    const s = document.createElement("p");
    pri.textContent = `${ts.sec}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", function() {
        tks.deleteTasks(ts);
        container.removeChild(card);
        container.removeChild(expandedCard);
        render();

    });

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function() {
        ts.setComplete();
        tks.completed(ts);
        card.style.textDecoration = "line-through";
        expandedCard.style.textDecoration = "line-through";

    });




    expandedCard.appendChild(s);
    expandedCard.appendChild(pri);
    expandedCard.appendChild(deleteButton);
    expandedCard.appendChild(completeButton);

    container.appendChild(card);
    container.append(expandedCard);
}


function showCard(){
    var coll = document.getElementsByClassName("collapsible");
    for (let i =0; i<coll.length; i++){
        coll[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block"){
                content.style.display = "none";
            }
            else{
            content.style.display = "block";
            }
        });  
    }
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
    homeAction();

    let proj = projects.getProjects();
    document.getElementById("allP").innerHTML="";

    proj.forEach((pj) =>{
        createProjectBtn(pj.title);
    });

    // showCard();
    updateSecOptions(); // this is here to get updated every time just incase its added, so its insync 
    //attaches the function to button so when clicked you can see everything
    attachEventtoProject();
    taskCompleted();
    document.getElementById("defaultOpen").click(); // needs to be at bottom

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

function renderTasks(taskList = tks.getTasks()){
    document.getElementById("todos").innerHTML="";
    taskList.forEach((ts) =>{
        createTaskCard(ts);
    });
    showCard();
}

function homeAction(){
    // main screen
    const homeBtn = document.getElementById("defaultOpen");
    document.getElementById("todos").innerHTML="";
    homeBtn.addEventListener("click", () =>{
        renderTasks();
    });

}

function taskCompleted(){
    
    const completeBtn = document.getElementById("completed");
    document.getElementById("todos").innerHTML="";
    completeBtn.addEventListener("click", () =>{
        const tasks = tks.getCompleted();
        renderTasks(tasks);
    }); 
}




export {render, taskCreated, projectCreated, taskCompleted, showCard};