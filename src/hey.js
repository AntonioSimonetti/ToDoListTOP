import { displayProjects } from "./display";
import { projectsStorage, getStoredProjects,brojectName } from "./storage";
export { createTodos,todosArray,projectArray,todos };

class todos {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }

let todosArray = [];
let projectArray = [];


function createTodos () {   

  if(localStorage.getItem("arrayProjects") === null) {
     alert("You need to create at least one project")
     localStorage.clear();
     return
  } else {
  
let empty = []
empty.push(JSON.parse(localStorage.getItem("arrayProjects")));
let preFilterProjects22 = empty[0];

if (JSON.stringify(preFilterProjects22) === "[]") {  
  alert("You need at least one project")
  localStorage.clear();
  return
} else {    
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let priority = document.getElementById("menu-button").textContent;

  let checkArray = [];
  checkArray.push(JSON.parse(localStorage.getItem(`${brojectName}`)));

  if(checkArray.length > 0 && checkArray[0].length < 14 ) {  //else if >13 non puoi return;
    let data = [];
    let todosToConcat = [];
    todosToConcat.push(new todos(title, description, dueDate, priority));   
    data.push(JSON.parse(localStorage.getItem(`${brojectName}`)));
    let data2 = data[0];
    todosArray = todosToConcat.concat(data2)

  } else if(checkArray[0].length>13) {
    alert("You can have only 13 todos for every project");
    return;

  } else {
    todosArray.push(new todos(title, description, dueDate, priority)); 
   }
  }    
 }
}

function createProjects() { 
  if(localStorage.length > 0){
    let projectName = prompt("Project Name");
    let dataP = [];
    let projectsToConcat = [];
    projectsToConcat.push(projectName);
    dataP.push(JSON.parse(localStorage.getItem("arrayProjects")));
    let dataP2 = dataP[0];
    projectArray = projectsToConcat.concat(dataP2);
    let zeroIndex = projectArray.shift();
    projectArray.push(zeroIndex);
    projectsStorage()
    getStoredProjects(); 
    displayProjects();

  } else {
    let projectName = prompt("Project Name");
    projectArray.push(projectName);
    projectsStorage()
    getStoredProjects(); 
    displayProjects();
  }
}

let addProjectsButton = document.getElementById("addProjects");
addProjectsButton.addEventListener("click",createProjects);



