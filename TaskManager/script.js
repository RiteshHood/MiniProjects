let tasksArr = [];

let addTaskBtn = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function(){
    addTaskToList();
})

function addTaskToList() {
    let taskValue = document.getElementById("task").value.trim();
    if (taskValue !== "") {
        tasksArr.push({ text: taskValue, completed: false })
    }
    document.getElementById("task").value = "";
    showtask();
}

function showtask() {
    taskList.innerHTML="";
    // let taskList=document.getElementById("taskList");
    tasksArr.forEach((task) => {
        let li= document.createElement("li");
        
            li.textContent=task.text;
            li.style.textDecoration = task.completed?"line-through":"none";
            li.style.listStyle="none";


            li.classList.add("tasklist");

            li.addEventListener("click",()=>{
                task.completed = !task.completed;
                showtask();
            })


            //create a delete button
            let deletBtn=document.createElement("button");
            deletBtn.innerHTML="&#10006;";
            deletBtn.classList.add("delete-btn");
            deletBtn.style.marginLeft="190px";


            deletBtn.addEventListener("click",()=>{
                let index=tasksArr.indexOf(task);
                tasksArr.splice(index,1);
                showtask();
            })

            taskList.appendChild(li);
            li.appendChild(deletBtn);
    });


}
