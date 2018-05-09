var express = require('express');
var path = require('path');
var http = require('http');

var indexTpl = require('./index');

var app = express();

app.use('/build', express.static(path.join(__dirname, 'build')));

app.use('/', (req, res) => {
  res.send(indexTpl({}))
});

const server = http.createServer(app)
const port = 1234

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
