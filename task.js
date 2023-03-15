const http = require('http');

const port = 5000;

const server = http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type':'text/plain'});
    res.end("My server))))))")
});

server.listen(port, function(){
    console.log("Server at port", port, "is running")
})