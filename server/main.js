// NOTE this is essentially the main portion of our server

import express from 'express'
import bp from 'body-parser'
let port = 3000

//NOTE next we need to create our server
let server = express()


//NOTE we are giving our server the bodyparser middleware. This middleware gives use the ability to pass information into our server as a request and parse it from JSON back into objects.
server.use(bp.json())

//NOTE Everything above this line always stays the same

//NOTE next we want to register all our routes(doorways that can be accessed in our app)

//NOTE we have to import access to our controllers
import CatsController from './controllers/CatsController'
import DogsController from './controllers/DogsController'

//NOTE remember the forward slash at the start of your path!
server.use('/api/cats', new CatsController().router)
server.use('/api/dogs', new DogsController().router)



//NOTE Everything below this line always stays the same

server.use('*', (req, res, next) => {
  res.status(404).send("Route not found")
})

server.listen(port, () => { console.log(`Your server is running on port: ${port}, you better go catch it!`) })