
module.exports = function(app) {
  //app.use('/api/auth', auth);
  app.get("/feed", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/feed.html'));
   // res.render("feed");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
