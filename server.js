var connectAng = require('connect'),
serveStatic = require('serve-static');

var ang = connectAng();

ang.use(serveStatic("node_modules/angular"));
ang.listen(5000);

var connectVue = require('connect'),
serveStatic = require('serve-static');

var vue = connectVue();

vue.use(serveStatic("node_modules/vue"));
vue.listen(5001);