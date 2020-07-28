var http = require('http');
var url = require('url');
var fs = require('fs');
var f = "./404.html";
fs.readFile(f, function(err, data) {
    global.err_data = data;
  });
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(err_data);
      return res.end();
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
