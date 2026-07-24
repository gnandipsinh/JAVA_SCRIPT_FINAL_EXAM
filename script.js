let tasksAdd = JSON.parse(localStorage.getItem("tasksAdd")) || [];
let index = -1;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  addData();
});

function addData() {
  let taskInput = document.getElementById("taskInput").value;

  let disInput = document.getElementById("disInput").value;

  let DateInput = document.getElementById("DateInput").value;

  let obj = {
    task: taskInput,

    desc: disInput,

    date: DateInput,
  };

  if (index === -1) {
    tasksAdd.push(obj);
  } else {
    tasksAdd[index] = obj;
    index = -1;
  }

  saveData();

  document.getElementById("taskInput").value = "";

  document.getElementById("disInput").value = "";

  document.getElementById("DateInput").value = "";

  display();
}

function display() {
  let result = document.getElementById("result");
  result.innerHTML = "";

  tasksAdd.forEach((item, id) => {
    result.innerHTML += `
            <tr>
                <td><h5>${id + 1}<h5></td>
                <td>${item.task}</td>
                <td>${item.desc}</td>
                <td>${item.date}</td>
                <td><button class="btn btn-outline-info" onclick="editData(${id})">Edit</button></td>
                <td><button class="btn btn-outline-danger" onclick="removeData(${id})">Remove</button></td>
            </tr>
        `;
  });
}

function removeData(id) {
  tasksAdd.splice(id, 1);

  saveData();

  display();
}

function editData(id) {
  index = id;

  document.getElementById("taskInput").value = tasksAdd[id].task;

  document.getElementById("disInput").value = tasksAdd[id].desc;

  document.getElementById("DateInput").value = tasksAdd[id].date;
}

function saveData() {
  localStorage.setItem("tasksAdd", JSON.stringify(tasksAdd));
}

display();
