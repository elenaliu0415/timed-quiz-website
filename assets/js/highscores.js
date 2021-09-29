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
    var list_item = "";
    console.log(highscores);
    for(i=0; i<highscores.length; i++) {
        list_item += "<li>" + highscores[i] +"</li>";
    }
    console.log(list_item);
    
    highscoreList.innerHTML = list_item;
}

fillHighscores();