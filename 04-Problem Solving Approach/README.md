# Problem Solving Approach

## What is an Algorithm?
A __process__ or __set of steps__ to accomplish a certain task.

### How do you improve?
1. __Devise__ a plan for solving problems
2. __Master__ common problem solving patterns

### Problem Solving
- understand the problem
- explore concrete examples
- break it down
- solve/simplify
- look back and refactor

#### Step 1: Understand the Problem
1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution?
4. Can the outputs be determined from the inputs? Do I have enough info to solve the problem?
5. How should I label the important pieces of data that are a part of the problem?

Ex: _Write a function which takes two numbers and returns their sum._  
1. implement addition
2. how large are the numbers? are they integers or floats? etc
3. do we return a float or integer? etc
4. if only one number is provided as input, how do we handle that?
5. add (function name), num1, num2, sum

#### Step 2: Explore Concrete Examples
Coming up with examples can help you understand the problem better.  
Examples also provide sanity checks th at your eventual solution works how it should.  

User stories, unit tests

- start with simple examples
- progress to more complex examples
- explore examples with empty inputs
- explore examples with invalid inputs

Ex: _Write a function which takes in a string and returns counts of each character in the string._  

simple examples  
`charCount("aaaa"); // {a:4}`  
`charCount("hello"); // {h:1, e:1, l:2, o:1}`  
clarify do we want the letters that aren't there?  `{b:0, c:0...}`

more complex examples  
`charCount("my phone number is 12642")` Do we account for numbers? spaces?  
`charCount("Hello hi")`- what about capital letters?  

empty inputs  
`charCount("") `do we return empty object, undefuned, null?  

invalid inputs
`charCount(343)`

#### Step 3: Break it Down
Explicitly write out the steps you need to take.  
This forces you to think about the code you will write before you write it, and helps catch any lingering conceptual issues or misunderstandings before you dive in and worry about the details (like language syntax).  

Ex: _Write a function which takes in a string and returns counts of each character in the string._ 

```js 
  // return an object with keys that are lowercase alphanumeric characters in the string;
  // values should be the counts for those characters
function charCount(str){
  // make object to return at end
  // loop over string, for each character...
    // if the char is a number/letter AND key in the object, add one to count
    // if the char is a number/letter AND not in obj, add it to object and set value to 1
    // if char is something else (space, period etc.) don't do anything
  // return object at end
}
```

#### Step 4: Solve or Simplify
Solve the problem. If you can't solve it, solve a simpler problem.  
Ignore the part that is giving you a hard time to focus on everything else.  
In an interview, you want to have something to show for yourself.  
You don't want to get stuck on one difficult part of the problem and make 0 progress on anything else.  
Better to do what you know how to do so that you have _something_.  
Also, often when you start solving the simplified version you may gain insight into the more difficult part of the problem. Things will click into place and what you were stuck on before may have become clearer to you.  

Simplify
- Find the core difficulty in what you are trying to do.
- Temporarily ignore that difficulty.
- Write a simplified solution.
- Incorporate the difficulty back in if you can.  

Ex: _Write a function which takes in a string and returns counts of each character in the string._  
Difficulty - may not remember the method that lowercases or uppercases a string in Javascript.  
Start with the main logic, and just store upper and lower case letters and deal with it later. Mention it out loud to the interviewer - "I'm not exactly sure how to do this, I'm going to skip it for now" and then go back to it at the end, or say something like "if I had my computer I would look up the method" etc  

Another difficulty - checking the the character is alphanumeric  
```js 
  // return an object with keys that are lowercase alphanumeric characters in the string;
  // values should be the counts for those characters
function charCount(str){
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++){
    const char = str[i].toLowerCase()
    // if the char is a number/letter AND key in the object, add one to count
    if (result[char] > 0){
      result[char]++;
    }
    // if the char is a number/letter AND not in obj, add it to object and set value to 1
    else{
      result[char] = 1;
    }
  }
    // if char is something else (space, period etc.) don't do anything
  // return object at end
  return result;
}
```

What we have above is close, most of the way there, but still includes non-alphanumeric characters.  
We can try researching it, asking the interviewer for suggestions etc.  
(can use ascii codes or regex etc)  

#### Step 5: Look Back and Refactor
It's important to try and improve your code.  

Refactoring Questions:
- __Can you check the result?__ (make sure it works)
- __Can you derive the result differently?__ (there are likely multiple ways to solve the problem)
- __Can you understand it at a glance?__ (how intuitive is the solution)
- __Can you use the result or method for some other problem?__ (might unlock the solution to another problem in another project etc)
- __Can you improve the performance of your solution?__ (time and space complexity)
- __Can you think of other ways to refactor?__ (does it follow conventions, company guidelines, acknowledge that you would like to make it neater if you had time)
- __How have other people solved this problem?__ (interviewers have likely asked this to many other candidates)

```js 
function charCount(str){
  var obj = {};
  for (let i = 0; i < str.length; i++){
    const char = str[i].toLowerCase()
    if (/[a-z0-9]/.test(char)){ //added this regex to test for alphanumeric
      if (obj[char] > 0){
        obj[char]++;
      }
      else{
        obj[char] = 1;
      }
    }
  }
  return obj;
}
```

Can refactor with `for of` instead of regular for loop (readiblity, not performance)  
Also the `if else` can be refactored  
I'm not sure how efficient regex is? There may be abetter way to do this - charCodeAt
```js 
function charCount(str){
  var obj = {};
  for (let char of str){
    if (isAlphaNumeric(char)){ 
      char = char.toLowerCase()
      obj[char] = ++obj[char] || 1 // if obj[char] is truthy, add 1 to it. If there is nothing in there (falsey), set it to 1
    }
  }
  return obj;
}

function isAlphaNumeric(char){
  const code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false
  }
  return true
}
```

