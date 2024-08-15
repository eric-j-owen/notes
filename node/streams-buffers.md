# stream

- sequence of data being moved from one point to another over time
- process strems of data in chunks as they arrive instead of wiating for the entire data to be available before processing
- stream is a build in node module that inherits from the event emitter class
  - other modules internally use streams for their functioning

# buffers

- node cannot control the pace at which data arrives in stream
- if there is data already being processes or too little data to process, node puts arriving data in a buffer
- ex. streaming a video online
  - if internet is fast enough, speed of the stream will be fast enough to instantly fill the buffer and send it to processing.
  - if internet is slow, after processing first chunk of data that arrived, video player will dislpay loading spinner indicating its waiting for more data to arrive.
  - once buffer is filled adn data is processed, video starts again.
  - while video is playing, more data will continue to arrive to the buffer.

```javascript
const buffer = new Buffer.from("Hello World");
console.log(buffer.toJSON());

buffer.write("coding");
console.log(buffer.toJSON());
```
