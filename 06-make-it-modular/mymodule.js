const fs = require("fs");

module.exports = function (dirname, ext, callback) {
  fs.readdir(dirname, function (err, list) {
    if (err) {
      return callback(err);
    }

    const result = [];
    list.forEach(function (file) {
      file.split(".")[1] === ext ? result.push(file) : null;
    });

    callback(null, result);
  });
};
