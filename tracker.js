// set to & get username from localStorage upon first entry
window.onload = function greet(){
    name = localStorage.getItem("name");
    if (name == null || name == "null"){
      name = prompt("Welcome! Please enter your name:");
      localStorage.setItem("name", name);
    } 
    document.getElementById("greeting").innerText = greeting + ", " + name + "!";  
} 
  
const date = new Date();
const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
const timeOptions = { hour: '2-digit', minute:'2-digit' };
document.getElementById("date").innerText = date.toLocaleDateString('en-US', dateOptions);
document.getElementById("time").innerText = date.toLocaleTimeString('en-US', timeOptions);

let greeting;
let currentTime = date.getHours();
if(currentTime < 12) {
    greeting = "Good morning";
}
else if(currentTime >= 12 && currentTime < 16) {
    greeting = "Good afternoon";
}
else if(currentTime >= 16) {
    greeting = "Good evening";
}

let nextTaskId = 1;
const list = document.getElementById("tasks-container");
let tasks = [{
    task: "Go for a walk",
    id: 0
}];

function displayTask(habit, id) {
    const text = `<div class="row">
    <div class="task-holder" style="background-color:`+ color +`;">
        <p class="text">${habit}
        </p>
        <button onclick="removeHabit(this)" type="button" class="deletebtn"><i class="fa fa-trash-alt" job="delete"></i></button>
    </div>
    <div class="checkbox-holder">
    <div class="task-checkbox"></div>
    <div class="task-checkbox"></div>
    <div class="task-checkbox"></div>
    <div class="task-checkbox"></div>
    <div class="task-checkbox"></div>
    <div class="task-checkbox"></div>
    <div class="task-checkbox"></div>
    </div>
    </div>`

    const position = "beforeEnd"
    list.insertAdjacentHTML(position, text);

     //user able to checkboxes for each new habit as well, hence inside the new habit function
     checkBox = document.getElementsByClassName('task-checkbox');
     checkBoxes = checkBox.length;
     for (let i = 0; i < checkBoxes; i++) {
     checkBox[i].addEventListener('click', completed, false);
     }
}
//save tasks to localStorage
let saveToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addHabit(habit, id) {
    const task = {
        task: habit,
        id: id
    };
    displayTask(habit, id);
    tasks.push(task);  
    saveToLocalStorage(); 
}


const input = document.getElementById("input-habit");
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        addNewHabit();
    }
})


function addNewHabit() {
    const habit = input.value;
    if (habit) {
        addHabit(habit, nextTaskId++);
        clearTextBox();

    }
    input.value = "";

}

function removeHabit(element) {
    element.parentNode.parentNode.remove();
    element.parentNode.remove();
}

function clearTextBox() {
    document.getElementById("input-habit").value = "";
}

let color;

function changeColor(newColor) {
    document.getElementById("header").style.backgroundColor = newColor;
    const taskHolder = document.getElementsByClassName("task-holder");
        for(let i = 0; i < taskHolder.length; i++){
            taskHolder[i].style.backgroundColor = newColor;
        }   
    color = newColor;
}

//function that adds CSS styling class (task-completed, created in CSS sheet)
function completed(e) {
    e.target.classList.toggle("task-completed");
}



//get from LocalStorage
window.addEventListener("load", function () {
    let getFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    console.log(getFromLocalStorage);
    Object.assign(tasks, getFromLocalStorage); //copy from source to target
    tasks.forEach(item => {
        displayTask(item.task, item.id);
    })
})







