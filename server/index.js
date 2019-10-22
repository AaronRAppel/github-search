const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const cache = require('memory-cache');

const PORT = process.env.PORT || 8000 ;
const app = express();
app.use(cors());

let memCache = new cache.Cache();
let cacheMiddleware = (duration) => {
  return (req, res, next) => {
    let key =  '__express__' + req.originalUrl || req.url;
    let cacheContent = memCache.get(key);
    if (cacheContent) {
      console.log('Getting Cached Content');
      res.send(cacheContent);
    }
    else {
      console.log('Getting Fresh Content');
      res.sendResponse = res.send;
      res.send = (body) => {
        memCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  }
};

app.get('/search', cacheMiddleware(30), async function(req, res) {
  const { text, sortBy } = req.query;
  const response = await fetch(`https://api.github.com/search/repositories?q=${text}+&sort=${sortBy}`);
  const myJson = await response.json();
  res.send(myJson);
});

app.listen(PORT, function(){
  console.log(`App running on port ${PORT}`);
});
