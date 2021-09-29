var highscoreList = document.querySelector("#highscores-list");

function goBack() {
    window.location.href = "index.html";
}

function clearScores() {
    localStorage.setItem("highscores", JSON.stringify([]));
    highscoreList.innerHTML = "";
}

function fillHighscores() {
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    var listItem = "";
    console.log(highscores);
    for(i=0; i<highscores.length; i++) {
        listItem += "<li>" + highscores[i] +"</li>";
    }
    console.log(listItem);
    
    highscoreList.innerHTML = listItem;
}

fillHighscores();