// O(n)

// like indexOf (built in js method) (also .includes, .find, .findIndex)

function linearSearch(array, val){
  for (let i = 0; i < array.length; i++){
      if (array[i] === val){
          return i
      }
  }
  return -1
}

