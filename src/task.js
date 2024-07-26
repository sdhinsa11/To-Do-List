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
    // let allTasks =[];
    // let complTasks = [];

    let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let complTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

    // Ensure all tasks are instances of Task
    allTasks = allTasks.map(task => new Task(task.title, task.dueDate, task.prior, task.sec));
    complTasks = complTasks.map(task => new Task(task.title, task.dueDate, task.prior, task.sec));

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(allTasks));
        localStorage.setItem('completedTasks', JSON.stringify(complTasks));
    }

    function addToTasks(t, dd, p, s){
        // let allTasks = loadTasks()
        allTasks.push(new Task(t, dd, p, s));
        saveTasks();
    }

    function deleteTasks(p){
        const index = allTasks.indexOf(p);
        allTasks.splice(index, 1);
        saveTasks();
    }

    function getTasks(){
        return allTasks;
    }

    function completed(t){
        if (t.compl){
            complTasks.push(t);
            deleteTasks(t);
            saveTasks();
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