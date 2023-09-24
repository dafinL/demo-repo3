const http = require('http')
const express = require('express')
const { sum } = require('./functions.js')

//const server = http.createServer( (req, res)  => res.end("message for all the world") ).listen(3000)

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

console.log(sum(2, 3))