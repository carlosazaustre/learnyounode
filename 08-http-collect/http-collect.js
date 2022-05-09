const http = require("http");

const url = process.argv[2];

http.get(url, function (request) {
  let result = "";
  request.setEncoding("utf8");
  request.on("data", function (data) {
    result += data;
  });
  request.on("end", function () {
    console.log(result.length);
    console.log(result);
  });
});
