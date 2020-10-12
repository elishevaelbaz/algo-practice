# Radix Sort

Up until now the sorts we've done were __comparison sorts__ - base comparison is between 2 items at any given point, and need decide which comes first (or second) ( by determinging which is < or >)

Average Time Complexity:  
Bubble Sort __O(n^2)__  
Insertion Sort __O(n^2)__  
Selection Sort __O(n^2)__  
Quick Sort __O(n log(n))__  
Merge Sort __O(n log(n))__  

### Can we do better?

Yes, but not by making comparison. Best avg case complexity that we can hope for in any comparison sort is __O(n log(n))__

By taking advantage of special properties of the data we can do better.  
__Integer Sorts__ - only work with numbers, and we don't make direct comparisons - we are never comparing if this number is less than or greater than another number  
__Radix Sort__ is an integer sort - special algorithm that works on lists of numbers

Usually used with binary numbers, (any number can be expressed in binary, strings can be converted to binary - so it's possible to sort), but the actual data _at the time we are sorting it_ needs to be numbers  

We will be working with numbers in Base 10.  

Radix sort exploits the fact that the size of a number is encoded in the number of digits.  
More digits == bigger number!  

### How it works
Take a list of numbers, and we create 10 different buckets (because we are using base 10)  
We go through the list of numbers and look at the first digit of the number (from the right side),  
and group them into the bucket corresponding to that number (not sorted within the buckets yet)  
Form them back into a list, keeping the order they are in from the buckets.  
So all the numbers with 0 in their last digit (ones place), will be before those with 1, 2, 3 etc  

Now we repeat the process, looking at the next digit - (2nd from the right)  
The number of times it repeats is based on the number of digits in the longest number.  
  If the highest number has 4 digits, will do the process 4 times.  
(Meanwhile, the smaller numbers end up in the 0 bucket - when we are up to the 2rd pass, any number with 1 digit has a 0 in the 2nd position, so will belong in the 0 bucket, and so on)

### Time Complexity
(there is controversy around this, but here is the generally accepted notation)  

Best, average and worst case:  
__O(nk)__ where __n__ is the number of integers in the list we are sorting, and __k__ is the length of the biggest number ie number of digits  

controversial, because the if dealing with unique randomly distributed data, time complexity becomes O(n log(n)) because of the way computers store information (that means it is equally as good as the other sorts in average case)

### Space Complexity
 __O(n + k )__