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
We need to __convert keys into valid array indicess__ in order to look up values by key  
A function that performs this task is called a __hash function__

### What makes a good hash?
- fast (constant time)
- distributes uniformly, doesn't cluster outputs at specific indices
- deterministic - same input always yields same output
