# Doubly Linked List

Double linked lists are similar to singly linked lists, but each node also points to the __previous node__  

This improves efficiency of some things like using `pop()` to remove the last item in array, or `reverse()` the list  

drawback - takes up __more memory__ (tradeoff for getting more __flexibility__)

Time Complexity:  
*Insertion*: __O(1)__ - constant time  

*Removal*: always __O(1)__ constant (unlike singly linked list which depends if you are removing from the beginning O(1), or the back O(n) ) 

*Searching*: __O(n)__ to see if a list contains a certain value, must traverse the list  

*Accessing*: (getting the 50th node) __O(n)__, as the list grows, so does the number of operations  
(Technically *O(n/2)* since we optimized it to traverse backwards if index is closer to the end, but it still __linear__, gets simplified to O(n))

Example of doubly linked list = browser history, can typically hit the back arrow or the forward arrow to go to previous or next page