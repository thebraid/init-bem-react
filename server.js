var http = require('http');
var static = require('node-static');
var file = new static.Server('./public');

http.createServer(function(req, res) {
    req.addListener('end', function () {
          file.serve(req, res);
      }).resume();
}).listen(3000);

console.log('Server running on port 3000');
