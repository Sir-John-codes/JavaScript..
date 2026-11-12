console.log("I am practising Javascript.")
console.log("I connected Javascript to HTML")
alert("Welcome to my website!");
alert("I am learning Javascript step by step");

let name = "John";
console.log(name);

// test 1 

let city = "Nairobi";
console.log(city);

//test 2 fix console.log("I am learning syntax")

let lesson = "I am learning syntax"
console.log(lesson)

// JS Operators Aithmetic operators

// test 1 Create variables called chai and mandazi containing the prices 30 and 20. Add them and print the total.

let chai = 30;
let mandazi = 20;
let total = chai + mandazi
console.log(total)

//test 2 Create a variable called savings containing 500 and another called spending containing 150. Subtract the spending from the savings and print the amount left.

let saving = 500;
let spending = 150;
let remainng = saving - spending
console.log(remainng)

//Exercise Use % to find the remainder when 14 sweets are shared among 4 people.

console.log(14 % 4); // 2 is the remainder
console.log(6 * 20);
console.log(900 / 3);

//updating variables

let savings = 100;
savings = savings + 50;
console.log(savings); // += add shorcut (-+) subtract shortcut

// test 

let scores = 10;
scores += 5
console.log(scores);

// test two 

let balance = 1000;
balance -= 250
console.log(balance)


let score = 45;
console.log(score >= 50);

//test Create language = "JavaScript" using let. Print whether language === "JavaScript".

let language = "JavaScript";
console.log(language === "JavaScript"); // true

// test 2  Create a variable named price containing the number 100.

let price = 100;
console.log(price !== 100); // false

// && meaning AND 

let marks = 75;
console.log(marks >= 70 && marks <= 79);

// test Create temperature = 25 using let. Check whether it is at least 20 AND at most 30.

let temperature = 25
console.log(temperature >= 20 && temperature <= 30); // true

//test 2 Create testMark = 85 using let. Check whether it is at least 70 AND at most 79.
let testMark = 85;
console.log(testMark >= 70 && testMark <= 79); // false 

// The OR || 

let day = "Sunday";
console.log(day === "Saturday" || day === "Sunday");

// test Create today containing "Monday". Check whether it is "Saturday" OR "Sunday".

let today = "Monday";
console.log(today === "Saturday" || today === "Sunday") // false

// test 2 1. Create mark containing 105. Check whether it is below 0 OR above 100.
let mark = -5;
console.log(mark < 0 || mark > 100) // true

// test Create isRaining with the value false. Print !isRaining.
let isRaining = false;
console.log(!isRaining); // true

//test 2 Create isLoggedIn with the value true. Print !isLoggedIn.
let isLoggedIn = true;
console.log(!isLoggedIn); //false 

// JS if condition  ..example 

// test  Create savingsAmount with the value 600. If it is at least 500, print "Big month!".
// test 2 Change savingAmount to 300. Add an else that prints "Keep saving!" when the amount is below 500.

let savingAmount = 500;
if (savingAmount >= 500) {
    console.log("Big month!")
} else {
    console.log("Keep saving!")
}

// test on if ....else  ; Change examScore to 40. Add an else that prints "Keep practising!" when the score is below 50.
let examScore = 40;
if (examScore >= 50) {
    console.log("You Passed")
} else {
    console.log("Keep practising");

}

// test  on else if Create practiceScore = 85 using let. Write an if / else if / else chain:
//- At least 80 → "Excellent!"
//- Otherwise, at least 50 → "You passed!"
//- Otherwise → "Keep practising!"

let practiseScore = 49;
if (practiseScore >= 80) {
    console.log("Excellent ")

} else if (practiseScore >= 50) {
    console.log("You passed")

} else {
    console.log("Keep pracstising")

}

//test 2 Create monthlySaving = 300 using let. Write another chain: At least 500 → "Big month!"Otherwise, at least 200 → "Good progress!" Otherwise → "Keep saving!"

let monthlySaving = 199;
if (monthlySaving >= 500) {
    console.log("Big month!")

} else if (monthlySaving >= 200) {
    console.log("Good progress")

} else {
    console.log("Keep saving")

}

// js loop 
// test Write a for loop that prints the numbers 1 through 5.

for (let i = 1; i <= 5; i++) {
console.log(i)
}

// test 2 Write a for loop that prints “I am learning JavaScript!” three times. Put the message in quotes inside console.log().
 
 
for (let i = 1; i <= 3; i++) {
console.log("I am learning JavaScript");
}

for(let i = 1; i <= 4; i++){
    console.log("I can write a loop")
}

// Example of a while loop 
let counter = 1; 
while(counter <=3){
    console.log(counter); 
    counter++;
}
// test Write a while loop that prints 1 through 5.
let mango = 1; 
while(mango <= 5) { 
console.log(mango);
mango++;
}

// test 2 Write a while loop that prints "I am practising while loops!" three times.

let wordText = 2;
while(wordText <= 3) {
    console.log("I am practising while loops!")
    wordText++;
}

// practising 2steps 
let evenNumber = 2; 
while(evenNumber <= 18){
    console.log(evenNumber);
    evenNumber+= 2
}

// test Use a for loop to print 1, 3, 5, 7, 9. Use i += 2 in the update part.
for(let i = 1; i<= 10; i+=2){
    console.log(i)
}