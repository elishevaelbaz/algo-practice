// Given two strings, write a function to determine if the second string
// is an anagram of the first
// (can assume all characters are lowercase letters)

function validAnagram(str1, str2){
  if (str1.length !== str2.length){
    return false
  }
  let frequencyObj = {}
  for (let i = 0; i < str1.length; i++){
    const char = str1[i]
    if (frequencyObj[char]){
      frequencyObj[char]++
    }
    else{
      frequencyObj[char] = 1
    }
  }

  for (let j = 0; j < str2.length; j++){
    const char = str2[j]
    if (frequencyObj[char]){
      frequencyObj[char]--
    }
    // if it doesn't exist or is already at 0
    else{
      return false
    }
  }

  return true
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('texttwisttime', 'timetwisttext') // true
