import './style.css';

class Task{
    constructor(title, dueDate, priority, section){
        this.title = title;
        // this.desc = desc;
        this.dueDate = dueDate;
        this.prior = priority;
        this.sec = section;
        this.compl = false;
    }

    setComplete(){
        this.compl = true;
        return this.compl;
    }

    changePriority(newP){
        this.prior=newP;
    }

    changeSection(newS){
        this.sec = newS;
    }
}


var tks = (function(){

    //creating array for projects
    let allTasks = [];

    function addToTasks(t, dd, p, s){
        allTasks.push(new Task(t, dd, p, s));
    }

    function deleteTasks(p){
        index = allProjects.indexOf(p);
        allTasks.splice(index, 1);
    }

    function getTasks(){
        return allTasks
    }

    return{
        addToTasks: addToTasks,
        deleteTasks: deleteTasks,
        getTasks: getTasks,
    };

})();

export default tks;