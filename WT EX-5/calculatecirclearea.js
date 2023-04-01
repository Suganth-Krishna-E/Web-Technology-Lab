const http= require('http');
url= require('url');
http.createServer((req,res)=>
{
    console.log(req.url);
    var qs= url.parse(req.url,true).query;
    console.log(qs);
    console.log(qs.rad);
    var side=Number(qs.rad);
    var cirarea=(3.14)*side*side;
    var length=Number(qs.len);
    var breadth=Number(qs.brd);
    var recarea=length*breadth;
    res.write("Area of the circle is "+cirarea);
    res.write("   Area of the rectangle is "+recarea);
    res.end();
    
}).listen(8080);