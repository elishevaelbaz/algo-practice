# Problem Solving Patterns

## Frequency Counters

Use an object to collect a bunch of values and their frequencies.  
Useful when you have multiple inputs and need to compare them to see if they have similar values, anagrams, etc.  

This will often be O(n) time by avoiding the need for nested loops - O(n^2) operations that would occur with arrays/strings.  

Example: _Write a function called __same__, which accepts two arrays. The function should return true if every value in the array gas its corresponding value squared in the second array. The frequency of values must be the same._  

```js
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```

__Naive solution__ (nested loops - indexOf is a loop)
```js
function same(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false
  }
  for (let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1){
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}
```

__Refactored solution__ O(n) - 3 separate loops (not nested)
```js
function same(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
  }
  for (let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
  }

  for (let key in frequencyCounter1){
    // if the key squared (ie the number from the input squared) is not in there at all 
    if (!(key ** 2 in frequencyCounter2)){
      return false
    }
    // if the FREQUENCY of the key squared is not the same
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}
```


## Sliding Window

Useful when you have a set of data like an array or string and you are looking for a subset of the data that is continuous in some way.  

for example the lingest substring of unique characters.  

Find the max sub array sum  

Create a window which can be a variable, a string or a subarray, and we move the window depending on some condition (usually sliding it to the left)  

It is very useful for keeping track of a subset of data in an array/string etc.  

Example: _Write a function called __maxSubarraySum__, which accepts an array of integers and a number called __n__. The function should calculate the maximum sum of __n__ consecutive elements in the array._  

__Naive solution__ (nested loops)
```js
function maxSubarraySum(arr, num){
  if (num > arr.length){
    return null;
  }
  let max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++){
    console.log(i)
    let temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i+j];
    }
    if (temp > max){
      max = temp;
    }
  }
  return max;
}
```

__Refactored solution__ O(n) - 3 separate loops (not nested)
```js
function same(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
  }
  for (let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
  }

  for (let key in frequencyCounter1){
    // if the key squared (ie the number from the input squared) is not in there at all 
    if (!(key ** 2 in frequencyCounter2)){
      return false
    }
    // if the FREQUENCY of the key squared is not the same
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}
```