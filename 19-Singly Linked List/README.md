# Singly Linked List

Data structure - can store strings, numbers etc
it's a list, with no indices (not like array)
just has a bunch of elements, called __nodes__, that point to the next element, but can't use an index to access (can't look for the 5th element)

linked list contains 3 properties:
- head - beginning
- tail - end 
- length

One node points to the next node
 __*singly*__ only connected one-directionally to the next node (as opposed to doubly linked)

 random access is not allowed - can't go straight to the 5th element, must start at the beginning and go one by one. 

 Pros of linked list -__Insertion and Deletion__ - because arrays are indexed, if an element is inserted at the beginning or in the middle, there is a casecade/ripple effect, everything needs to be re-indexed