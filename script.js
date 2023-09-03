const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
var totalCounts = document.getElementById("total-tasks");
var completedCounts = document.getElementById("completed-tasks");
var uncompletedCounts = document.getElementById("uncompleted-tasks");
var total = 0;
var completed = 0;
var uncompleted = 0;
// let clickCounter = 0;

function addTask() {
  if (inputBox.value === "") {
    alert("Please add something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    total += 1;
    uncompleted += 1;
    totalCounts.innerHTML = total;
    uncompletedCounts.innerHTML = uncompleted;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    // clickCounter += 1;
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      if (e.target.classList.contains("checked")) {
        completed += 1;
        completedCounts.innerHTML = completed;
        uncompleted -= 1;
        uncompletedCounts.innerHTML = uncompleted;
      } else {
        completed -= 1;
        completedCounts.innerHTML = completed;
        uncompleted += 1;
        uncompletedCounts.innerHTML = uncompleted;
      }

      saveData();
      // } else if (e.target.tagName === "LI" && clickCounter % 2 === 0) {
      //   e.target.classList.toggle("checked");
      //   completed -= 1;
      //   completedCounts.innerHTML = completed;
      //   uncompleted += 1;
      // uncompletedCounts.innerHTML = uncompleted;
      //   saveData();
    } else if (
      e.target.tagName === "SPAN" &&
      e.target.classList.contains("checked")
    ) {
      e.target.parentElement.remove();
      total -= 1;
      totalCounts.innerHTML = total;
      completed -= 1;
      completedCounts.innerHTML = completed;
      uncompleted -= 1;
      uncompletedCounts.innerHTML = uncompleted;
      saveData();
    } else if (
      e.target.tagName === "SPAN" &&
      !e.target.classList.contains("checked")
    ) {
      e.target.parentElement.remove();
      total -= 1;
      totalCounts.innerHTML = total;
      // completed -= 1;
      completedCounts.innerHTML = completed;
      uncompleted -= 1;
      uncompletedCounts.innerHTML = uncompleted;
      saveData();
    }
  },
  false
);
// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI" && e.target.classList !== "checked") {
//       e.target.classList = "checked";
//       saveData();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     } else if (e.target.tagName === "LI" && e.target.classList === "checked") {
//       e.target.classList = "unchecked";
//     }
//   },
//   false
// );

let btnDeleteItem = document.getElementById("clear-all");
btnDeleteItem.onclick = function (e) {
  function removeAll() {
    document.getElementById("checkList").innerHTML = "";
  }
  saveData();
};
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
