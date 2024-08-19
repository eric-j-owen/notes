# definition

- the process of making copies of data.
- a computer's speediest memory, allowing cpu to perform read and write operations faster than on ram or disk
- capacity is restricted

# web

- typically static elements get cached
- when browser needs to load a resource it checks the following
  - check memory cache
    - used for rsources downloaded in the current browsing session, memory not persistent
  - check disk cache
    - more persistent cache that contains resources from sites visited in the past
  - network request
    - if resource isnt in memory or disk, browser makes a network request to the server hosting the resource
- cache hit
  - file is found
- cache miss
  - not found
- cache hit ratio
  - #of cache hits / #of cache hits + cache misses
  - important for cdns

# caching modes

- write around cache
  - new data is written directly to disk, bypassing the cache
  - only frequently accessed data is eventually cached upon first access
  - saves cache space for popular content
- write through cache
  - data is written to both cache and disk simultaneously
  - ensures data consistency between cache and disk
  - can increase memory bus load and cache usage
- write back cache
  - data is initially written to only the cache
  - data is written to disk later, when cache is full or during idle times
  - reduces write operations to the disk but may risk data loss during crashes

# eviction policies

- a system that determines when items get removed from the cache
- fifo
  - first in first out
  - when cache is full, first piece of data to be cached is evicted
- lru
  - least recently used
- lfu
  - least frequently used
  - can be implimented using key value pairs to track usage
