import './style.css';
import {render, taskCreated, projectCreated, createTaskCard} from './dom.js'
import tks from'./task.js';
import projects from './categories.js';
//dom properties 

function main(){

    //testing purposes
    tks.addToTasks("Coding", "Jan", 3, "Work");
    tks.addToTasks("Project", "Feb", 2, "Work");
    tks.addToTasks("Finances", "May", 1, "Work");

    tks.addToTasks("Nails", "July", 2, "Personal");
    tks.addToTasks("Laser", "July", 2, "Personal");
    tks.addToTasks("Dr", "August", 2, "Personal");

    tks.addToTasks("Social", "October", 2, "School");
    tks.addToTasks("Math", "September", 1, "School");
    tks.addToTasks("English", "Oct", 1, "School");
    tks.addToTasks("Science", "September", 1, "School");

    projects.addToProj("Work");
    projects.addToProj("Personal");
    projects.addToProj("School");

    render();
    // updateSecOptions();
    taskCreated();
    projectCreated();



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
        if (t.sec == projectId){
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


main();





// add the task to the section to section it - YES

// after we add to the updateSecOptions, we now need to make sure everything is getting updated and make sure it stays updated after we add a task to the project



// get functionality for the home button / date / completed - Today 

// use the storage and date stuff in the list - Today 



// organize by priority 
// add a desc 
// edit the cards 

