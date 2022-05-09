const http = require("http");
const urls = process.argv.slice(2);

const httpRequest = (url) =>
  new Promise((resolve, rejected) => {
    http.get(url, function (request) {
      let result = "";
      request.setEncoding("utf8");
      request.on("data", function (data) {
        result += data;
      });
      request.on("end", function () {
        resolve(result);
      });
      request.on("error", function (err) {
        rejected(err);
      });
    });
  });

Promise.allSettled([
  httpRequest(urls[0]),
  httpRequest(urls[1]),
  httpRequest(urls[2]),
]).then((results) => results.forEach((result) => console.log(result.value)));
