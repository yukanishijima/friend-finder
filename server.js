//dependencies
const express = require("express");

//set up the express app
const app = express();
const PORT = process.env.PORT || 3000;

//set up middleware to serve static files
app.use(express.static(__dirname + "/app/public"));
//same as -> app.use(express.static("./app/public"));

//set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes to display json data
require("./app/routing/apiRoutes.js")(app);
//same as -> require(__dirname + "/app/routing/apiRoutes.js")(app);

//Routes to display web page
require("./app/routing/htmlRoutes.js")(app);
//same as -> require(__dirname + "/app/routing/htmlRoutes.js")(app);

//start the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

