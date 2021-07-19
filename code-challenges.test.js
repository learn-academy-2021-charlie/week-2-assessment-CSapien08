// ASSESSMENT 2: Coding practical questions with Jest

//const { stubString } = require("lodash")
//const { describe } = require("yargs")

//const { expect } = require("@jest/globals")
//const { it } = require("jest-circus")
//const { describe } = require("yargs")

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

//Create a test function.
//  use describe() to pass in the name of the function, divisibleByThree
//  use it() to describe what divisibleByThree is doing
//      within it() write the test using expect and toEquals
//      test to make sure num1, 2, 3 out the expected output
//END

describe("divisbleByThree", () => {

    it("Checks to see if a number is divisble by three", () => {
        expect(divisbleByThree(num1)).toEqual("15 is divisible by three.") 
        expect(divisbleByThree(num2)).toEqual("0 is divisible by three.")
        expect(divisbleByThree(num3)).toEqual("-7 is not divisible by three.")
    })
})

// b) Create the function that makes the test pass.

//Create a function
//  parameters - a number.
//  use modulo operator to check reminder is 0 or not.
//  if divisible by 3 output "number is divisible by three"
//  if not divisible by 3 output "number is notdivisible by three"
//END

const divisbleByThree = (number) => {
    if(number % 3 === 0){
        return `${number} is divisible by three.`
    }
    else{
        return `${number} is not divisible by three.`
    }
}

console.log(divisbleByThree(num1));
console.log(divisbleByThree(num2));
console.log(divisbleByThree(num3));

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//Create a test function
//  use describe() to pass the in function
//  use it() to describe what the function is doing
//      within it() write the test using expect and toEquals
//      test to make sure the arrays are all capitalized and has the correct expected output
//END

describe("capitalize", () => {

    it("returns an array with all the words capitalized", () => {
        expect(capitalize(randomNouns1)).toEqual(['Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew']) 
        expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.

//Create a function capitalize
//  parameters - an array
//  return the array with all words capitalized by using toUpperCase()
//END

const capitalize = (array) => {
    return array.map((value, index) => {
        return value = value.charAt(0).toUpperCase() +  value.substr(1);
    });
}

console.log(capitalize(randomNouns1));
console.log(capitalize(randomNouns2));

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

//Create a test function
//  use describe() to pass the in function
//  use it() to describe what the function is doing
//      within it() write the test using expect and toEquals
//      test to make sure the it got the first index and has the correct expected output
//END

describe("vowel", () => {
    it("Finds the index of the first vowel.", () => {
        expect(vowel(vowelTester1)).toEqual(1) 
        expect(vowel(vowelTester2)).toEqual(0) 
        expect(vowel(vowelTester3)).toEqual(2) 
    })
})

// b) Create the function that makes the test pass.

//Create a function
//  parameters - a string
//  use a loop to iterate through the string
//  find the first vowel using indexOf
//  return the index of the first vowel
//END

const vowel = (string) => {
    let index;
    for(const s of string){
        if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'){
            index = string.indexOf(s) 
            break
        }
    }
    return index
}

console.log(vowel(vowelTester1));
console.log(vowel(vowelTester2));
console.log(vowel(vowelTester3));