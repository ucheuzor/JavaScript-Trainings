
const minNum = 1;
const maxNum = 100;
const answer = minNum > 1 ? Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum : Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`guess a number between ${minNum} and ${maxNum}`)

    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number!");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a number within the allowed guess range!")
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("Too Low! Try Again")
        } else if (guess > answer) {
            window.alert("Too High! Try Again")
        } else {
            window.alert(`Correct, the answer was ${answer}. It took you ${attempts} attempts!`);
            running = false
        }
        console.log(answer);
    }

}
