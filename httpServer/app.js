var http = require('http');

http.createServer(let = (req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');

// en la sección de headers está la información detallada acerca del response y request headers
// viene información como el tipo de conexión, tipo de contenido, etc