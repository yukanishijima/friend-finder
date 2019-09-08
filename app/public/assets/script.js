let userName = "";
let userPhoto = "";
let userScores = [];


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


function displayMatch(match) {
  $("#user-name").html(`${userName}'s best match is...`);
  $("#match-name").html(`<p>${match.name}</p>`);

  //display the photo if there is (because link to photo field is optional!)
  if (match.photo == "") {
    $("#match-name").append(`<div><i class="far fa-smile my-icon"></i></div>`);
  } else {
    $("#match-name").append(`<img src="${match.photo}" class="img-fluid my-image">`);
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
    $.post(currentURL + "/api/friends", newFriend)
      .then(function (match) {
        // console.log(match);
        displayMatch(match);
      });

    //clear all fields
    $("input[type='text']").val("");
    $("input[type='radio']").attr("checked", false);

  };
});

