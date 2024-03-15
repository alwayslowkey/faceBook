var todos = [
    "sleep",
    "play game",
    "a little bit learngi",
    "nothing"
];

for(var i = 0; i < todos.length; i++){
    console.log(todos[i]);
}

//forEach in function

todos.forEach(function(todo){
    console.log(todo);
})

//write forEach and function in two difference place
function toto(todo){
    console.log(todo);
}
todos.forEach(toto);