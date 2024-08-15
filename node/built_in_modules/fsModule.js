// file system module, able to work with file system on computer
// this callback version of fs is preferable over the promise fs when performance is a concern

const fs = require("node:fs");

//synchronous
const content = fs.readFileSync("./node/general.md", "utf-8");
console.log(content);

// async callback, does not block execution. once file is read, callback is called
fs.readFile("./node/streams-buffers.md", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

// streams

const readableStream = fs.createReadStream(
  "node/built_in_modules/test/read-stream.txt",
  {
    encoding: "utf-8",
    highWaterMark: 2,
  }
);

const writableStream = fs.createWriteStream(
  "node/built_in_modules/test/write-stream.txt"
);

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});

// pipe
const pipeWritableStream = fs.createWriteStream(
  "node/built_in_modules/test/pipe-write-stream.txt"
);

readableStream.pipe(pipeWritableStream);
