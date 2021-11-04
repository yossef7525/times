const express = require('express');
const serveStatic = require('serve-static')
const path = require('path')
const app = express();
var bodyParser = require('body-parser')
const routes = require('./server/routers')
const axios = require('axios'); 
const sql = require("./server/db.js");
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./server/passport');



app.use('/api', routes)

//OAUHT google
app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

app.get("/failed", (req, res) => {
  res.send("Failed")
})
app.get("/success", (req, res) => {
  addrow(req.user)
  res.redirect('/')
})

app.get('/google',
passport.authenticate('google', {
  scope:
  ['email', 'profile']
}
));

app.get('/google/callback',
passport.authenticate('google', {
  failureRedirect: '/failed',
}),
function (req, res) {
  res.redirect('/success')
  
}
);
app.use('/', serveStatic(path.join(__dirname, '/dist/angular-router')))
app.use(bodyParser.urlencoded({  parameterLimit: 200000,
  limit: '50mb',
  extended: true }))
app.use(bodyParser.json({limit: '100mb'}))


app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/angular-router/index.html'))
})


const port = process.env.PORT || 3000
app.listen(port)
console.log(`app is listening on port: ${port}`)

module.exports =  app

 async function addrow(user) {
   const firstname = user.given_name, lastname = user.family_name, image = user.picture, email= user.email;

  sql.query(`select email from users where email='${email}'`, async function (error, results, fields) {
    if (error) throw error;
   if(results.length <1){
  var str = `INSERT INTO users (id, firstname, lastname, image, email) VALUES (${results.length+1}, "${firstname}","${lastname}","${image}", "${email}")`
       console.log(str);
  sql.query(str,async function (error, results, fields) {
   if (error) throw error;
   
 })
}
 else {
  console.log({message:'your email is find!! please enter a new email'})
 }

   })}