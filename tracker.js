let nextTaskId = 1;
const list = document.getElementById("tasks-container");
let tasks = [];
function addHabit(habit, id) {
    const text = `<div class="task-holder">
        <p class="text">${habit}
        </p>
        <button onclick="removeHabit(this)" type="button" class="deletebtn"><i class="fa fa-trash-alt" job="delete"></i></button>
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
    tasks.push({
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
        clearTextBox();
    }
    input.value = "";
}

function removeHabit(element) {
    element.parentNode.nextElementSibling.remove();
    element.parentNode.remove();
}

function clearTextBox() {
    document.getElementById("input-habit").value = "";
}


