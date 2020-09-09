// O(log n)

function binarySearch(sortedArr, value){
  let start = 0;
  let end = sortedArr.length - 1
  let middle = Math.ceil((end + start) / 2)
  
  while (sortedArr[middle] !== value && start < end){
    console.log(start, middle, end)
      // if the middle value is too large
      if (sortedArr[middle] > value){
          end = middle - 1
      }
      // if the middle value is too small
      else{
          start = middle + 1
      }
    // recalculate middle
    middle = Math.ceil((end + start) / 2)
  }
  if (sortedArr[middle] === value){
          return middle
      }
  // if get here there is no match
  return -1
}