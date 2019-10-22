const express = require('express');
const fetch = require("node-fetch");

const PORT = process.env.PORT || 8000 ;
const app = express();

app.get('/search', async function(req, res) {
  const response = await fetch('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc');
  const myJson = await response.json();
  res.send(myJson);
});

app.listen(PORT, function(){
  console.log(`App running on port ${PORT}`);
});
