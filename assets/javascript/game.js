var wins = 0; 
var losses = 0; 
var totalScore = 0; 
var gameOver = false; 

//Let the computer pick a random number between 19-120 
var targetScore = 0;
///Variables of the images used for the game
var images = ["assets/images/blue-crystal.png", "assets/images/green-crystal.png", "assets/images/diamond.png", "assets/images/white-crystal.png" ];

///Create Array of Four Randomly Generated Numbers. 
///The numbers will not be the same. 
var crystalValues = []; 

///Starts The Game By Creating Images. And assigning values. 
initialize(); 

function createCrystalValues(){
    while(crystalValues.length < 4) {
    var random = Math.floor(Math.random() * 12) + 1; 
    if(!crystalValues.includes(random)){
        crystalValues.push(random);
    }
}
}
//initializes the game 
function initialize(){
    //Let the computer pick a random number between 19-120 
    targetScore = Math.floor(Math.random() * 102) + 19; 
    $("#target-score").text(targetScore);
    //Creates the array with CrystalValues used for data-crystalvalues.  
    createCrystalValues(); 
    //Sets the images with data-crystalvalues 
    for(var i = 0; i < 4; i++){
        var newDiv = $("<div>")
    	var newCrystal = $("<img>");

        ///Sets the class for the div 
        newDiv.attr("class", "image-div")
    	//Sets attributes to all the images 
    	newCrystal.attr("data-crystalvalue", crystalValues[i]);  
    	newCrystal.attr("class", "crystal-image"); 
    	newCrystal.attr("src", images[i]);
    	//Appends the new images to the page. 
        newDiv.append(newCrystal); 
    	$("#crystals").append(newDiv);
    }
}

$(".crystal-image").on("click", function(){
    if (gameOver){return;}
    //totalScore he value for each data value. 
    totalScore += parseInt($(this).attr("data-crystalvalue"));
    $("#total-score").text(totalScore);
    if(totalScore >= targetScore){
    	checkScore(totalScore); 
    }

}); 

///Checks the Current Score 
function checkScore(currentScore){
    if(currentScore == targetScore){
    	wins++; 
    	$("#wins").text(wins); 
        gameOver = true; 
    }
    else {
     	losses++;
     	$("#losses").text(losses); 
        gameOver =true; 
    }
    //resetGame(); 
}

$("#reset-button").on("click", function(){
    resetGame();
}); 

///Resets the values of the game. 
function resetGame(){
    totalScore = 0; 
    $("#total-score").text(totalScore);
    //Let the computer pick a random number between 19-120 
    targetScore = Math.floor(Math.random() * 102) + 19; 
    $("#target-score").text(targetScore);
    createCrystalValues(); 
    for(var i = 0; i < 4; i++){
    	//Sets attributes to all the images 
    	$("<img>").attr("data-crystalvalue", crystalValues[i]); 
    }
    gameOver = false; 
}