
function naiveSearch(longStr, shortStr){
  let count = 0;
  for (let i = 0; i < longStr.length; i++){
    for (let j = 0; j < shortStr.length; j++){
      if (longStr[i + j] !== shortStr[j]){
        // break out of inner loop
        break;
      }
      // chars are equal, and loop is up to the last value in shortStr - aka it's a match
      if (j === shortStr.length -1){
        count++;
      }
    }
  }
  return count
}