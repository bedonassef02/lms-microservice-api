const http = require('http');
const proxy = require('./proxy');

const server = http.createServer((req, res) => {
 proxy(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
 console.log(`Proxy server running on port ${PORT}`);
});
