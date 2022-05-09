const http = require("http");
const map = require("through2-map");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
  }
});

server.listen(port, () => {
  console.log("Running on port " + port);
});
