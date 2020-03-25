const http = require('http');

const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Everyone,This assignment is about learning server side programming\n');
  res.end('Node.Js is mainly used to develop server side');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});