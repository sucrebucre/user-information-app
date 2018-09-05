module.exports = function read_json(filename, callback) {

  var fs = require('fs');
  var obj;
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    callback(obj);
  });

}
