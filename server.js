var canned = require("canned");
console.log("hello from server");
var http = require("http");
var opts = {
  cors: true,
  cors_headers: [
    {
      "Access-Control-Allow-Origin": "*",
    },
  ],
};

var can = canned("./server", opts);
var port = process.env.PORT || 3005;

http.createServer(can).listen(port);
console.log("listening on", port);