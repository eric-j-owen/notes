# libuv

- cross platform open srouce lib written in c
- handles async non blocking operations in node
- does this using thread pool and event loop

## thread pool

- async js methods are handled by libuv either via the native async mechanism in the os or through libuv's thread pool
- if there is no native async support in the os and the task is file i/o or cpu intensive, libuv uses thread pool to ensure main thread is not blocked
- network input/output operations (ex. https.request()) do not use thread pool
  - libuv delegates network i/o operations to system kernal and will poll the kernel to see if request is completed
- can stil become a bottleneck if all threads are busy

## event loop

- c program part of libuv
- a design pattern that orchestrates the execution of synchronous and asynchronous code in node
- consists of:
  - **timer queue** - libuv
    - setTimeout()
    - setInterveral()
    - callbacks
  - **i/o queue** - libuv
    - i/o callbacks associated with async methods
  - **check queue** - libuv
    - setimmediate
  - **close queue** - libuv
    - callbacks associated with close event of an async task
  - **micro task queue** - node runtime
    - **nextTick queue**
      - process.nextTick callbacks
    - **promise queue**
      - callbacks associated with native promises in js
- priority
  - user written synchronous js code takes priority over async code that the runtime executes
  - within event loop
    1. micro task queues (first nextTick queue, second promise queue)
    2. timer queue
    3. micro task queues (if present)
    4. i/o queue
    5. micro task queues (if present)
    6. check queue
    7. micro task queue (if present)
