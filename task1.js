const http = require('http');

const port = 5000;

const server = http.createServer(function (req, res){
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end('<html><body><p>My html server)))</p></body></html>');
});

server.listen(port, function(){
    console.log("Server at port", port, "is running")
})