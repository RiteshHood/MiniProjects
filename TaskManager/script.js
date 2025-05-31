let tasksArr = [];

let addTaskBtn = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function(){
    addTaskToList();
})

// add the task to tasklist 
function addTaskToList() {

    //get the task entered by user
    let taskValue = document.getElementById("task").value.trim();

    // check if task input is empty ?
    if (taskValue !== "") {

        // if not empty push it to task array
        tasksArr.push({ text: taskValue, completed: false })
    }

    // clear the input field
    document.getElementById("task").value = "";

    // show task
    showtask();
}


function showtask() {

    // make sure tasklist inner html is empty
    taskList.innerHTML="";

    // for each task in task array create an li element
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
