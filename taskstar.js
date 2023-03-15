const fs = require ('fs');
const http = require ('http');

const port = 5000;
const path = 'web_servers/index.html'

const server = http.createServer(function (req, res){
    fs.readFile(path, function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type}':'text/html'})
            res.end('404')
        }
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(data)
        
    })
})

server.listen(port, function(){
    console.log("Server at port", port, "is running")
})