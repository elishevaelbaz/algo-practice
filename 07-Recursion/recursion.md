# Recursion
Recursion is a process that calls itself

Some examples we've been using recursion without necessarily knowing it
- JSON.parse or JSON.stringify are often written recursively
- document.getElementById & DOM traversal algorithms - DOM is tree structure - can be 100 layers nested of divs

### Call Stack
  data structure that manages what happens when functions are invoked
when a function is invoked, it is placed on the top of the call stack
when JS sees the `return` keyword or when the function end, the compiler will remove the function from the stack

A recursive funstion keeps pushing the same function, over and over, onto the call stack

There are 2 essentials parts to a recursive function
- base case
- different input (each time it gets called with different input)

Recursive function will invoke the same function over and over, until the __base case__ is reached
The *base case* is condition when the recursion ends

### Helper Method Recursion
A pattern with an outer function that's *not* recursive, that calls an inner function which *is* recursive

__Generic Pattern__
```function outer(input){
  let outerScopedVariable = []

  function helper(helperInput){
    // modify the OuterScopedVariable
    helper(helperInput--)
  }

  helper(input)

  return outerScopedVariable
}
```

__Concrete Example__
```js
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
```