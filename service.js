// API logic
/* req = {
    method: 'GET'/ 'POST' ...,
    url: 'http://localhost:3000/api/v1/query...?para1=value1&para2=value2...'
}
*/
/* urlObj = {
    origin: 'http://localhost:3000',
    host: 'localhost:3000',
    hostname: 'localhost',
    port: '3000',
    pathname: /api/v1/query...
    query: {
        para1: value1, 
        para2: value2
        ...
    }
}
*/
const url = require('url');

exports.retrieveRequest= function(req, res) {
    const urlObj = url.parse(req.url, true);
    const queryObj = urlObj.query;
    var book_name = queryObj.bookname;
    var author = queryObj.author;
    var response = {
        "status" : "ok",
        "data" : {
            "name" : book_name,
            "author" : author
        }
    };
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response))
}

exports.authRequest = function(req, res) {
    var body = "";
    req.on('data', function(chunk) {
        body += chunk
    });

    req.on('end', function(){
        var bodyObj = JSON.parse(body);
        var response = {
            "credentials" : {
                "username": bodyObj.admin,
                "password" : bodyObj.passw0rd
            }
        }
        res.statusCode = 200;
        res.setHeader = ('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    });
}

exports.invalidRequest = function(req, res) {
    const urlObj = url.parse(req.url, true)
    res.statusCode = 404;
    res.setHeader = ('Content-Type', 'text/plain');
    res.end(`Invalid Service Endpoint: ${urlObj.pathname} or endpoint does not provide resource for ${req.method} method`);
}