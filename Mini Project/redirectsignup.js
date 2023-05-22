const http= require('http');

http.createServer((req,res)=>
{

 res.writeHead(301, { Location: "http://localhost:8080/Sign-Up MP.html" });

    res.end();
    
}).listen(8004);
console.log('Server Started');
