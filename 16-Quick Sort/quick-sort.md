# Quick Sort

Quick sort exploits the fact that arrays of 0 or 1 elements are always sorted (like merge sort does)

Selects one element, the *pivot* and finds the index where the *pivot* should be in the sorted array  
Will move all the numbers lower than the '*pivot*' to the left, and any greater than the *pivot* to the right
then we know that the *pivot* is in the right spot  
The process is repeated for another element in the array 
```
[5, 2, 1, 8, 4, 7, 6, 3]
            5
3, 2, 1, 4     7, 6, 8 
...
```

Time complexity:  
Best or Average case: __O(n log n)__ --> *log n* decompositions and *O(n)* comparisons per decompostion  
Worst case: __O(n^2)__ - if the array is already sorted, and we start from the first item, each decomposition only puts 1 value in the correct spot, we need n decmpositions, and each composition compares to each value in array (n)  
A case where it's already sorted or reverse-sorted, would be *worst case* - always pivoting over the minimum or always over the maximum

Perhaps can avoid it by choosing random pivot instead of always the first