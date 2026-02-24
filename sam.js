// 1. Get the two different scores from the user
var team1 = prompt("What is the score for Team 1?");
var team2 = prompt("What is the score for Team 2?");

// 2. If the first team is less than the second
if (team1 < team2) {
    alert("better to keep trying");
} 
// 3. If the scores are equal
else if (team1 == team2) {
    alert("that is a draw");
} 
// 4. Otherwise (if Team 1 won)
else {
    alert("congratulations on winning");
} 
