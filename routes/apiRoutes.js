//var CoffeeQuiz = require("../models/example.js");
// var db = require("../public/js/app");

const nodemailer = require("nodemailer");
module.exports = function (app) {
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


  app.get("/post", function (req, res) {

    
    "use strict";


// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "sc3notification@gmail.com", // generated ethereal user
      pass: "sc3netpass" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"SC3.net Notifications" <sc3notification@gmail.com>', // sender address
    to: "laura.shearer.cooper@gmail.com the.doctor1243@gmail.com", // list of receivers
    subject: "Post made!", // Subject line
    text: "New post.", // plain text body
    html: "<b>New post?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  
}

main().catch(console.error);
res.redirect("feed")
    // db.Post.create(req.body).then(function (dbPost) {
    //     return db.AllPosts.findOneAndUpdate({}, {
    //       $push: {
    //         posts: dbPost._id
    //       }
    //     }, {
    //       new: true
    //     });

    //   })
    //   .then(function (dbAllPosts) {
    //     // If the Library was updated successfully, send it back to the client
    //     console.log(dbAllPosts);
    //     res.json(dbAllPosts);

    //   })
    //   .catch(function (err) {
    //     // If an error occurs, send it back to the client
    //     res.json(err);

    //   });
   
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