// implement a function which accepts a variable number of arguments
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using freqiency counter or multiple pointers pattern

function areThereDuplicates(){
  const obj = {}
  for (var i = 0; i < arguments.length; i++) {
    let current = arguments[i];
    if (obj[current]){
      obj[current]++;
      return true
    }
    else{
      obj[current] = 1
    }
  }
  return false
}