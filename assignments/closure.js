// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.


// has to be defined outside the outer function
let var_saved = 0

const outerFunction = () => {

  // anonymous function
  return () => var_saved++
  
  
}

console.log(outerFunction()())
console.log(outerFunction()())
console.log(outerFunction()())

console.log("start of stretch problems")
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  let count = 0
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  return function counter() {
      // inheriting the scope from the parent function
      count++
      return count
  }
};
// Example usage: const myCounter = counterMaker();
const myCounter = counterMaker()
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMaker2 = (limit) => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  let count = 0
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  return function counter2() {
      // inheriting the scope from the parent function
      count = (count % limit) + 1
      return count
  }
};
console.log("start of advanced counter")

const myCounter2 = counterMaker2(3)
console.log(myCounter2()); // 1
console.log(myCounter2()); // 2
console.log(myCounter2()); // 3
console.log(myCounter2()); // 1


// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
console.log("start of challenge 4")
const counterFactory = () => {

  return {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    first_method: function() {
      let count = 0
      return function() {
        count = count + 1
        return count
      }

    },
    second_method: function() {
      let count = 0
      return function() {
        count = count - 1
        return count
      }
    }
  }
};

const myCounter3 = counterFactory().first_method()
console.log(myCounter3())
console.log(myCounter3())


const myCounter4 = counterFactory().second_method()
console.log(myCounter4())
console.log(myCounter4())
