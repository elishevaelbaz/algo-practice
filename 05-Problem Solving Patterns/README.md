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
