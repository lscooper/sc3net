//var CoffeeQuiz = require("../models/example.js");
//var db = require("../public/js/app");


module.exports = function (app) {
   // app.get("/api/all", function (req, res) {
      //CoffeeQuiz.findAll({}).then(function(results) {
      //res.json(results);
   //   console.log("Something sure has happened here.");
   // });
    //});
    app.get("/", function (req, res) {
      res.render("login");
    });
    app.get("/feed", function (req, res) {
      res.render("feed");
    });
    app.get("/about", function (req, res) {
      res.render("about");
    });
    app.get("/profile", function (req, res) {
      res.render("profile");
    });
  }
