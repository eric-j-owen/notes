const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("about page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "john",
        lastName: "doe",
      })
    );
  } else {
    res.writeHead(404);
    res.end("page not found");
  }
});

server.listen(3000, () => {
  console.log("running on port 3000");
});
