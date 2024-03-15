var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var done = document.getElementById("done");

function inputLength() {
    return input.value.length;
}

function getInputList() {
    var li = document.createElement("li");
    var deleteButton = document.createElement("button"); // Create a delete button
    deleteButton.appendChild(document.createTextNode("Delete")); // Set delete button text
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteButton); // Append delete button to the list item
    ul.appendChild(li);
    input.value = "";
    li.addEventListener("click", toggleDone);
    deleteButton.addEventListener("click", deleteListItem); // Add event listener to delete button
}

function addListAfterClicked() {
    if (inputLength() > 0) {
        getInputList();
    }
}

function addListAfterPressed(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        getInputList();
    }
}

function toggleDone() {
    this.classList.toggle("done");
}

function deleteListItem() {
    this.parentElement.remove(); // Remove the parent list item when delete button is clicked
}

button.addEventListener("click", addListAfterClicked);
input.addEventListener("keypress", addListAfterPressed);
