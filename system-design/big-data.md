# message queues

- solution to a scenario where an application server faces a high volume of requests that it cant process simultaneously
- in situations where immediate processing of these requests isn't necessary, message queue may be a better choice than scaling horizontally or vertically
- ex
  - rabbitmq
  - kafka
  - gcp pub/sub

## push/pull model

- pull based model
  - application is responsible for monitoring message queue for updates.
  - if new messages are present and app server has capacity, pulls from queue
  - more efficient in managing server-size load
  - more latency
- push based model
  - queue takes responsibility of pushing messages to the server.
  - could overload the server if rate of incoming messages is too high
  - to ensure delivery, queue requires a response from server before completion of message send

## pub/sub model

- popular variabtion of message queues
- app event producers are the publishers, event recievers are the subscribers
- events are sent to 'topics', topics can be subscribed to
- provides decoupling of publishers and subscribers.
- better system scalability and ensures messages are not lost if a subscriber is unable to process them

# MapReduce
