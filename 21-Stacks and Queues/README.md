# Stacks and Queues


## Stacks
A __stack__ is a __LIFO__ data structure - Last In First Out  
last element added to the stack is the first one removed  
like a stack of plates (add and remove from the top, so the last plate added, will be the first you take)  

### Used for
- handling function invocations - like the *call stack* 
- undo/redo functionality
- routing - history object is treated like a stack

JS does not come with stack data type, but they are relatively simple to implement  
1. Easiest way is to use an array data type (using `push()` and `pop()` to add to/remove from the end)
(can also use `shift()` and `unshift()` as long as you are consistent - adding/removing from the beginning - still LIFO, but doing so is *bad* time complexity for arrays - need to shift all the indices)  

2. Liked List is better for efficiency than an array - when you have a huge number of elements, since we only need LIFO capability, we aren't accessing anything based off the index, only accessing based off the order it was added  

Time Complexity:  
Insertion and Removal: __O(1)__ Constant Time  
Searching and Accessing: __O(n)__ - but this is not important on a stack (would use array or another DS for faster access)  


## Queues
A __queue__ is a __FIFO__ data structure - Last In First Out  
(like waiting in line or a queue - first person waiting in line is the first one out)  

### Used for
- Background tasks on the computer
- Uploading/downloading files
- Printing/task processing (can only print one item at a time)

JS does not come with queue data type, but they are relatively simple to implement  
1. using array data type (using `push()` combined with `shift()` add to the end, and remove from the beginning 
or `shift()` and `pop()` - add to the beginning and remove from the end - as long as you are consistent - making sure it's FIFO, but either way there is *bad* time complexity, would have to reindex the array when using `shift()` or `unshift()` - need to shift all the indices)  

2. Can create our own (similar to linked list and call stack)

__enqueue__ - add something to a queue  
__dequeue__ - remove something to a queue

Time Complexity:  
Insertion and Removal: __O(1)__ Constant Time  
Searching and Accessing: __O(n)__ - but this is not important on a queue (would use array or another DS for faster access) 