const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  // fs.createReadStream("index.html").pipe(res);

  const dynamicValue = "john doe";
  let html = fs.readFileSync("index.html", "utf-8");
  html = html.replace("{{name}}", dynamicValue);
  res.end(html);
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
