const http= require('http');
url= require('url');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://suganthkrishna2003:mongopassword@cluster0.ygz3av6.mongodb.net/?retryWrites=true&w=majority";

var qs=require('querystring');
var uid,pwd,uid1,pwd1;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



http.createServer((req,res)=>
{
    var path=url.parse(req.url).pathName;
    console.log(path);
    console.log(req.url);
    var qs= url.parse(req.url,true).query;
    console.log(qs);
    
    uid=qs.uid;
    pwd=qs.pwd;

    console.log("Got data from user");

   try {
	client.connect();
        const db = client.db('predictions');
        const collection = db.collection('userdata');
 
        console.log("Server connected");
        
        const findOneQuery = { name: uid };
        const findOneResult = collection.findOne(findOneQuery);
	

	console.log(findOneResult);

        if (findOneResult === null) { uid1=""; }
        else { 
		const obj = JSON.parse(JSON.stringify(findOneResult));
		uid1=obj.name;
		pwd1=obj.pass;
	 }
     }

    finally {
    
    setTimeout(() => {client.close()}, 1500);
    }



    
    if(uid!=uid1)
    {
	res.writeHead(301, { Location: "http://localhost:8080/usernotfound.html" });
	
    }
    else
    {
        if(pwd==pwd1)
	{
            res.writeHead(301, { Location: "http://localhost:8080/mainindex.html" });
	}
        else {
             res.writeHead(301, { Location: "http://localhost:8080/incorrectpwd.html" });
        }
     }

    res.end();
    
}).listen(8003);
console.log('Server Started');


       


       
	
