const path = require('path');
const nodemailer = require("nodemailer");
var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/Users.js");
var db = require("../models/Post.js");




module.exports = function (app) {
 // app.use('/api/auth', auth);
  app.get("/", function (req, res) {
    res.render("login");
  });
  app.get("/feed", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/feed.html"));
  });
  app.get("/about", function (req, res) {
      res.render("about");
  });
  app.get("/profile", function (req, res) {
    res.render("profile");
  });

  app.get("/profileimgchange", function (req, res) {
    res.render("about");
  });

  app.post('/loginauth', function(req, res) {
    console.log("Logging in...");
    User.findOne({
      username: req.body.username
    }, function(err, user) {
      if (err) throw err;
  
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({success: true, token: 'JWT ' + token});
            res.redirect("/feed");
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
    
  });


  app.get("/loginauth", function(req, res){
    res.redirect("/feed");
  });


  app.post("/post", function (req, res) {

    "use strict";

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "sc3notification@gmail.com", 
          pass: "sc3netpass" 
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"SC3.net Notifications" <sc3notification@gmail.com>', // sender address
        to: "laura.shearer.cooper@gmail.com, the.doctor1243@gmail.com", // list of receivers --> should get updated to pull from database once that's an option

        subject: "A new post has been made!", // Subject line
        text: "Someone has made a new post on sc3net. Go read it!", // plain text body
        html: "Someone has made a new post on sc3net. <a href = 'sc3.net'>Go read it!</a>" // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    }

    main().catch(console.error);
    //res.redirect(path.join(__dirname + '/public/feed.html'));
  //   res.redirect("/feed")
    db.Post.create(req.body).then(function (dbPost) {
         return db.AllPosts.findOneAndUpdate({}, {
           $push: {
             posts: dbPost._id
           }
         }, {
           new: true
         });

       })
       .then(function (dbAllPosts) {
         // If the Library was updated successfully, send it back to the client
         console.log(dbAllPosts);
       res.json(dbAllPosts);
       res.redirect("/feed");

       })
      .catch(function (err) {
        // If an error occurs, send it back to the client
         res.json(err);
         res.redirect("/feed");

    });
  
 });

   app.get("/fetch", function (req, res) {
     // Using our Library model, "find" every library in our db
    db.AllPosts.find({})
       .then(function (dbAllPosts) {
        // If any Libraries are found, send them to the client
         res.json(dbAllPosts);
       })
       .catch(function (err) {
         // If an error occurs, send it back to the client
         res.json(err);
       });

   });
 
}



