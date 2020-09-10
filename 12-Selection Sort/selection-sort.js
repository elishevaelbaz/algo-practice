// look for the minimum value at put it at the front:
// look through elements, finding the minimum, 
// and when get to the end of the array, 
//swap that min value with whatever value we are comparing it with (from towards the beg/left side of array)

//==================//
// Pseudocode
//==================//

// create a variable to store smallest value
// store the first element as the smallest value
// compare this to next elem in array
// if at any point, find a smaller number, store that index instead (saving the index, not the value)

// if the minimum is not the same one you started with (ie not the same index), swap the two vlalues
// otherwise, it's in the right place, so don't do anything
// repeat - starting with the next item in the array

function selectionSort(array){
  let smallestIdx;
  for (let i = 0; i < array.length; i++){
    smallestIdx = i
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[smallestIdx]){
        smallestIdx = j
      }
    }
    if (smallestIdx !== i){
      swap(array, i, smallestIdx)
    }
  }
  return array
}

function swap(arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}