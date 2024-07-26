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
    let allTasks =[];
    let complTasks = [];

    //creating array for projects
    // function loadTasks(){
    //     let allTasks = [] || JSON.parse(localStorage.getItem('tasks'));
    //     return allTasks.map(task => new Task(task.title, task.dueDate, task.project, task.status));
    // }

    // function saveTasks(tasks){
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }


    function addToTasks(t, dd, p, s){
        // let allTasks = loadTasks()
        allTasks.push(new Task(t, dd, p, s));
        // saveTasks(allTasks);
    }

    function deleteTasks(p){
        const index = allTasks.indexOf(p);
        allTasks.splice(index, 1);
    }

    function getTasks(){
        return allTasks;
    }

    function completed(t){
        if (t.compl){
            complTasks.push(t);
            deleteTasks(t);
        }

    }

    function getCompleted(){
        return complTasks;

    }

    return{
        addToTasks: addToTasks,
        deleteTasks: deleteTasks,
        getTasks: getTasks,
        completed: completed,
        getCompleted: getCompleted,
    };

})();

export default tks;