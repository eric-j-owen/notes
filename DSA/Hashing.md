[[DSA]]
- A hash function is a function that takes an input and converts it to an integer that is less than a fixed size set by the programmer. Inputs are called keys.
#### Hash Map
	An unordered data structure that stores key-value pairs. Implemented using hashing.

- O(1) - Add, remove, update values associated with a key.
- Iterate over keys and values unordered. 
#### Collisions
- When different keys convert to the same integer. Can handle collisions with **chaining**, creating a [[Linked List]] in the affected bucket.
- To minimize collisions, ensure size of hash table's modulus be a prime number

Faster than arrays at o(1), worse for space management since resizing a hash map is way more expensive than a dynamic array, since each key would need to be rehashed. 