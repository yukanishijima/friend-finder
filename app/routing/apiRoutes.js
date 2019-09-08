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

    // add user input to the allFriends's array
    allFriends.push(newFriend);

    // compare scores and return the best match!
    let difference = [];

    for (let i = 0; i < allFriends.length - 1; i++) {
      let scoreToCompare = 0;
      for (let j = 0; j < allFriends[i].scores.length; j++) {
        scoreToCompare += Math.abs(allFriends[i].scores[j] - newFriend.scores[j]);
      };
      difference.push(scoreToCompare);
      // test  
      // console.log(`difference: ${difference[i]}, user: ${allFriends[i].name}`);
    };

    const lowest = Math.min.apply(null, difference);
    const matchIndex = difference.indexOf(lowest);
    match = allFriends[matchIndex];

    return res.send(match);

  });

};