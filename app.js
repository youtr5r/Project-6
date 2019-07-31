/*
* the express variable gives access to the express API
* require express and data.json
*/
const express = require('express');
//new instance of express. function declaration
const app = express();

const data = require('./data.json');
//set up pug to view engine
app.set('view engine', 'pug');
//set route to index page using render
app.get('/', (req, res) =>{
    res.render('index', {projects:data.projects}); 
});
//set the rout to about page using render
app.get('/about', (req, res) =>{
     res.render('about'); 
});
//set route to project
app.get('/projects/:id', (req, res) =>{
    res.render('project', {
        project: data.projects[req.params.id - 1],
        id: req.params.id
    }); 
});
app.use('/static', express.static('public'));

//catching error using next to forward error to error handler
app.use((req, res, next) => {
    const err=new Error("This page does not exist");
    err.status=404;
    next(err);
 });

// set route to error page using rendor
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error', err);
    console.log("This page does not exist");
      });

//app will listen on port 3000 - localhost:3000
 app.listen(3000, () => {
 console.log('Listening on port 3000')});