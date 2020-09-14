// factorial

function factorial(n){
  if (n === 0 || n === 1){
    return 1
  }
  return n * factorial(n -1)
}

// return odd numbers in an array without changing original array
// helper method recursion (generally more straightforward than pure recursion)
function collectOddValues(arr){
    
  let result = [];

  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }
      
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      // calling helper method on subarray (everything on the array excluding the first element)
      // (remember the dragon story)
      helper(helperInput.slice(1)) 
  }
  
  helper(arr)

  return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])

// pure recursion
function collectOddValuesPure(arr){
  let newArr = [];  // makes an empty newArr each time
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// collectOddValuesPure([1,2,3,4,5])
// [1].concat(collectOddValuesPure([2,3,4,5]))
//           [].concat(collectOddValuesPure([3,4,5]))
//                     [3].concat(collectOddValuesPure([4,5]))
//                               [].concat(collectOddValuesPure([5]))
//                                         [5].concat(collectOddValuesPure([]))
//                                                   []
// --> [1,3,5]
// concat to add to the array without reassigning the array

                              