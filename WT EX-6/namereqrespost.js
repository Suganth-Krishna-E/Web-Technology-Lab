var http=require('http');
var qs=require('querystring');
var name,email,pwd1,pwd2;
var orgpwd="xx21.suganth.xx21";

http.createServer(function(req,res){
    var inpt="";
    req.on('data',function(chunk){
        console.log(chunk);
        inpt += chunk;
        console.log("Data is string "+inpt);
    });
    req.on('end',function(){
        q=qs.parse(inpt);
        console.log(q);
        name=q['name'];
        email=q['email'];
        pwd1=q['pwd1'];
        pwd2=q['pwd2'];

        if(orgpwd==pwd1)
        {
            res.write("Hello "+name+" your mail id is :"+email);
        }
        else
        {
            res.write("Please enter appropriate password");
        }
        
        res.end();
    });
}).listen(8001);
console.log('Server Started');
