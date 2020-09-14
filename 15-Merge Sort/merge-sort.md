# Merge Sort

Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945

Merge sort is an __intermediate sort__
 it's faster, but more challenging (less intuitive to write on your own)

Time complexity: __O(n log n)__ --> (Improves time complexity from O(n^2) in the other sorts)
__log n__ decompositions (this is referring to the splitting in half) and __O(n)__ comparisons per decompostion

Space complexity: __O(n)__


Merge sort takes advantage of the fact that an array of 0 or 1 element are already sorted
follows the divide and conquer approach - to decompose the array into smaller subarrays of 0 or 1 element each
then builds up a newly sorted array
```
      [8, 3 , 5, 4, 7, 6, 1, 2]
          /             \
  [8, 3, 5, 4]      [7, 6, 1, 2]
    /       \           /       \
  [8, 3]    [5, 4]    [7, 6]    [1, 2]
   /  \      /  \      /  \      /  \
  [8] [3]   [5] [4]   [7] [6]   [1] [2]
    \ /       \ /       \ /       \ /
  [3, 8]    [4, 5]     [6, 7]   [1, 2]
      \     /              \    /
    [3, 4, 5, 8]         [1, 2, 6, 7]
```