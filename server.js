//set required packages
var express = require('express');
var bodyParser = require('body-parser');

//set the port default
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

//static folder for CSS


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");

app.use(routes);

//Setting up the Sequelize connection to the database and starting the Express App.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT  " + PORT);
  });
});
