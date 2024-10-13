
function RollDice() {
    const numOfDiceRoll = document.getElementById("numberInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (i = 0; i < numOfDiceRoll; i++) {
        let value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="dice_images/Dice-${value}.png" alt="Dice ${value}">`)

    }

    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('')
}

