
const http= require('http');
url= require('url');
var qs=require('querystring');
var model,year,kms,fuel,seller,transmission,price;


http.createServer((req,res)=>
{
    var path=url.parse(req.url).pathName;
    console.log(path);
    console.log(req.url);
    var qs= url.parse(req.url,true).query;
    console.log(qs);
    
    model=qs.mod;
    year=qs.year;	
    kms=qs.kms;
    fuel=qs.fuel;
    seller=qs.slr;
    transmission=qs.trn;
    
    console.log("Got Data from user");
    console.log(461199.4263911+(13.23523829*year)+(3.644897975*kms)+(1.850174458*fuel)+(0.5171324974*seller)+(3.215724187*transmission));





    res.end();
    
}).listen(8004);
console.log('Server Started');

