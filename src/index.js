import './style.css';
import {render, taskCreated} from './dom.js'
import tks from'./task.js';
import projects from './categories.js';
//dom properties 

function main(){
    render();
    taskCreated();

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
        console.log(projects.getProjects());
        e.preventDefault();
        render();
        dialog.close();
        projectInfo.reset();
    });

}

// get the div where the things are located 
// iteratre through the buttons like in the calculator/etch a sketch
// if its clicked on that button then grab that id and call the function to display it 
// use the filter logic
// create a render that takes in the list and displayed that one 

main();


// filtering logic 
// switch pages  




// now we need to filter based on the page and so we grab the tasks and we add them 
// this is where the dom comes in 

//now i need some way to filter the projects with the tasks and we are all good
// I will have some stationary tasks such as: home: today: completed 

