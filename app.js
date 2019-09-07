var http = require('http');//creates module http now server is creatable with "require" word.
var fs = require('fs');//file system module to read the file html 
var url = require('url');
var path = require('path');
var mysql = require('mysql');// databse module
//app.use(express.static(__dirname + '/public'));
//var dt= require('./mymodule'); //./ means locatedin the same folder 
const hostname = '127.0.0.1';
const port = 3000;

/*const server = http.createServer((req, res) => {  //request and response parameters
  res.statusCode = 200;

  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

 // res.setHeader('Content-Type', 'text/plain');
  //req.write("the current date and time is " + dt.myDateTime());
  //res.end('My server on local host port 3000\n');
  //res.end('My server on local host port 3000\n' + dt.myDateTime());
});   */
 
var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var ext = path.extname(pathname);
        if(ext){
            if(ext === '.css'){
                response.writeHead(200, {'Content-Type': 'text/css'});
            }
            else if(ext === '.js'){
                response.writeHead(200, {'Content-Type': 'text/javascript'});
            }
            response.write(fs.readFileSync(__dirname + pathname, 'utf8'));
        }
        else{
              response.writeHead(200, {'Content-Type': 'text/html'});
               response.write(fs.readFileSync('index.html', 'utf8'));
        }
        response.end();
    }); 


server.listen(port, hostname, () => {//the server object listens on port 8080
  console.log(`Server running at http://${hostname}:${port}/`);
});