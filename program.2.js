const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

function routehandler(request, reply) {
  reply('Hello ' + encodeURIComponent(request.params.name));
}

server.route({
  path: '/{name*}',
  method:'GET',
  handler: routehandler
});

server.start();
