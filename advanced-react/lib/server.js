const express = require('express');
const config = require('./config');

// express is a minimal node.js web app framework to develop
// web and mobile apps. Core features include
// 1. allows to set up a middlewares to responde to HTTP requests
// 2. Defines a routing table which is used to perfrom different actions
// based on HTTP method and urls
// 3. Allows to dynamically render HTML pages based on passing arguments/
// to templates
const app = express();

// public directory is statically served; anything we put here will be
// served directly
app.use(express.static('public'));

// tell express we are using ejs as the template language
app.set('view engine', 'ejs');

// this is the / 'slash' endpoint
app.get('/', (req, res) => {
  // rendering the index template under 'views' folder
  // must be a ejs template that contains a standard HTML template
  res.render('index', {answer: 42});
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
