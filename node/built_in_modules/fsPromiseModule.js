const fs = require("node:fs/promises");

fs.readFile("./node/general.md", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
