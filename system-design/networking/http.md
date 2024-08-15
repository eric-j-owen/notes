# http

- built on top of ip and tcp.
- request / response protocol
- defines the format for clients and servers to speak to eachother
- works best when dealing with stateless data. follows a request-response protocol. this approach lacks real time communication capabilities, ex: chat app - would require client to continually make request to server = overhead, not ideal.

# client / server

- client
  - applicationm, system or server that accesses a service made available by another server. sends request to server
- server
  - computer, device or software that provides resources, data, services, or functionality to the client or other servers. responds to incoming requests.

# rpc

- remote procedure call
- provides ability for a program to perform functions on a seperate machine, allowing programs to operate across multiple computers

# http request

- method
  - get, post, put, delete
- url/uri
  - specified where the request should be made. contains path and parameters
- headers
  - request headers
    - provides requisite information about the request including the type of data the client can accept.
  - response headers
    - additional info, including settng cookies, caching behavior, and content-type.
- body
  - contains payload

# http methods

- get
  - retrieves a resource
- post
  - sends data to server to create a new resource. contains a payload.
- put
  - update a resource.
- delete
  - deletes specified data.

# http status codes

- information responses (100 - 199)
  - 100 continue
    - everything is in order so far, client should proceed with request
  - 101 switching protocols
    - server is switching to a different protocol as specified by client
- successfull responses (200 - 299)
  - 200 ok
    - request is successfull and requested data is returned.
  - 201 created
    - request has succeeded resulting in the creation of a new resource (post or put)
- redirection (300 - 399)
  - 300 multiple choices
    - request has more than one response
  - 301 moved permanently
    - requested resource has been moved and server is redirecting client
  - client error responses (400 - 499)
    - 400 bad request
      - client request is invalid or not understood
    - 401 unauthorized
      - client makes request without proper auth
- server error (500 - 599)
  - error occured on server side while processing request

# ssl / tls

- transport layer security
  - facilitates secure communication over a network
- http alone is vulnerable to man in the middle attacks since data is not encrypted.
- tls and ssl ensure that web data remains inaccessible and unalterable bu unauthorized parties. https is tls and ssl.
