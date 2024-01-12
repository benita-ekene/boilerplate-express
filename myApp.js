let express = require('express');
let app = express();


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

app.get("/name", (req, res) => {
 const firstname = req.query.firstname
 const lastname = req.query.lastname
  res.json({
     name: firstname, lastname
  });
});



 module.exports = app;
