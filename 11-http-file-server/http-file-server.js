const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const filename = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "image/png" });
  fs.createReadStream(filename).pipe(res);
});

server.listen(port, () => {
  console.log("Running on port " + port);
});
