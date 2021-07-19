// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(""))

// a) Your answer: Charlie 2021 but in an array where each index is a character from the string.
// b) Verify and explain: I was correct, the spilt() method spilts the string up by words or characters and returns it in an array.
// 
// ['C', 'h', 'a', 'r','l', 'i', 'e', ' ', '2', '0', '2', '1']


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will do nothing because there is not a return statement.
// b) Verify and explain: I was kind of right, maybe not unsure. When the code was run it returned the value of undefined so techically it did something just not what I was expecting.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: This will return all the values in the array multiplied by two.
// b) Verify and explain: I was correct, all values were multplied. The map method takes in array and returns a new array based on how it was manuplated by the user.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: This will filter out the odds and leave the evens.
// b) Verify and explain: I was correct, if you wanted odds they should have put !== 0 because filter returns a new array based on the passing criteria or the filtering criteria.


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer: It will retrun the learnStudent object with the apporiate values associated with it.
// b) Verify and explain: I think I am right, the learnStudent returned what was assigned during the initalization of constructor as an object on the terminal i.e. Learn { hi: 'George', cohort: 'Charlie', year: 2021 }

