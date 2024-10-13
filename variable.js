
const PI = 3.142;
let radius;
let circumference;

document.getElementById("btnSubmit").onclick = function () {
    radius = parseInt(document.getElementById("radi").value);
    circumference = 2 * PI * radius
    document.getElementById("itemDisplay").textContent = `The radius of the circle is ${circumference.toFixed(2)} cm`;

}