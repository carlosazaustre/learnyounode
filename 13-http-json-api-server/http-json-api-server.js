const http = require("http");
const url = require("url");

const port = process.argv[2];

const routes = {
  "/api/parsetime": (parsedUrl) => {
    const date = new Date(parsedUrl.query.iso);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  },
  "/api/unixtime": (parsedUrl) => {
    const date = new Date(parsedUrl.query.iso);
    const milliseconds = date.getTime();
    return {
      unixtime: milliseconds,
    };
  },
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const resource = routes[parsedUrl.pathname];

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(resource(parsedUrl)));
});

server.listen(port);
