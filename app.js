// app.js
const express = require('express');

const app = express();
const SERVER_PORT = process.env.PORT || 3000;
const NAME = process.env.NAME || "Chaitali";


// Serve an HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

app.get('/product', (req, res) => {
    res.sendFile(__dirname + '/views/product.html');
  });
  
  // Start the server
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
    console.log(`Name: ${NAME}`)
  });