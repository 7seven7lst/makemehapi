const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});


let myHandler = (request, reply) => {
  reply('Hello hapi');
};

let routes = [{
  path : '/',
  method: 'GET', 
  handler: myHandler,
}];

server.route(routes);

server.start(()=>{
  console.log(`Server is running at : ${server.info.uri}`);
})
