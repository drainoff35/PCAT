const express = require('express');
const ejs = require('ejs');
const app = express();
//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

const path = require('path');
const myLogger = (req, res, next) => {
  console.log('Middleware Log 1');
  next();
};
const myLogger2 = (req, res, next) => {
  console.log('Middleware Log 2');
  next();
};

app.use(myLogger);
app.use(myLogger2);

//Routes
app.get('/', (req, res) => {
  
  res.render('index');
});
app.get('/about', (req, res) => {
  
  res.render('about');
});
app.get('/add', (req, res) => {
  
  res.render('add');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
