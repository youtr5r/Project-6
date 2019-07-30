const express = require('express');

const app = express();

const data = ("./data.json");

app.set("view engine", "pug");

app.use("/static", express.static(path.join(_dirname, "public")));

app.get('/', function (req, res) {
    res.render('index')
  })
  
  app.listen(3000)