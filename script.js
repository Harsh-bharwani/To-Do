// Document.contentloader-->make sure that html and css loaded before js

document.addEventListener('DOMContentLoaded',()=>{
    const taskInput=document.getElementById("taskInput");
    const addButton=document.getElementById("addButton");
    const unorderedList=document.getElementById("unorderedList");

    addButton.addEventListener("click",addTask);
    function addTask(){
        const taskText=taskInput.value.trim();
        if (taskText === ""){
            alert("Enter the task");
            return;
        }
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const delbutton= document.createElement("button");
        delbutton.style.backgroundColor="red";
        delbutton.textContent="delete";

        taskItem.appendChild(delbutton);
        unorderedList.appendChild(taskItem);

        delbutton.addEventListener("click", ()=>{
        unorderedList.removeChild(taskItem);
        })
    }
})

