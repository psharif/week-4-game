var wins = 0; 
var losses = 0; 
var totalScore = 0; 

//Let the computer pick a random number between 19-120 
var targetScore = 0;
///Variables of the images used for the game
var images = ["assets/images/blue-crystal.png", "assets/images/green-crystal.png", "assets/images/diamond.png", "assets/images/white-crystal.png" ];

///Starts The Game By Creating Images. And assigning values. 
initialize(); 

//initializes the game 
function initialize(){
    //Let the computer pick a random number between 19-120 
    targetScore = Math.floor(Math.random() * 102) + 19; 
    $("#target-score").text(targetScore);
    //Sets the images with data-crystalvalues 
    for(var i = 0; i < 4; i++){
    	var newCrystal = $("<img>");
    	//Sets attributes to all the images 
    	newCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1); 
    	newCrystal.attr("class", "crystal-image"); 
    	newCrystal.attr("src", images[i]);
    	//Appends the new images to the page. 
    	$("#crystals").append(newCrystal);
    }
}

$(".crystal-image").on("click", function(){
    //totalScore he value for each data value. 
    totalScore += parseInt($(this).attr("data-crystalvalue"));
    $("#total-score").text(totalScore);
    console.log("The total Score is " + totalScore);
    if(totalScore >= targetScore){
    	checkScore(totalScore); 
    }

}); 

///Checks the Current Score 
function checkScore(currentScore){
    if(currentScore == targetScore){
    	wins++; 
    	$("#wins").text(wins); 
    }
    else {
     	losses++;
     	$("#losses").text(losses); 
    }
    resetGame(); 
}

///Resets the values of the game. 
function resetGame(){
    totalScore = 0; 
    //Let the computer pick a random number between 19-120 
    targetScore = Math.floor(Math.random() * 102) + 19; 
    $("#target-score").text(targetScore);
    for(var i = 0; i < 4; i++){
    	//Sets attributes to all the images 
    	$("<img>").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1); 
    }
}