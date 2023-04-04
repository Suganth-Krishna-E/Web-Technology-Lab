const http= require('http');
url= require('url');
var ogpwd="xx21.suganth.xx21";

http.createServer((req,res)=>
{
    var path=url.parse(req.url).pathName;
    console.log(path);
    console.log(req.url);
    var qs= url.parse(req.url,true).query;
    console.log(qs);
    if(ogpwd==qs.pwd1)
    {
        var name=qs.name;
        var email=qs.email;
        res.write("Hello " + name + " your email id: " + email);
    }
    else
    {
        res.write("Please enter appropriate password");
    }

    res.end();
    
}).listen(8001);
console.log('Server Started');