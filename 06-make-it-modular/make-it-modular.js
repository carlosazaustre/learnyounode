const mymodule = require("./mymodule");

const dirname = process.argv[2];
const ext = process.argv[3];

mymodule(dirname, ext, function (err, data) {
  if (err) console.log(err);

  data.forEach(function (file) {
    console.log(file);
  });
});
