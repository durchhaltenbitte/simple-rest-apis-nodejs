// Starting point 
// Define a server listening on port 3000 in localhost
// Here we create a server for an bookstore website

const hostname = '127.0.0.1';
const port = 3000;

const server = require('./controller.js');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

