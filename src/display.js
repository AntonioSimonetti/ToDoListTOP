import { getStoredTodos, todosArrayParsed,removeTodos, projectArrayParsed,removeProjects, getStoredProjects,changeIndex, setBrojectName,brojectName } from "./storage.js";
export { displayTodos, displayProjects };

function displayTodos () {
    let content = document.getElementById("content");
    let arrObj = todosArrayParsed[0];
  
    while (content.hasChildNodes()) {
      content.removeChild(content.lastChild)
    }

    let index = 0;

    for (let i = 0; i< arrObj.length; i++) {
            let card = document.createElement("div");
            let title = document.createElement("h1");
            let removeButton = document.createElement("button"); 
            let extrasDiv = document.createElement("div");
            let extraContainer = document.createElement("div");
            let date = document.createElement("div");
            let priorityButton = document.createElement("button");
            let cardBackground = arrObj[i].priority;

             if(arrObj[i].priority == "Low "){
              cardBackground = "red";
           } else if(arrObj[i].priority == "Menu"){
              cardBackground = "red";
           } else if(arrObj[i].priority == "Medium "){
              cardBackground = "yellow";
           } else {
              cardBackground = "green"}

            removeButton.classList.add("remove-button");
            removeButton.setAttribute("id","removeButton");
            removeButton.dataset.linkedObj = index;
        
            card.classList.add("card");
            card.setAttribute("id","card");
            card.dataset.linkedObj = index;
            card.style.backgroundColor = cardBackground;

            title.textContent = arrObj[i].title;

            date.textContent = arrObj[i].dueDate;
            priorityButton.classList.add("priorityButton");
            priorityButton.setAttribute("id","priorityButton");
            priorityButton.dataset.linkedObj = index;

            extrasDiv.classList.add('card-extras');
            extrasDiv.setAttribute("id","extrasDiv");
            extrasDiv.dataset.linkedObj = index;
            extrasDiv.textContent = arrObj[i].description;

            extraContainer.classList.add("extracontainer");
            extraContainer.setAttribute("id", "extracontainer");

            
            card.appendChild(title);
            card.appendChild(date);
            extraContainer.appendChild(extrasDiv);
            card.appendChild(extraContainer);
            card.appendChild(priorityButton);
            card.appendChild(removeButton);
            content.appendChild(card);


            index++;

            removeButton.addEventListener("click", removeTodos);
            removeButton.addEventListener("click", getStoredTodos);
            removeButton.addEventListener("click", displayTodos);
            extraContainer.addEventListener('click', toggleDisplay);
            priorityButton.addEventListener("click", changePriority);


            function toggleDisplay(event){
              if(event.target.className === "extracontainer") {
                let extrasDiv = event.target.querySelector(".card-extras");
                
                if (extrasDiv){
                  event.target.removeChild(extrasDiv)
              }else {
                extrasDiv = document.createElement("div");
                extrasDiv.classList.add('card-extras');
                extrasDiv.setAttribute("id","extrasDiv");
                extrasDiv.dataset.linkedObj = index;
                extrasDiv.textContent = arrObj[i].description;
                event.target.appendChild(extrasDiv)
             }  
            }
           }
           function changePriority(ev){
            let currentColor = card.style.backgroundColor;
            if(currentColor === "red") {
              card.style.backgroundColor = "yellow";
              let retriveObj = ev.currentTarget.dataset.linkedObj;
              let preFilter = [];
              preFilter.push(JSON.parse(localStorage.getItem(`${brojectName}`)));
              let preFilter2 = preFilter[0];
              let filterMe = preFilter2.splice(parseInt(retriveObj),1);
              let modifyPrio = filterMe[0];
              modifyPrio.priority = "Medium ";
              let singleArray = filterMe.concat(preFilter2);
              localStorage.setItem(`${brojectName}`,JSON.stringify(singleArray));         
            } else if (currentColor === "yellow"){
              card.style.backgroundColor = "green";
              let retriveObj = ev.currentTarget.dataset.linkedObj;
              let preFilter = [];
              preFilter.push(JSON.parse(localStorage.getItem(`${brojectName}`)));
              let preFilter2 = preFilter[0];
              let filterMe = preFilter2.splice(parseInt(retriveObj),1);
              let modifyPrio = filterMe[0];
              modifyPrio.priority = "High ";
              let singleArray = filterMe.concat(preFilter2);
              localStorage.setItem(`${brojectName}`,JSON.stringify(singleArray));
            } else {
              card.style.backgroundColor = "red";
              let retriveObj = ev.currentTarget.dataset.linkedObj;
              let preFilter = [];
              preFilter.push(JSON.parse(localStorage.getItem(`${brojectName}`)));
              let preFilter2 = preFilter[0];
              let filterMe = preFilter2.splice(parseInt(retriveObj),1);
              let modifyPrio = filterMe[0];
              modifyPrio.priority = "Low ";
              let singleArray = filterMe.concat(preFilter2);
              localStorage.setItem(`${brojectName}`,JSON.stringify(singleArray));
            }     
           }       
          }
         }

    function displayProjects () {
      let projectList = document.getElementById("projectList");
      let projArr = projectArrayParsed[0];
    
      while (projectList.hasChildNodes()) {
        projectList.removeChild(projectList.lastChild)
      }

      let index = 0;
    
      for (let i = 0; i< projArr.length; i++) {
            let newProject = document.createElement("p");
            newProject.textContent = projArr[i];
         
            let removeBtn = document.createElement("button");
            let projectsDiv = document.createElement("div");
             
            projectsDiv.classList.add("projectsDiv");
            projectsDiv.setAttribute("id", "projectsDiv");
            projectsDiv.dataset.index = index;

            removeBtn.classList.add("remove-button-projects");
            removeBtn.setAttribute("id","removeButtonProjects");
            removeBtn.dataset.removeBtnProjects = index;

            projectsDiv.appendChild(newProject);
            projectsDiv.appendChild(removeBtn);
            projectList.appendChild(projectsDiv);

            index++;

            removeBtn.addEventListener("click", removeProjects);
            removeBtn.addEventListener("click", getStoredProjects);
            removeBtn.addEventListener("click", displayProjects);
            
            projectsDiv.addEventListener("click", changeIndex);
            projectsDiv.addEventListener("click", setBrojectName);
            header.textContent = brojectName;
            }
          }

          


   
