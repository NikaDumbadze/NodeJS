const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

app.use((req, res, next) => {
  console.log('In the middleware');
  next(); // allow the request to contimiu to next middleware in line
})

app.use((req, res, next) => {
  console.log('In another middleware');
  //...
})

server.listen(3000);
