import './style.css';
import {render, taskCreated, projectCreated, createTaskCard, taskCompleted, showCard} from './dom.js'
import tks from'./task.js';
import projects from './categories.js';
//dom properties 

function main(){

    //testing purposes
    // tks.addToTasks("Coding", "Jan", 3, "Work");
    // tks.addToTasks("Project", "Feb", 2, "Work");
    // tks.addToTasks("Finances", "May", 1, "Work");

    // tks.addToTasks("Nails", "July", 2, "Personal");
    // tks.addToTasks("Laser", "July", 2, "Personal");
    // tks.addToTasks("Dr", "August", 2, "Personal");

    // tks.addToTasks("Social", "October", 2, "School");
    // tks.addToTasks("Math", "September", 1, "School");
    // tks.addToTasks("English", "Oct", 1, "School");
    // tks.addToTasks("Science", "September", 1, "School");

    // projects.addToProj("Work");
    // projects.addToProj("Personal");
    // projects.addToProj("School");


    render();

    // updateSecOptions();
    // taskCompleted();
    taskCreated();
    projectCreated();
}



main();

  



// get functionality for the date / completed - Today 

// use the storage and date stuff in the list - YES 



// organize by priority - do it right now 
// add a desc - dp it rn
// edit the cards 



// before we do the storage lets add the functionality to the crad (extend/delete task/project/ mark completed and make it look pretty, desc and time)