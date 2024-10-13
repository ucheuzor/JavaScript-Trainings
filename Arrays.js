

let fruits = ["banana", "Orange"];
let Numbers = [1, 2, 5, 6, 9, 3, 4];
let veg1 = ["carrot, pumpkin"];
let veg2 = ["waterleaf, spinach"];

let maxNum = Math.max(...Numbers);
let minNum = Math.min(...Numbers);
let combinedVegetables = [...veg1, ...veg2]
console.log(maxNum)
console.log(combinedVegetables)

fruits.push("Mango");
//fruits.shift()

fruits.unshift("WaterMelon");

let findOrange = fruits.indexOf("Orange");

// Loop through array
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

/*reverse an array
for (i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i])
}

//Another way to render arrays
for (let fruit of fruits) {
    console.log(fruit)
}

console.log(findOrange)
*/