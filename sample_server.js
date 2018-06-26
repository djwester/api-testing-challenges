const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


function isAuthorized(req){
  if (req.url == '/profile'){
    return false;
  }
  return true;
}
server.use(middlewares)
server.use((req, res, next) => {
  if (isAuthorized(req)) { // add your authorization logic here
    console.log(req.url)
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
 })
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})