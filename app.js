const http = require('http')
const { sum } = require('./functions.js')

const server = http.createServer( (req, res)  => res.end("message for all the world") ).listen(3000)

console.log(sum(2, 3))