/*Generate a random number between 19 to 120 and display it in the dispRandomNo area of the page
Assign each crystal a random number. Listen for a click. When a user clicks on a crystal add it to the total score and display.
If the total score is equal to the random number, it's a win. If the total score is greater than the random number the uer loses. When the user wins or loses, the game resets. */

// Define variables I need to track; crystals, random number, total score, wins, losses.



var crystalBtns = $(".crystVal"); //for now there are 4 crystals. Saving this allows me flexibility in case I add more crystals in future.

var dispRandomNo = generateRandom(); // this is the random number that is generated. It should range between 19 to 120.

var crystalArr = []; //This is the array that will store the 4 random numbers that will help determine the value of each crystalBtn.

var totalScore = 0;
var wins = 0;
var losses = 0;

//Call functions.

/*resetGame(); //Empty all arrays and reset all values. Wins and losses are reset when the user refreshes the browser.*/





generateRandom(); //Generate random number between 19 to 120.
updateContent(); //Update dynamic content. Random Number; Wins; Losses, total score.
crystalValues(); //Generate an array of random numbers from  1 to 12. */
assignCrystalsvalue(); //Assign each crystal a random value between 1 to 12. */




// Define Functions



function generateRandom(){

    var min=19; 
    var max=120;  
    dispRandomNo = Math.floor(Math.random() * (+max - +min)) + +min; 
    return dispRandomNo;
    console.log("Random Number Generated : " + dispRandomNo ); 

} //End of generateRandom


function crystalValues() {
    
    for (var i=1;i<=crystalBtns.length;i++) {
         var random = Math.floor(Math.random() * 12) + 1;
            crystalArr.push(random); 
    }
    console.log(crystalArr.length);
    return crystalArr;
} //end of crystalValues

function assignCrystalsvalue() {
   
        // loop through crystals
       
            $("#crystVal1").attr("value", Math.floor(Math.random() * 12) + 1);
            $("#crystVal2").attr("value", Math.floor(Math.random() * 12) + 1);
            $("#crystVal3").attr("value", Math.floor(Math.random() * 12) + 1);
            $("#crystVal4").attr("value", Math.floor(Math.random() * 12) + 1);
  
} //End of assignCrystalsvalue

/*function assignValfromArr() {
    //crystalArr has 4 random numbers.
    
    // there are 4 crystals with the crystVal class.

    for(var i=0; i<crystalBtns.length; i++){
        crystalBtns.each(function(){
                      
            console.log(this);
            $(this).attr("value", crystalArr[i]);
            console.log(this);
        });
    }
} Ask tutor how to make this work*/

function updateContent(){
    $("#dispRandomNo").html(dispRandomNo);
    $("#dispTotal").html(totalScore);
    $("#dispWins").html(wins);
    $("#dispLosses").html(losses);
    // $("#dispMessage").html("<h6> </h6>");
} //end of updateContent()

function resetGame(){
    totalScore = 0;
    crystalArr = [];
    generateRandom();
    crystalValues();
    assignCrystalsvalue();
    updateContent();

} //end of resetGame

/*Create a funntion that checks for wins and losses. A win happens when totalScore === dispRandomNo. When this happens, increment and display #wins, inform the user that they won and reset the game. A loss happens when totalScore >dispRandomNo. */



function playGame(){
    if (totalScore === dispRandomNo){
        console.log("you won!");
        wins++;
        $("#dispWins").html(wins);
        $("#dispMessage").html("<h6> You Won! </h6>");
         //how do I display this message for just 5 seconds?
        setTimeout(function() {
            $("#dispMessage").fadeOut(1500);
              },1000);
        resetGame();
    } 

    else if (totalScore > dispRandomNo)
    {
        console.log("you Lost!");
        losses++;
        $("#dispLosses").html(losses);
        $("#dispMessage").html("<h6> You lost... </h6>");
        //how do I display this message for just 5 seconds?
        setTimeout(function() {
             $("#dispMessage").fadeOut(1500);
               },1000);
        resetGame();
    }   

}



//Define Event Listeners.
$(".crystVal").click(function(){
    
   console.log($(this).attr("value"));
   var crystValue = $(this).attr("value");
   totalScore += parseInt(crystValue);
   console.log(totalScore);
   updateContent(); 
   playGame();

}); //End of Event listener


