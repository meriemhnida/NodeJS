
var fs = require('fs');
fs.open('input1.txt', 'r', function (err, f) {
    if (err) {
        return console.error(err);
        }
  console.log('Saved!');
});