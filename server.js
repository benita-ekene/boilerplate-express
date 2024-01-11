/******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/
require('dotenv').config()
const bGround = require('fcc-express-bground');
const myApp = require('./myApp');
const express = require('express');

const app = express();

if (!process.env.DISABLE_XORIGIN) {
  app.use((req, res, next) => {
    const allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
    const origin = req.headers.origin || '*';
    if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
         console.log(origin);
         res.setHeader('Access-Control-Allow-Origin', origin);
         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });
}

 

app.use( (req, res, next) => {
  let logger = req.method + " " + req.path + " " + " - " + " " + req.ip;
  console.log(logger)
  next()
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({time: req.time})
})

app.get("/json", (req, res) => {
  // let message = req.method + " " + req.path + " - " + req.ip;
  res.json('Get Method')
  // console.log(message)
})



app.get("/", (req, res) => {
  // res.send('Hello Express')
  res.sendFile(__dirname +'/views/index.html')
})

express.static(__dirname +'/public')
app.use('/public',  (req, res) => {
  res.sendFile(__dirname +'/public/style.css')
})

app.get('/json', (req, res) => {
    const message = process.env.MESSAGE_STYLE === 'uppercase' ? 'HELLO JSON' : 'Hello json';
    res.json({ message });
});


const port = process.env.PORT || 3000;
bGround.setupBackgroundApp(app, myApp, __dirname).listen(port, () => {
  bGround.log(`Node is listening on port ${port}...`);
});

/******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/

