# Singly Linked List

Singly linked list is a data structure - can store strings, numbers etc
it's a list, with no indices (not like array)
just has a bunch of elements, called __nodes__, that point to the next element, but can't use an index to access (can't look for the 5th element)

linked list contains 3 properties:
- head - beginning
- tail - end 
- length

One node points to the next node  
__*singly*__ only connected one-directionally to the next node (as opposed to doubly linked)

Random access is not allowed - can't go straight to the 5th element, must start at the beginning and go one by one. 

Pros of linked list:  
__Insertion and Deletion__ - because arrays are indexed, if an element is inserted at the beginning or in the middle, there is a casecade/ripple effect, everything needs to be re-indexed

Time complexity:   

*Insertion*: __O(1)__ - constant time whether the array is 1 item long or a million (array - if add something to the beginning, have to shift all the indices over  
(if inserting or deleting from the middle you still need to access it, so wouldn't time complexity be greater?)  

*Removal*: depends where we are removing from 
- if using `shift()` to remove first element __O(1)__, time complexity is __constant__ (take the current head and set it's .next to be the new head and take old head and set it's .next to be null (to chop the tie) )
- if using `pop()` to remove last element, __O(n)__ we need to find first find the item right before the last item, and must iterate the entire list


*Searching*: __O(n)__ to see if a list contains a certain value, must traverse the list  

*Accessing*: (getting the 50th node) __O(n)__, as the list grows, so does the number of operations  
  (Array has random access - so it's __contant time__ to access an item once it's indexed.
   indexing, insertion and removals can take time, but if just accessing nth item in array, it's O(1) )