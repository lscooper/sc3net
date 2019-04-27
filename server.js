require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
//var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
// var moment = require('moment');
//var request = require('request');
// var nodemailer = require('nodemailer');
//var path = require('path');
//var sequelize = require("./config/connection");


// var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.


//app.use(routes);

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
//sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
//});

module.exports = app;