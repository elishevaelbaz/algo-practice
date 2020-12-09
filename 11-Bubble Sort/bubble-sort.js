// not super efficient not commonly used except certain use-case

// O(n^2) -> 2 loops
// O(n) when array is nearly sorted, it's linear 

// Called Bubble sort b/c larger values 'bubble' to the top one at a time


// function swap(arr, idx1, idx2){
//   let temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp
// }

// unoptimized bubble sort
function bubbleSort(arr){
  for (let i = arr.length; i > 0; i-- ){
    for (let j = 0; j < i - 1; j++){
      if (arr[j] > arr[j+1]){
        // swap(arr, j, j+1)
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// if data is almost sorted
// can check if last time any swaps were made. 
// if no swaps were made, can break out because that means everything is sorted already

// Optimized bubble sort
function bubbleSortOptimized(arr){
  let noSwaps;
  for (let i = arr.length; i > 0; i-- ){
    // each time start loop, reset noSwaps to true
    noSwaps = true
    for (let j = 0; j < i - 1; j++){

      console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j+1]){
        // swap(arr, j, j+1)
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
        noSwaps = false
        console.log(noSwaps)
      }
    }
    if (noSwaps) break;
  }
  return arr
}

// O(n^2)
// O(n)