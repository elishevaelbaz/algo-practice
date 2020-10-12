// helper functions

// getDigit takes in a number and a position, and returns the number in that position
// getDIgit(12345, 0) //=> 1
// only works for base 10 number
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10; // Math.abs is just to deal with negative nums
}
console.log(getDigit(7323, 2))
// ^^ we want the value in the 100s place, so we divide the num by 100 --> 7323 / 10^2 
// to get 73.23, then floor it to get 73
// then mod 10, to get the last number from 73 ie the 3

// find out how many digits are in the largest number, to see how many times to reorder in buckets
// digitCount(num) returns the number of digits in a single number, num
// mostDigits(list) uses digitCount to find the largest number of digits for the whole list
function digitCount(num){
  if (num === 0) return 1; // Math.log10(0) will give -Infinity, that's why we need special case
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
console.log(digitCount(438))
// Math.log10(438) => 10 to what power gives me 438 so we get 2.641....
// then we floor it to get 2, and add 1 to get 3 - tht's how many digits there are
console.log(Math.log10(438))

function mostDigits(nums){
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

console.log(mostDigits([123, 54643, 34, 43]))

// radixSort pseudocode:
// function that accepts a list of numbers
// figure out how many digits are in the largest number
// loop from k = 0 up to maxDigits
  // create a bucket for each digit (0 to 9) (subarrays that start out empty)
  // place each number in the corresponding bucket, based on its kth digit
// replace our existing array with values in our buckets starting with 0 going up to 9
// return the list at the end

function radixSort(nums){
  let maxDigitCount = mostDigits(nums);
  
  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      buckets[digit].push(nums[i])
    }
    nums = [].concat(...buckets) // OR: nums = buckets.flat()
    
  }
  return nums
}

console.log(radixSort([1, 789, 23, 99, 783, 546054, 2]))