// first calculate recursively without dynamic programming and then implement dp
function fib(n){
  if (n === 1 || n === 2){
    return 1
  }
  return fib(n-1) + fib(n-2)
}

// very slow performance
// get's really large very quickly
// exponential O(2^n) --> even worse than anything we've seen (worst we've seen so far is O(n^2))
console.log(fib(5))
console.log(fib(1))
console.log(fib(7))
// console.log(fib(40)) -- to big, takes a lot of time

// we are REPEATING THINGS:

// let's use dynamic programming/Memoization to "remember" the old values
function memoizedFib(n, memo={}){ // or can use an array
  if (memo[n]){
    return memo[n];
  }
  else if (n === 1 || n === 2){
    return 1;
  }
  let result = memoizedFib(n-1, memo) + memoizedFib(n-2, memo);
  memo[n] = result;
  return result;
}

// if you were using this function frequently, 
// you would probably make memo a separate variable and store it, 
// so you don't have to recalculate each time you run the function

// Time complexity with memoization solution
// we are calculating fib(6), fib(5), fib(4) etc - each one 1 time
// afterwards just looking up in the array 
 // looking up an item based on it's index is constant time

 // O(n) - grows linearly with size of n 

console.log(memoizedFib(5))
console.log(memoizedFib(1))
console.log(memoizedFib(45)) // very fast now - instantaneous


// let's use dynamic programming/Tabulation
function tabulatedFib(n){ 
  if (n === 1 || n === 2){
    return 1;
  }
  const fibNums = [0, 1, 1]
  for (let i = 3; i <= n; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2]
  }
  return fibNums[n]
}

 // O(n) - loop that grows linearly with size of n 

console.log("---------")
console.log(tabulatedFib(5))
console.log(tabulatedFib(1))
console.log(tabulatedFib(45)) 