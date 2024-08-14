// works with events in node
// event = action that has happened in application that can be responded to
// can dispatch custom events and respond to custom events in non blocking manner

const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("dispatch-event", (x, y) => {
  console.log(`Event dispatched, ${x} ${y}`);
});

emitter.emit("dispatch-event", "Hello", "World");
