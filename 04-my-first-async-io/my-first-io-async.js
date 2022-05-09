const fs = require("fs");

const filename = process.argv[2];
let lines;

function handleFile(err, file) {
  if (err) {
    return console.log(err);
  }
  lines = file.split("\n").length - 1;
  console.log(lines);
}

fs.readFile(filename, "utf8", handleFile);
