var scores = JSON.parse(localStorage.getItem("scores"));
   //how to sort
   function sortingScores() {
        scores.sort(function(){
            for(var i = 0; i < scores.length; i++) {
                scores.appendChild()
            }
        });
    }

sortingScores()

//loop through array and put on page


//clear scores
$("clear-btn").click(function(){
    $("highscores").empty();
});
   


