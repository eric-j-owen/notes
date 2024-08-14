# definition

- application level protocol
- facilitates two way communication between client and server.
- valuable for apps that require real time updates
- websocket connections are port 80
- websocket secure (wss) use port 443

# establishing a websocket connection

- client sends websocket handshake request
  - this is a http upgrade request with a few special headers
- server responsed
  - if server supports websocket protocol and is willing to accept connection, returns with status code 101
- data transfer
  - after handshake, client and server send data between eachother in realtime.
