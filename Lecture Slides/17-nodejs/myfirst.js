var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res){

    let q = url.parse(req.url, true).query;
    let pathname = url.parse(req.url, true).pathname;
    console.log(pathname);
    switch(pathname)
    {
        case '/':
            console.log("handling homepage");
            fs.readFile('./index.html', function(err, data) {
                if(err) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end("404 Not Found");
                }
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(data);
                return res.end();
            });
            break;
        case '/submitLogin':
            console.log(q);
            break;
        case '/submitCreate':
            let account = q.username + "," + q.password + '/n';
            fs.appendFile('logins.txt', account, function(err) {
                if(err)
                    throw err;
                console.log('account created.');
            } );
            console.log(q);
            break;
        default:
            fs.readFile('.' + pathname + ".html", function(err, data){
                if(err) {
                    res.writeHead(404, {'Content-Type': 'text.html'});
                    return res.end("404 Not Found");
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
    }
}).listen(8080);