var connect = require('connect'),
serveStatic = require('serve-static');

var angular = connect();
angular.use(serveStatic("node_modules/angular"));
angular.listen(5000);

var vue = connect();
vue.use(serveStatic("node_modules/vue"));
vue.listen(5001);