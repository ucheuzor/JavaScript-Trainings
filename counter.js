
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("CounterLabel");
let counter = 0;

decreaseBtn.onclick = function () {
    counter--;
    countLabel.textContent = counter;

}
increaseBtn.onclick = function () {
    counter++;
    countLabel.textContent = counter
}
resetBtn.onclick = function () {
    counter = 0;
    countLabel.textContent = counter
}