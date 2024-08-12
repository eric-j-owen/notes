# definition

- open source, cross platform javascript runtime environment.

## ecma

- ECMA-262 is the language specification
- ECMAscript is the language that impliments ECMA-262.

## javascript engine

- converts js into machine code and typically developed by web browser venders
- google's chrome v8 js engine is used in node and impliments ecmascript.
  - written in c++
    - this extends the functionality of javascript

## javascript runtime

- env which provides all necessary components to use and run a js program outside the browser
- components of js runtime
  - js engine
    - call stack
    - heap / memory
  - web/browser apis
    - ex. DOM, setTimeout(), storage, etc.
  - queues - for storingg asynchronous tasks
    - microtask queue
    - callstack / task queue
  - event loop
    - ensures async tasks are executed in correct order
- consists of c++ files which form the core features and js files which expose common utilities and some of the cpp features for easier consumption.
