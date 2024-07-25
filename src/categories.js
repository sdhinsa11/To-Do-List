//use static methods

// use the IIFE module pattern to do this, which is where the projects will be stored
// but we have our own class for the projects but call on it when we want to create it 
// we 

class P{
    constructor(name){
        this.title = name;
        this.sec = name;
    }
}

var projects = (function(){

    //creating array for projects
    let allProjects = [];

    function addToProj(name){
        allProjects.push(new P(name));
    }

    function deleteProj(p){
        index = allProjects.indexOf(p);
        allProjects.splice(index, 1);
    }

    function getProjects(){
        return allProjects;
    }


    return{
        addToProj: addToProj,
        deleteProj: deleteProj,
        getProjects:getProjects,
    };

})();

export default projects;