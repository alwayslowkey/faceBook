var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul")

function inputLength() {
    return input.value.length;
}

function getInputList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

}

// button.addEventListener("click", function () {
//     if (inputLength() > 0) {
//         getInputList();

//     }
// })

// input.addEventListener("keypress", function (event) {
//     if (inputLength() > 0 && event.keyCode === 13) {
//         getInputList();
//     }
// })


//another way of code

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

button.addEventListener("click", addListAfterClicked);

input.addEventListener("keypress", addListAfterPressed)

