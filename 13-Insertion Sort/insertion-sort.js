//O(n^2)
// if mostly sorted, it's linear

// works well with online sort - live data
// since the left side is sorted , and things get inserted in the correct place

// INSERTION SORT:
// taking each element, one at a time, and inserting it in the correct place

//==================//
// Pseudocode
//==================//

// start with the second element in the array (first element is the 'sorted portion')
// compare with the one before it, and swap if necessary
// continue to the next element
// if it is in the wrong order, iterate through the sorted portion (on the left side)
// and place it in the correct spot in that sorted portion
// repeat until entire array is sorted

function insertionSort(array){
  for (let i = 1; i < array.length; i++){
    let currentVal = array[i];
    // conditional in the for loop array[j] > currentVal (array[i])
    let j = i-1 // put above so can access j when fall out of loop
    for (; j >= 0 && array[j] > currentVal; j--){      
      // we have the currentVal saved as variable (so don't worry about overwriting)
      // copy over the larger value - one space to the right
      // [1, 2, 9, 22, 76, 20] --> [1, 2, 9, 22, 20, 76] -->[1, 2, 9, 20, 22, 76] etc until we find where to insert currentVal
      array[j+1] = array[j];
      }
      // when we fall out of the loop, arr[j] is now 9 (the val smaller than currentVal)
      // so we want to put currentVal to the right of it, hence arr[j+1]
      array[j+1] = currentVal;
    }
    return array
  }



insertionSort([2, 1, 9, 76,4])