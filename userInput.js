
let username;

let age = window.prompt("How old are you");

document.getElementById("submit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("header").textContent = `Hello ${username}`
};

console.log(Number(39) + 1)

