var zrpc=require("zerorpc");

vae client=new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242);

client.invoke("hello","RPC",function(error,res,more) {
	cosole.log(res);
});