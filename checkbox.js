const subscribeBtn = document.getElementById("myCheckBox");
const paypalBtn = document.getElementById("paypalBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const visaBtn = document.getElementById("visaBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
let myPhoneNo = "123-456-789";
let fullname = "Uchenna Uzor";
const email = "ucheuzor24@gmail.com"

mySubmitBtn.onclick = function () {
    if (subscribeBtn.checked) {
        subResult.textContent = "You are Subscribed!"
    }
    else {
        subResult.textContent = "You are not Subscribed!"
    };

    if (visaBtn.checked) {
        paymentResult.textContent = "You selected Visa as your payment method!";
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = "You selected MasterCard as your payment method!";
    } else if (paypalBtn.checked) {
        paymentResult.textContent = "You selected Paypal as your payment method!";
    } else {
        paymentResult.textContent = "You must select a payment type!";
    }
}

for (i = 0; i < 20; i++) {
    if (i === 13) {
        continue
    }
    console.log(`Hello ${i}`)
}
/*
let firstname = fullname.slice(0, fullname.indexOf(" "));
let lastName = fullname.slice(fullname.indexOf(" ") + 1);
let username = email.slice(0, email.indexOf("@"));
let mailSection = email.slice(email.indexOf("@") + 1);
console.log(mailSection);
console.log(username);
console.log(lastName);
console.log(firstname);
//get last character
console.log(fullname.slice(-2))

console.log(myPhoneNo.replaceAll("-", ""));
console.log(myPhoneNo.padStart(20, "F"))
*/

