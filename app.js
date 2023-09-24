const http = require('http')
const express = require('express')
const fs = require('fs')
const { sum } = require('./functions.js')

//const server = http.createServer( (req, res)  => res.end("message for all the world") ).listen(3000)

const app = express()

app.get('/',  (req, res) => {
  res.send('Hello World')
})

app.listen(3000)

const fileName = "a.txt"
fs.readFile(fileName, (err, data) => {
    if(err)
        console.log(err)
    console.log(data.toString())
})

console.log(sum(2, 3))