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
