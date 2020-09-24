// function that accepts base and exponent
// function returns the power of the base to the exponent - mimics functionality of Math.pow()
// don't worry about negative bases and exponents

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
  if (exponent === 0) return 1
  
  return base * power(base, exponent - 1)
}

// function that takes in an array of numbers and returns the product of them all
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){
  if (arr.length === 0){
      return 1;
  }
  return arr[0] * productOfArray(arr.slice(1))
}

// function which accepts a number and adds up all the numberd from 0 to the number passed in
// recursiveRange(6) // 21   
// recursiveRange(10) // 55

function recursiveRange(num){
  if (num === 1) return 1
  return num + recursiveRange(num -1)
}

// fibonacci
// accepts a number and returns the nth number in the Fibonacci sequence 1, 1, 2, 3, 5, 8
// every number after the first 1, 1, is equal tot he sum of the previous two numbers

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
  if (n === 1 || n === 2) return 1
  return fib(n-1) + fib(n-2)
}

function fibonacciNoRecursion(n){

  if (n < 0) return undefined
  // if (n <= 1) return 1
  let previous = 1;
  let sum = 1;
  for (let i = 2; i <= n; i++){
    let temp = sum;
    sum += previous;
    previous = temp;
  }
  return sum
}

console.log(fibonacciNoRecursion(0))
console.log(fibonacciNoRecursion(1))
console.log(fibonacciNoRecursion(2))
console.log(fibonacciNoRecursion(3))
console.log(fibonacciNoRecursion(4))
console.log(fibonacciNoRecursion(5))
console.log(fibonacciNoRecursion(6))