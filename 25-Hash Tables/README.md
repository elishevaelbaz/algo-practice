# Hash Table / Hash Map

Most languages have a hash table/ hash map variation built in (like array), won't have to build it ourselves. (but we will for learning sake, to understand what is working behind the scenes)

### What is a hash table?
Hash tables are sued to store _key value_ pairs  
they are like arrays, but the keys are not ordered and don't have to be numeric  
They are fast for finding values, adding new values, and removing values.

hash tables commonly used because of their speed

__Python__ has __Dictionaries__  
__JS__ has __Objects__ and __Maps__  
__Java__, __Go__ & __Scala__ have __Maps__  
__Ruby__ has __Hashes__  

Can use human readable keys instead of indices  

We will use an array to implement (Pretending we can't use the built-in hash tables)
We need to __convert keys into valid array indices__ in order to look up values by key  
A function that performs this task is called a __hash function__

### What makes a good hash?
- fast (constant time)
- distributes uniformly, doesn't cluster outputs at specific indices
- deterministic - same input always yields same output

### Handling Collisions
1. __Separate Chaining__
  - at each index in the array, we store values using a more sophisticated data structure (like an array or linked list)
  - multiple key-value pairs stored at he same index, but nested
  - (allows for storing more items than the length of the hash)
2. __Linear Probing__
  - when there is a collision, search through the array to find the next empty slot
  - storing a single key-value pair at each index

##### Time Complexity:
Insertion: __O(1)  constant time__  
Deletion: __O(1)  constant time__  
Access: __O(1)  constant time__ - when 'get'ting, (using a given key to find the corresponding value)  
  if there are multiple items nested in the same location, need to loop through them, but if implemented well, should only be a few of them so would still be constant time.

(^ average and best case etc)  
(world's worst hash function - put all values in the same location, would be __O(n)__, because would need to loop through all the nested items to find it)

Searching for a value, would be __O(n) linear time__, would need to search through every single value to see if it exists

** cryptocraphically secure hash functions have different rules