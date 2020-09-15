// Pivot (or Partition) helper

// given an array, designates an element as the pivot point
// should rearrange the elements in the array
// all values < pivot, are moved to the left
// all values > pivot are moved to the right
// the order of the elements  on either side doesn't matter (the pivot is still in the correct place)

// the helper should do this IN PLACE, not create a new array
// and should return the index of the pivot

//==============
// for simplicity we will always use first element as the pivot, but this has some consequences
//==============

// accept 3 arguments, array, start index, end index
// grab pivot from the start of the array 
// store the current pivot index in a variable (to keep track of where the pivot should end up)
// loop through the array from start to end
  // if the pivot is greater than current element, pivotIndex++ and swap current element with the element at pivot index
// swap starting element (pivot) with pivot index
// return the pivot index

function pivotHelper(arr, start=0, end=arr.length-1){
  function swap(array, i, j){
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  let pivotIndex = start
  let pivot = arr[start]
  for (let i = start + 1; i <= end; i++){
    if (arr[i] < pivot){
      pivotIndex++
      swap(arr, i, pivotIndex)
    }
  }
  swap(arr, start, pivotIndex)

  return pivotIndex
}

// Quick sort 
// call pivot helper on the array, recursively call quick sort on the left side and the right side of that pivot point
// from left up to but not including the pivot index
// same on right side
// still happening in place, not making new arrays
// base case checks if subarry has one item in it
function quickSort(arr, left = 0, right = arr.length -1){

  if (left < right){
    let pivotIndex = pivotHelper(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1)
    // right
    quickSort(arr, pivotIndex + 1, right )
  }
    return arr
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))