# forward proxy server

- an intermediary in network communication
  - provides privacy
  - increases efficiency through caching
  - allows control over network `\
    - can filter requests

# reverse proxy

- anonymizes the destination server instead of the client
- able to protect servers by managing incoming requests and distributing the load across multiple servers
- protection against ddos attacks
- ex. cdns, load balancers

# load balancers

- reverse proxy
- resides between client and server
- distributes jtraffic across multiple servers that have been horizontally scaled
- various strategies to accomplish this
- round robin
  - ensures each server recieves an equal share of network requests preventing overloading any specific server
- weighted round robin
  - traffic is distrbuted based on the computational power of each server
  - ensures more efficient use of resources
- least number of connections
  - beneficial when there are significant differences or unpredictable variations in the time to process each request
  - new requests are ssigned to the server with the fewest active connections
  - advantageous where servers complete tasks at different rates
- user location
  - users recieve data from the nearest server
  - reduces latency
- layer 4 vs layer 7 specific load balancing
  - layer 4
    - transport layer, end to end communication, tcp and udp
    - routes traffic based on layer 4 data such as ip address, tcp port.
    - fast and straightforward
  - layer 7
    - application layer, services to software that initates the network request
    - routes traffic based on the content of requests, http headers, methods, body content
    - processing overhead, but more flexible
