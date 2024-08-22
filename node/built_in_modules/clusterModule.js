// enables creation of child processes aka workers that run simultaneously
// all created workers share same server port
// each worker gets its own event loop, memory and v8 instance

const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");

const cpus = OS.cpus().length;

// Set the scheduling policy to round-robin for windows
cluster.schedulingPolicy = cluster.SCHED_RR;

if (cluster.isMaster) {
  console.log(`master process ${process.pid} is running`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  console.log(`worker ${process.pid} started"`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {} // simulate cpu work
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("slow page");
    }
  });

  server.listen(3000, () => console.log("server running port 3000"));
}
