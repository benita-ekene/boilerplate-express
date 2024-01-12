let express = require('express');
let app = express();
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))


// app.route('/name').get((req, res) => {
//   var first = req.query.first;
//   var last = req.query.last;
//   var jsonObj = {name: first + ' ' + last};
//   res.send(jsonObj);
// }).post();


app.route('/name').get((req, res) => {
  const first = req.query.first;
  const last = req.query.last;
  const jsonObj = {name: first + ' ' + last};
  res.send(jsonObj);
}).post();

console.log("Hello World")

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);


app.get("/:word/echo", (req, res) => {
  //using destructuring assignment to extract the word property from the req.params object.
  const { word } = req.params;// is the same as "const word = req.params.word"
  res.json({
    echo: word
  });
});

// app.get('/name', (req, res) => {
//   const { firstname, lastname } = req.query;
//   res.send(` ${firstname} ${lastname}`);
// });

// // Use middleware to parse query parameters
// app.use(express.urlencoded({ extended: true }));





 module.exports = app;
