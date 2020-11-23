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
explicitly write out the steps you need to take.  
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