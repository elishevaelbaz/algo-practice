// Given two positive integers, 
// find out if the two numbers have the same frequency of digits

// The solution must have O(N) time complexity

function sameFrequency(num1, num2){
  const obj = {};
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length){
      return false
  }
  // add each digit to an obj that stores the count
  for (let i = 0; i < num1.length; i++){
      const digit = num1[i]
      if (obj[digit]){
          obj[digit]++
      }
      else{
          obj[digit] = 1
      }
  }
  // remove the digits that are in the second number
  for (let j = 0; j < num2.toString().length; j++){
      const digit = num2.toString()[j]
      if (obj[digit]){
          obj[digit]--
      }
      else{
        // if the digit isn't already there
        // that means it wasn't in num1, so return false
        return false
      }
  }
  // all the keys in the object should have values of 0 now
  for (const key in obj) {
      if (obj[key] !== 0){
          return false
      }
    }
    return true
}

console.log(sameFrequency(231, 312)) // true
console.log(sameFrequency(22, 222)) // false
console.log(sameFrequency(897647, 098642)) // false
console.log(sameFrequency(12345, 43521)) // true