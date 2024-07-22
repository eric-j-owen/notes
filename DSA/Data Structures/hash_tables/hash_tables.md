# hash table or hash map

used to store key-value pairs. not ordered. fast for finding values, adding new values, and removing values.

## hash functions

a function that converts keys in valid array indices. a good hash is:

- fast, constant time
- distributes uniformly, doesnt cluster outputs. may still have collisions
- deterministic (same input yields same output)

prime numbers in hash + length is helpful in spreading out keys more uniformly.

## collisions

### separate chainging

at each index in array values are stored in a different data structure (ex. linked list) allowing multiple key value pairs at the same index.

### linear probing

if a collision, search for the next empty slot, avoiding any collision.

## big o

insert, deletion , access: o(1)
