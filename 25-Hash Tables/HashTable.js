
class HashTable {
  constructor(size=53){ // default size is 53, prime number, in case none specified
    this.keyMap = new Array(size)
  }
// using the improved hash function made previously, 
// but now the length is already set in the constructor
  _hash(key){
      let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // SET 
  // accepts key and value
  // hashes the key
  // because we are using separate chaining
  // store key-value pair in hash table in a nested structure via separate chaining

  // ( we didn't account for same key
  // our implementation allows you to insert many values for the same key
  // and you will only 'get' the first value when you search for it )
  set(key, value){
    const index = this._hash(key)
    if (! this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  // GET
  // Accepts a key
  // hashes the key
  // retrieve the key value pair in the hash table
    //check based off the key, loop through to find the key 
  // if key isn't found, return undefined
  get(key){
    const index = this._hash(key)
    // if there are values at that index
    if (this.keyMap[index]){
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1] // just return the value
        }
      }
    }
    return undefined;
  }
  // array of all the keys
  keys(){
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]){
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // remove duplicate keys - usually wouldn't have dupliactes anyway
          if (!keysArr.includes(this.keyMap[i][j][0])){

            keysArr.push(this.keyMap[i][j][0]) 
          }
        }
      }
    }
      return keysArr;
  }
  // array of all the values
  values(){
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]){
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // remove duplicate values
          if (!valuesArr.includes(this.keyMap[i][j][1])){

            valuesArr.push(this.keyMap[i][j][1]) 
          }
        }
      }
    }
    return valuesArr;
  }
}

// testing with small hash just to see it works
let ht = new HashTable(4);
ht.set("hello", "test")
ht.set("cake", "is yummy")
ht.set("don't", "you worry about a thing")
ht.set("icecream", "ice cream")
ht.set("coding", "rocks")
ht.set("te", "gibberish")
ht.set("goodbye", "duplicate!")
ht.set("sup", "duplicate!")

console.log(ht.keyMap[0])
console.log(ht.keyMap[1])
console.log(ht.keyMap[2])
console.log(ht.keyMap[3])

console.log(ht.get("hello"))
console.log(ht.get("don't"))
console.log(ht.get("kdjfd"))
console.log(ht.get("nothere"))

console.log(ht.values())
console.log(ht.keys())