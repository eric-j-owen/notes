# hashing

- technique that can be used to map requests to servers
- each request has an ip address, user id or request id. calculated hash % number of servers
- results in the same ip always directed to the same server
- each server can cache data that belongs to a specific ip
- drawbacks
  - server goes down, additional arithmetic, new mapping will differ -> cache misses
    - remidied by consistent hashing
- consistent hashing
  - technique that enables uniform load distribution across servers
  - 'ring'/circle based structure and hash function to map requests
  - if a server goes down,requests are reassigned to next available server in a clockwise direction on the 'ring'
  - servers are referred to as nodes on the ring
  - beneficial for cdns, where its necessary to route specific users to the same cache servers or databases where specific users data resides
