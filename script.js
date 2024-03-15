const database = [
    {
        username: "Pheaktra",
        password: "ggwp"
    },
    {
        username: "Ph",
        password: "wp"
    },
    {
        username: "Pa",
        password: "gg"
    }
];
const newsfeed = [
    {
        username: "dot",
        timeline: "and thunh nas"
    },
    {
        username: "kk",
        timeline: "don't mess with me man!"
    }
];
const namePrompt = prompt("enter your username");
const passPrompt = prompt("enter your password");
function isValid(user,pass){
    for(var i = 0; i < database.length; i++){
        if(user === database[i].username && pass === database[i].password){
            return true;
        }
    }
    return false
}

function signIn(user, pass) {
    if (isValid(user, pass)) {
        console.log(newsfeed);
    } else {
        alert("wrong username and password");
    }
}
signIn(namePrompt, passPrompt);

