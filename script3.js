database = [
    {
        username: 'Pheaktra',
        password: "python"
    },
    {
        username: 'tra',
        password: "thon"
    },
    {
        username: 'Pheak',
        password: "py"
    }
];
newsfeed = [
    {
        username: "kiki",
        timelline: "i'm so sick i have no motivation in learning anymore."
    },
    {
        username: "orod",
        timeline: "i'm tired"
    }
];
namePrompt = prompt("enter your username");
passPrompt = prompt("enter your password");

function isValid(name, pass) {
    for (let i = 0; i < database.length; i++) {
        if (name === database[i].username && pass === database[i].password) {
            return true;
        }
    }
    return false;
}



function signIn(name, pass) {
    if (isValid(name, pass)) {
        console.log(newsfeed)
    } else {
        alert("Wrong username or password")
    }
}
signIn(namePrompt, passPrompt);