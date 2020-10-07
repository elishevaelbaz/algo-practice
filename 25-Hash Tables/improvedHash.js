// improving our original hash function (to make time constant, and more random)
// our hash function only works on strings, but we are not going to worry about that


// make the length of the hash table prime - greatly reduces the number of collisions - spreads out the keys more uniformly
function hash(key, arrayLen){
  let total = 0;
  // add a prime number to help reduce collisions (math!)
  const PRIME = 31;
  
  // making it constant by looping the length of the string times, with a cap of 100 times
  // so even as the string gets longer, time complexity SORTSS remains constant
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    // let char = key[i];
    // let value = char.charCodeAt(0) - 96;
    let value = key.charCodeAt(i) - 96;
    total = (total * PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash("cyan", 19))
console.log(hash("pink", 19))
console.log(hash("hello", 19))
console.log(hash("test", 19))