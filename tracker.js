let nextTaskId = 1;
const list = document.getElementById("tasks-container");
function addHabit(habit, id) {
    const text = `<div class="task-holder">
        <p class="text">${habit}
        <i class="fa fa-trash-alt toright" job="delete" id="${id}"></i>
        </p>
    </div>
    <div class="checkbox-holder">
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
    <div class="task-checkbox"><i class="far fa-square center"></i></div>
</div>`
    const position = "beforeEnd"
    list.insertAdjacentHTML(position, text);
    container.push({
        name: habit,
        id: id
    })
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
    }
    input.value = "";
}

//save to localStorage
function ToDos() {
    let habit;
    if (localStorage.setItem('habit') === null) {
        habit = [];
    } 
    else {
        habit = JSON.parse(localStorage.setItem('habit'));
    }

    habit.push(addHabit);
    localStorage.setItem('habit', JSON.stringify(habit));
}

// checked box
 let checkedBox = document.getElementById('checked-box').addEventListener('click', completed);

 function completed() {
    let checkedBox = document.getElementById('checked-box');
    checkedBox.classList.toggle("task-checked");  
}   
/* 

  let checkedBox = document.querySelector('.checkbox-holder');
checkedBox.addEventListener('click', completed, false);

function completed(e) {
    //if the element clicked is not the parent element itself
    if (e.target !== e.currentTarget){
    // get the ID of the clicked element, filtering out any clicks from the parent
    let thisItem = e.target.id; 
    this.classList.toggle("task-checked");
    
    }

} 
*/ 
