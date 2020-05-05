'use strict'

const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.disable("x-powered-by");

// public ディレクトリーに入っているファイルをロード
// app.use(express.static('public'));

app.use('/', require('./routes/index.js'));
app.use('/city', require('./routes/city.js'));

app.use((req, res, next) => {
  let data = {
    method: req.method,
    protocal: req.protocol,
    version: req.httpVersion,
    url: req.url
  };
  res.status(404);
  // ajaxの場合
  if (req.xhr) {
    res.json(data);
  } else {
    res.render("./404.ejs", { data });
  }
});

app.use((err, req, res, next) => {
  let data = {
    method: req.method,
    protocal: req.protocol,
    version: req.httpVersion,
    url: req.url,
    error: {
      name: err.name,
      message: err.message,
      stack: err.stack
    }
  };
  res.status(500);
  // ajaxの場合
  if (req.xhr) {
    res.json(data);
  } else {
    res.render("./500.ejs", { data });
  }
});


app.listen(3000, () => {
  console.log('Running on 3000 port...');
});