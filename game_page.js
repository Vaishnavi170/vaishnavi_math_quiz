player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1 + ":";
document.getElementById("player_2_name").innerHTML = player_2 + ":";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2;