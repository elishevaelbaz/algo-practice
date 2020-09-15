// Intermediate sorting 

//faster, but more challenging (less intuitive to write on your own)

//O(n log n) Time complexity

// Space complexity is O(n)

// start with the merge part

// function merge(arr1, arr2){
//   // create an empty array
//   let result = []
//   let i = 0;
//   let j = 0;
//   // while there are still values we haven't looked at
//   while (i < arr1.length && j < arr2.length){
//     //if the value in the first array is smaller than the value in the second array
//     // push that value into the results, and move onto the next value in the first array
//     if (arr1[i] <= arr2[j]){
//       result.push(arr1[i])
//       i++
//     }
//     else{ //vice versa (value in second array is smaller...)
//       result.push(arr2[j])
//       j++
//     }
//   }
//   // once we exhaust one array (fall out of while loop), push all remaining values of the second array
  // while (i < arr1.length){
  //   result.push(arr1[i])
  //   i++
  // }
  // while (j < arr2.length){
  //   result.push(arr2[j])
  //   j++
  // }
//   return result
// }

function merge(arr1, arr2){
  let result = []
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length){
    if (arr1[i] <= arr2[j]){
      result.push(arr1[i])
      i++
    }
    else{ 
      result.push(arr2[j])
      j++
    }
  }
  // not sure yet why this doesn't work:
  //   result.concat(arr1.slice(i)).concat(arr2.slice(j))

  while (i < arr1.length){
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length){
    result.push(arr2[j])
    j++
  }
  return result
}

// Sort part
// array.slice into half each time
// until array length is less than or equal to 1
// then use merge function to merge them back


// keep splitting it up to smaller arrays and call mergeSort on those arrays until their length is 0 or 1
function mergeSort(array){
  if (array.length <= 1){
    return array
  }
  let mid = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, mid))
  let right = mergeSort(array.slice(mid))

  return merge(left, right)
}

console.log(mergeSort([1, 2, 6, 3, 4, 8]))