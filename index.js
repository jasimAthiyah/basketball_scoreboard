let homeScore = document.getElementById("score_home");
let guestScore = document.getElementById("score_guest");
let home_score = 0;
let guest_score = 0;

// home scores
function add1_home() {
  home_score = home_score + 1;
  homeScore.innerText = home_score;
}

function add2_home() {
  home_score = home_score + 2;
  homeScore.innerText = home_score;
}

function add3_home() {
  home_score = home_score + 3;
  homeScore.innerText = home_score;
}

// guest scores
function add1_guest() {
  guest_score = guest_score + 1;
  guestScore.innerText = guest_score;
}

function add2_guest() {
  guest_score = guest_score + 2;
  guestScore.innerText = guest_score;
}

function add3_guest() {
  guest_score = guest_score + 3;
  guestScore.innerText = guest_score;
}

function restart() {
  guestScore.innerText = 0;
  homeScore.innerText = 0;
  guest_score = 0;
  home_score = 0;
}
