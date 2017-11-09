const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ 
  port: Number(process.argv[2] || 8080), 
  host: 'localhost' 
});

server.register(require('inert'), err => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/{name*}',
    handler: function (request, reply) {
        reply.file('./index.html');
    }
  });
});

server.start();
