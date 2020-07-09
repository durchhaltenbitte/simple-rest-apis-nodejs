// Create a server and its GET endpoints
/* req = {
    method: 'GET'/ 'POST' ...,
    url: 'http://localhost:3000/api/v1/query...?para1=value1&para2=value2...'
}
*/
/* reqUrl = {
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

const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    var service = require('./service.js');
    const urlObj = url.parse(req.url, true);
    // GET endpoint
    if (urlObj.pathname == '/api/v1/query' && req.method == 'GET') {
        console.log(req.method + " request to endpoint: " + urlObj.pathname);
        service.retrieveRequest(req, res);

    // POST endpoint
    } else if (urlObj.pathname == '/api/v1/auth' && req.method == 'POST') {
        console.log(req.method + " request to endpoint: " + urlObj.pathname);
        service.authRequest(req, res);

    // Invalid endpoint
    }else {
        console.log("Invalid " + req.method + " request to endpoint: " + urlObj.pathname);
        service.invalidRequest(req, res);
    }
});
