var connect = require('connect'),
serveStatic = require('serve-static');

var connection = connect();

connection.use(serveStatic("node_modules"));
connection.listen(5000);