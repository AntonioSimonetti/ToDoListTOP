export { todosStorage,getStoredTodos,todosArrayParsed,removeTodos,projectArrayParsed,projectsStorage,getStoredProjects,removeProjects,changeIndex,projectIndex,setBrojectName,brojectName,defaultPageProject };
import { displayProjects,displayTodos } from "./display.js";
import { todosArray,projectArray,todos } from "./hey.js";

let todosArrayParsed = [];
let projectArrayParsed = [];
let projectIndex = 0;
let brojectName = "youllneverusethisstring";

function changeIndex(ev) {
    todosArray = [];
    let changeIndex = ev.currentTarget.dataset.index;
    projectIndex = changeIndex; 
    getStoredTodos();
    displayTodos();
    getStoredProjects();
    displayProjects();
}

function setBrojectName(ev) {
    brojectName = ev.target.textContent;
    let header = document.getElementById("header");
    header.textContent = brojectName;
    getStoredTodos();
    displayTodos();
    getStoredProjects();
    displayProjects();
}

function todosStorage(){
        localStorage.setItem(`${brojectName}`,JSON.stringify(todosArray));
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key === "" || key === null || key === "youllneverusethisstring") {
              localStorage.removeItem(key);
            }
           }
        todosArray = [];
}

function getStoredTodos(){

    todosArrayParsed = [];
    projectArrayParsed = [];
    todosArrayParsed.push(JSON.parse(localStorage.getItem(`${brojectName}`)));  
}

function removeTodos(ev){ 
   
    let retriveObj = ev.currentTarget.dataset.linkedObj;
    let preFilter = [];
    preFilter.push(JSON.parse(localStorage.getItem(`${brojectName}`)));
    let preFilter2 = preFilter[0];
    let filterMe = preFilter2.splice(parseInt(retriveObj),1);
    let filtered = preFilter2.filter(item => item !== filterMe)
    localStorage.setItem(`${brojectName}`,JSON.stringify(filtered));
}

function projectsStorage(){
    localStorage.setItem("arrayProjects",JSON.stringify(projectArray)) 
    brojectName = projectArray.slice(-1);
    projectArray = []; 
}

function getStoredProjects(){
    projectArrayParsed = [];
    projectArrayParsed.push(JSON.parse(localStorage.getItem("arrayProjects")));
}  

function removeProjects(ev){ 
    let syncro = [];
    syncro.push(JSON.parse(localStorage.getItem("arrayProjects")));
    let syncro2 = syncro[0]
    let retriveBtn =  ev.currentTarget.dataset.removeBtnProjects
    let preFilterProjects = [];
    preFilterProjects.push(JSON.parse(localStorage.getItem("arrayProjects")));
    let preFilterProjects2 = preFilterProjects[0];
    let filterMeProjects = preFilterProjects2.splice(parseInt(retriveBtn),1);
    let filteredProjects = preFilterProjects2.filter(item => item !== filterMeProjects)
    localStorage.setItem("arrayProjects",JSON.stringify(filteredProjects));
    let difference = syncro2.filter(x => !preFilterProjects2.includes(x));
    window.localStorage.removeItem(`${difference}`);
}

function defaultPageProject() {
    let defaultArray = [];
    let projectName = "Default Project"
    defaultArray.push(projectName);
    let empty = []
    empty.push(JSON.parse(localStorage.getItem("arrayProjects")));
    let preFilterProjects22 = empty[0];

    if(preFilterProjects22 == null) {
        localStorage.setItem("arrayProjects",JSON.stringify(defaultArray)) 
        brojectName = "Default Project";
        getStoredProjects();
        displayProjects();
        let title = "default";
        todosArray.push(new todos(title, description, dueDate, priority));  
        todosStorage();
        getStoredTodos()
        displayTodos(); 
    }
}
