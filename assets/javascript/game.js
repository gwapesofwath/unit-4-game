
$("document").ready(function() {

    var randomNumber;
    var wins = 0;
    var losses = 0;



//start game function
var startGame = function () {
    $("#crystalRow").empty();


//array to hold the crystal images
var crystalImages = [

    'assets/images/untitled-1.png',
    'assets/images/untitled-2.png',
    'assets/images/untitled-3.png',
    'assets/images/untitled-4.png'
];

//generate a random number 
randomNumber = Math.floor(Math.random() * 100) + 19;

//display the random number on the screen
$("#randNumber").text("Match this random number: " + randomNumber);

//generate crystal images and assign them a random value
for (var i = 0; i < crystalImages.length; i++) {
    randCrystalNum = Math.floor(Math.random() * 12) + 1;

    var crystal = $("<img>");
    $(crystal).attr("src", crystalImages[i]);
    $(crystal).addClass("crystal-image");
    $(crystal).attr("data-crystalNum", randCrystalNum);

    $("#crystalRow").append(crystal);

}

}

startGame();
$("#crystalRow").on("click", ".crystal-image", function(){
randCrystalNum+= parseInt($(this).attr("data-crystalNum"));
$("#yourScore").text("Your Total Score is: " + randCrystalNum);


    if (randCrystalNum === randomNumber){
        $("#winAlert").text("You're a winner");
        wins++;
        $("#gameWins").text("Wins: " + wins);
        resetGame();
        
    }
    else if (randCrystalNum > randomNumber){
        $("#winAlert").text("You're a loser");
        losses++;
        $("#gameLosses").text("Losses: " + losses);
        resetGame();
        
    }
    })


var resetGame = function(){
    randomNumber = 0;
    randCrystalNum = 0;
    $("#randNumber").text("Match this random Number: ");
    $("#yourScore").text("Your total Score is: ");
    startGame();

}
})



//update total score html

//if user wins
    //increment wins
    //update wins html
    //restart game
//else if user loses
    //increment losses
    //updates losses html
    //restart game




//start the game 


//decide whether the user has won or lost and add the appropriate score to the wins or losses section

//reset the game


