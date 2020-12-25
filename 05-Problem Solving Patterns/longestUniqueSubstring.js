// Given a string, write a function to find the longest unique substring

function longestUniqueSubstring(str){
  let start = 0;
  let tempStart = 0;
  let currentMax = 0;
  let obj = {};

  for (let i = 0; i < str.length; i++){
    let letter = str[i];

    // if the letter is already in the obj
    // and has a value of index within our current substring
    // if you have duplicate or reach the end of the string
    if (obj[letter] >= tempStart || i === str.length - 1){

      let length;
      if (obj[letter] >= tempStart ){
         length = i - tempStart
      }
      else{
        length = i - tempStart + 1
      }
      if (length > currentMax ){
        currentMax = length;
        start = tempStart;
      }      
      // start the window from the letter after the 
      // first (of the 2) instance of the duplicate

      tempStart = obj[letter] + 1

    }

    obj[letter] = i;
  }
  return [currentMax, str.slice(start, start + currentMax)];
}

console.log(longestUniqueSubstring("hellothere")) // 6 "lother"
console.log(longestUniqueSubstring("abcdefg")) // 7 "abcdefg"
console.log(longestUniqueSubstring("abdbgfib")) // 5 "dbgfi"
console.log(longestUniqueSubstring("bibitly")) // 6 "bitly"
console.log(longestUniqueSubstring("elisheva")) // 7 "lisheva"