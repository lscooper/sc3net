// var db = require("../models");
//var CoffeeQuiz = require("../models/example.js");
module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   CoffeeQuiz.findAll({}).then(function(dbExamples) {
  //     res.render("login", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  app.get("/feed", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/views/survey.handlebars"))
    res.render("feed");
  });

  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
