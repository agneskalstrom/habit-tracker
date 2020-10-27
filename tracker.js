const userName = prompt("Welcome! Please enter your name:");

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
else if(currentTime > 12 && currentTime < 16) {
    greeting = "Good afternoon";
}
else if(currentTime > 16) {
    greeting = "Good evening";
}

document.getElementById("greeting").innerText = greeting + ", " + userName + "!";    

let nextTaskId = 1;
const list = document.getElementById("tasks-container");
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function addHabit(habit, id) {
    const text = `<div class="row">
    <div class="task-holder">
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
    //created an array for the stuff to push to the const task 
    const task = {
        name: habit,
        id: id  
    };
    const position = "beforeEnd"
    list.insertAdjacentHTML(position, text);
    tasks.push(task);
   
}

//function for saving to localStorage
let saveToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }

const input = document.getElementById("input-habit");
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        addNewHabit();
    }
})

//This should all be Event Delegation
//select checkboxes and add same event listener to all
let checkBoxes = document.querySelectorAll('.task-checkbox');
checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', completed);
})  
//function that adds CSS styling class (task-completed, created in CSS sheet)
function completed() {
    this.classList.toggle("task-completed");
}  


function addNewHabit() {
    const habit = input.value;
    if (habit) {
        addHabit(habit, nextTaskId++);
        clearTextBox();
    }
    input.value = "";
    saveToLocalStorage();         
}


function removeHabit(element) {
    element.parentNode.parentNode.remove();
    element.parentNode.remove();
}

function clearTextBox() {
    document.getElementById("input-habit").value = "";
}

function changeColor(color) {
    document.getElementById("header").style.backgroundColor = color;
    const taskHolder = document.getElementsByClassName("task-holder");
        for(var i = 0; i < taskHolder.length; i++){
            taskHolder[i].style.backgroundColor = color;
        }
}


//get data from localstorage how? 
/* addHabit(tasks, list); */





