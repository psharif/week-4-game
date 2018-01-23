var wins = 0; 
var losses = 0; 
var totalScore = 0; 

//Let the computer pick a random number between 19-120 
var targetScore = 0;

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
    	newCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    	//Appends the new images to the page. 
    	$("#crystals").append(newCrystal);
    }
}

initialize(); 

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