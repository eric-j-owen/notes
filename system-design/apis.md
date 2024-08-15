# api

- application programming interface
- provides a way for clients to perform actions with servers over a network.
- consists of a set of rules a protocols for building and interacting with software
- defines methods and data formats for communication

# api classifications / paradigms

- rest
- graphql
- grpc

## rest

- representation state transfer
- refers to an apu that adheres to the design principles and standards of the representational state transfer architectural style.
- utilizes straightforward http for communication between client and server.
- require a client server architecture
- stateless, each request must include all necessary information. server should not retain details about previous requests.
  - this facilitates horizontal scaling, as server does not need to manage or update session states or cookies.
- limitations
  - over-fetching under-fetching data
    - client recieves more data than necessary leading to unnecessary consumption of network resources.
  - under-fetching data
    - endpoints are narrowly defined, resulting in multople calls to get complete data.

## graphql

- emerged as alternative api paradigm to address rest limitations.
- client can specify the required data within a single request regardless of how data is structured on server.
- server takes the respoonsibility of gathering all necessary data and formatting accordingly.
- queries vs mutations
  - queries
    - retrieving data
  - mutations
    - modifying data
- single endpoint, typically http post, where all queries are sent
- eliminates need to fetch more or less data than necessary. advantageous in mobile apps or under slower network conditions
-

## grpc

- grpc remote procedure call
- build on http/2
- framework for executing rpc - allows a program to execute a procedure on another computer or shared network.
- bi-directional communication
- sends data using protocol buffers instead of json.
- cannot be used natively on a browser without using a proxy
- typically used for server - server communication.
- faster than rest apis
- can stream data, not replacement for websocket, alternative for rest apis.
