# ip address

- distinct identifier for every device conected to a computer network.
- ipv4 vs ipv6
  - 32bit vs 128bit
- network layer
- public vs private
  - public is supplied by isp, reachable by any device on the internet.
  - private is employed within a confined network. not accessbile by broader internet, only reachable with lan.
- static vs dynamic ip addresses
  - static requires manual config
  - dynamic more commmonly used by clients, allocated temporarily and can change.automatic assigned reducing need for manual configuration.

# protocols and data

- internet protocol
  - data is transferred over a network in the form of data packets.
    - consists of
      - header
        - contains meta data such as source and desitination ip addresses. aka ip header.
      - data/payload
      - trailer
  - data packets may not arrive in same order it was sent
- tcp
  - transport layer
  - transmission control protocol
  - ensures data packets arrive in the correct sequence.
  - contains a tcp header with a sequence number to ensure accurate reassembly at destination
  - reliability
    - ensures 2 way connection, referred to as a 3 way handshake between devices before any data is exchanged.
      - if packet is sent and doesnt recive an acknowledgement, triggers retransmission.
    - extra overhead, tends to be slower
- udp
  - user datagram protocol
  - faster data transmission.
  - does not attempt to rend lost packets or reorder them
  - example, streaming video, can drop frames rather than interrupting and resending.

# ports

- 16 bit numeric identifiers utilized to distingush between multiple services running on a single device.
