import { createTodos,  } from "./hey.js";
import { todosStorage,getStoredTodos, getStoredProjects, projectIndex, brojectName, defaultPageProject, projectArrayParsed } from "./storage.js";
import { displayTodos, displayProjects } from "./display.js";
import "./styles.css";

window.onload = defaultPageProject();
window.onload = getStoredProjects();
window.onload = getlast();


const buttonMenu = document.getElementById("menu-button");
const menu = document.getElementById("menu");

buttonMenu.addEventListener("click", function() {
  if (menu.style.display === "none") {
    console.log("click")
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

const options = menu.querySelectorAll("li");

options.forEach(function(option) {
  option.addEventListener("click", function() {
    buttonMenu.textContent = option.textContent;
    menu.style.display = "none";
  });
});

function getlast () {
    projectArrayParsed = [];
    projectArrayParsed.push(JSON.parse(localStorage.getItem("arrayProjects")));
    brojectName = projectArrayParsed[0].slice(-1);
}  

let buttonAdd = document.getElementById("Add");
buttonAdd.addEventListener("click", createTodos);
buttonAdd.addEventListener("click", todosStorage);
buttonAdd.addEventListener("click", getStoredTodos);
buttonAdd.addEventListener("click", displayTodos);

if(localStorage.length > 0) {
console.log("mi sono attivato")

      if(localStorage.getItem("arrayProjects") === null) {
             console.log("non hai projects nel localstorage")
             } else {
              getStoredProjects();
              displayProjects();
             }
             
      if(localStorage.getItem(`${brojectName}`) === null) {   
              console.log("non hai projects nel localstorage")
             } else {
               getStoredTodos();
               displayTodos();
             }        
  };


