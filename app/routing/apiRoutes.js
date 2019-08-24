//dependency
const allFriends = require("../data/friends.js");

module.exports = function (app) {

  //GET route to api/friends to display all friends in json format
  app.get("/api/friends", function (req, res) {
    return res.json(allFriends);
  });

  //POST route to add incoming survey result to allFriends array
  app.post("/api/friends", function (req, res) {
    let newFriend = req.body;
    allFriends.push(newFriend);

    res.send(newFriend);
  });
};