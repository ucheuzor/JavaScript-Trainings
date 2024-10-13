
const inputNumber = document.getElementById("textBox");
const toCelsius = document.getElementById("ToCelsius");
const toFarenheit = document.getElementById("ToFarenheit");
const result = document.getElementById("result");
let temp;

function Convert() {
    if (toCelsius.checked) {
        temp = Number(inputNumber.value);
        temp = temp - 32 * 5 / 9;
        result.textContent = temp.toFixed(1) + "℃";

    } else if (toFarenheit.checked) {
        temp = Number(inputNumber.value);
        temp = temp * 9 / 5 + 32;

        result.textContent = temp.toFixed(1) + "℉";
    } else {
        result.textContent = "Please select a conversion unit!"
    }
}