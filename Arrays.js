

let fruits = ["banana", "Orange"];

fruits.push("Mango");
//fruits.shift()

fruits.unshift("WaterMelon");

let findOrange = fruits.indexOf("Orange");

// Loop through array
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

//reverse an array
for (i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i])
}

//Another way to render arrays
for (let fruit of fruits) {
    console.log(fruit)
}

console.log(findOrange)