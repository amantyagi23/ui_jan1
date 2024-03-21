window.addEventListener("DOMContentLoaded", bindEvents);

function bindEvents() {
  document.getElementById("addItem").addEventListener("click", addTask);
}

function addTask() {
  var input = document.getElementById("inputBox").value;
  printList(input);
}

function printList(input) {
  var list = document.getElementById("taskList");
  var li = document.createElement("li");
  li.innerText = input;
  list.appendChild(li);
}
