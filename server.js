var http = require('http')
var util = require('util')
var url = require('url')
var os = require('os')

var server = http.createServer()
server.on('request',(req,res)=>{
    var requrl = url.parse(req.url,true)
    if (requrl.pathname === '/'){
        res.writehead(200,{'Content-Type':'text/html'})
        res.end(
            `<html><head><title> OS info </title></head>
            <body><h1>Lets get to it!</h1>
            <p><a href='/osinfo'>Click here for info</a></p></body></html>`)
    }else if(requrl.pathname === "/osinfo"){
        res.writehead(200,{'Content-Type':'text/html'})
        res.end(
            `
            <html><head><title>Information about the Operating system</title></head>
            <body><h1> Informations about the Operating System</h1>
            <table>
            <tr><th>Catalog TMP</th><td>${os.tmpdir()}</td></tr>
            <tr><th>Host name</th></tr>${os.hostname()}</td></tr>
            <tr><th>System Type</th></tr>${os.type()}</td></th>
            `
        )
    }else{
    	res.writehead(404, {'Content-Type': 'text-plain'})
    	res.end("something went wrong")
    }
})
server.listen(5000)
console.log('server is runing on the port 5000')