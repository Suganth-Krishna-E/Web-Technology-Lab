const http= require('http');
url= require('url');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://suganthkrishna2003:mongopassword@cluster0.ygz3av6.mongodb.net/?retryWrites=true&w=majority";

var qs=require('querystring');
var uname,mid,pass,mobile,addr,q;


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
    
    uname=qs.name;
    mid=qs.email;	
    pass=qs.pwd1;
    mobile=qs.mob;
    addr=qs.addr;
    
	console.log("Insert called");
	insert(uname,mid,pass,mobile,addr);
    
    res.writeHead(301, { Location: "http://localhost:8080/Registered.html" });

    res.end();
    
}).listen(8001);
console.log('Server Started');

async function insert(uname,mid,pass,mobile,addr) {
  try {
    
	client.connect();
    
   const db = client.db('predictions');
    const collection = db.collection('userdata');
 
    console.log("Server connected");

    datadoc = {
  "name": uname,
  "mid": mid,
  "pass": pass,
  "mobile":mobile,
  "addr":addr
    }	

    
    const first = await collection.insertOne(datadoc);
    
    console.log("Entry Inserted");


  } finally {
    
    setTimeout(() => {client.close()}, 1500);
  }
}
