const http = require('http');
const fs = require('fs');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('index.html').pipe(res);
    fs.createReadStream('style.scss').pipe(res);
    // res.end('Yo waddup\n');
});

server.listen(port, hostName, () => {
    console.log(`Server is running at http://${hostName}:${port}/`);
});