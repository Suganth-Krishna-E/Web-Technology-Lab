const http= require('http');

http.createServer((req,res)=>
{

 res.writeHead(301, { Location: "http://localhost:8080/Log_In.html" });

    res.end();
    
}).listen(8002);
console.log('Server Started');
