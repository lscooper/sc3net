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
var logger = require("morgan");
var mongoose = require("mongoose");

// var db = require("./models/AllPosts");
// var db = require("./models/Post");
// var db = require("./models/Users");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('routes/public'))

app.use(logger("dev"));
mongoose.connect("mongodb://localhost/Posts", {
  useNewUrlParser: true
});

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
//sequelize.sync(syncOptions).then(function() {
app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
//});

module.exports = app;