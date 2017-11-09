var Hapi = require('hapi')

// create new server instance
var server = new Hapi.Server()

// add server’s connection information
server.connection({  
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
})

server.register({  
  register: require('inert')
}, function(err) {
  if (err) throw err

  server.route({  
    method: 'GET',
    path: '/{name*}',
    handler: {
      directory: { 
        path: __dirname
      }
    }
  })
  server.start(function(err) {
    console.log('Server started at: ' + server.info.uri)
  })
})





