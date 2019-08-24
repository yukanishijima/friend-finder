//dependency
const path = require("path");

module.exports = function (app) {

  //GET route to servey.html
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //default catch-all GET route to home.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  app.get('*', function (req, res) {
    res.status(400).send('404: Page not Found');
  });
};