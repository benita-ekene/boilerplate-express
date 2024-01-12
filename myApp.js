let express = require('express');
let app = express();



app.get('/name', (req, res) => {
  const firstname = req.query.firstname;
  const lastname = req.query.lastname;
  const name = `${firstname} ${lastname}`
  res.json({
    name: name
  });
});


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
