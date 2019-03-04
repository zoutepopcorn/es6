import http from 'http';

console.log('hi');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ES6 world\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');