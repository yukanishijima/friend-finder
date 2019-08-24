let userName = "";
let userPhoto = "";
let userScores = [];
let matchName = "";
let matchPhoto = "";

function validateForm() {
  let score = "";
  for (let i = 1; i < 11; i++) {
    score = $(`#q${i} input[type='radio']:checked`).val();
  }

  if ($("#yourName").val() == "") {
    alert("Please enter your name!");
  } else if (typeof score == "undefined") {
    alert("Please answer all the questions!");
  } else {
    return true;
  }
};

function compareScores(friends, newFriend) {

  let difference = [];

  for (let i = 0; i < friends.length - 1; i++) {
    let scoreToCompare = 0;
    for (let j = 0; j < friends[i].scores.length; j++) {
      scoreToCompare += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
    };
    difference.push(scoreToCompare);
    // console.log(`difference: ${difference[i]}, user: ${friends[i].name}`);
  };

  const lowest = Math.min.apply(null, difference);
  const matchIndex = difference.indexOf(lowest);
  const match = friends[matchIndex];
  matchName = match.name;
  matchPhoto = match.photo;
  // console.log(match);
};

function displayMatch() {
  $("#user-name").html(`${userName}'s best match!`);
  $("#match-name").html(`<p>${matchName}</p>`);

  //display the photo if there is (because link to photo field is optional!)
  if (matchPhoto == "") {
    $("#match-name").append(`<div><i class="far fa-smile my-icon"></i></div>`);
  } else {
    $("#match-name").append(`<img src="${matchPhoto}" class="img-fluid my-image">`);
  }

  //show the modal window
  $("#resultModal").modal("show");
};



$("#submit").on("click", function (event) {
  event.preventDefault();

  if (validateForm()) {

    userName = $("#yourName").val();
    userPhoto = $("#yourPhoto").val();

    userScores = [];
    for (let i = 1; i < 11; i++) {
      let score = $(`#q${i} input[type='radio']:checked`).val();
      userScores.push(score);
    }

    let newFriend = {
      name: userName,
      photo: userPhoto,
      scores: userScores
    };

    let currentURL = window.location.origin;
    $.post(currentURL + "/api/friends", newFriend);

    $.get(currentURL + "/api/friends")
      .then(function (data) {
        console.log(data);
        compareScores(data, newFriend);
        displayMatch();
      });

    //clear all fields
    $("input[type='text']").val("");
    $("input[type='radio']").attr("checked", false);

  };
});

