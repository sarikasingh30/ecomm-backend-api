const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
require("dotenv").config()
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = process.env.PORT||8080

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
