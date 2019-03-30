window.onload = boot;
let s;
let loop;
let delay = 100;
let points =[];
let score = 0;
let highscores = [];


function boot() {
    // if highscore exists in localstorage, set it
    if(localStorage.highscores !== undefined){highscores = JSON.parse(localStorage.highscores);}
}

function newGame() {
    s = new Snake();
    score = 0;
    document.getElementById("score").innerText = score;

    // listens for directional buttonpressess like wasd or arrows
    document.onkeydown = directionChange;

    // looping movment of snake
    loop = setInterval(function () {
        ldirection= direction;
        s.move(direction);
    }, delay);
    // plasing a point at random on the screen
    points.push(pp());
}

// place point
function pp(){
    let date = new Date();
    let tmp = document.createElement("div");
    tmp.className = "piece";
    tmp.style.backgroundColor = "black";
    tmp.style.borderRadius = "100%";
    document.body.appendChild(tmp);
    tmp.style.left = Math.floor(Math.random() * (window.innerWidth-tmp.getBoundingClientRect().width)) + "px";
    tmp.style.top = Math.floor(Math.random() * (window.innerHeight-tmp.getBoundingClientRect().height)) + "px";
    tmp.id = date.getTime();

    return tmp
}

let direction = "right";
let ldirection ="right";
function directionChange(evt){
    document.onkeydown = directionChange;
    let tmp ={37:"left", 39:"right", 38:"up", 40:"down",65:"left", 68:"right", 87:"up", 83: "down" }[evt.keyCode];
    if( (tmp === "right" && ldirection !== "left")||
        (tmp === "left" && ldirection !== "right")||
        (tmp === "down" && ldirection !== "up")||
        (tmp === "up" && ldirection !== "down")){
        direction= tmp;
        if(tmp === "right"){    s.head.style.transform= "rotate(0deg)" }
        else if(tmp === "up"){  s.head.style.transform= "rotate(-90deg)" }
        else if(tmp === "down"){s.head.style.transform= "rotate(90deg)" }
        else if(tmp === "left"){
            s.head.style.transform= "rotate(0deg)";
            s.head.style.transform= "rotateY(180deg)";
        }
    }

}

function removeElementByID(elementId){
    // Removes an element from the document
    let element = document.getElementById(elementId);
    removeElement(element);
}
function removeElement(element) {
    element.parentNode.removeChild(element);
}


function updateScoreBoard() {
    let addIndex;
    let username = prompt("Add your score of "+score+" to the scoreboard", "Username");
    if( username === null){
        alert("You opted to not add your score to the scoreboard");
        return false;
    }

    if(highscores.length === 0){
        addIndex = 0;
    }else {
        for(let i in highscores){
            if(score > highscores[i].score){
                addIndex = i;
            }
        }
    }

    highscores.splice(addIndex, 0, {score: score.toString(), name: username.toString()});
    while(highscores.length > 10){
        highscores.pop();
    }
    highscores.sort(function(a, b) {
        return a.score - b.score;
    });
    highscores.reverse();
    localStorage.highscores = JSON.stringify(highscores);
    return true;
}

function scoreboard() {
    let menu = document.createElement("div");
    menu.id = "Scoreboard";
    menu.className = "menu";
    let table ="<h1>Scoreboard</h1>";
    if (highscores.length > 0){
        table += "<h4>Player:Score</h4>";
        for(let i in highscores){
            table += ""+highscores[i].name+":"+highscores[i].score+"<br>";
        }
    }else {
        table += "<h2>no highscores saved</h2>"
    }
    table += "<div class='button' onclick='newGame();removeElement(document.getElementById(\"Scoreboard\"))'>New Game</div>" +
        "<div class='button' onclick='window.close()'>Quit</div>";

    menu.innerHTML = table;

    document.body.appendChild(menu);
}

function endGame() {
    clearInterval(loop);
    s.remove();
    s = null;
    for(let i in points)removeElementByID(points[i].id);
    points = [];

    updateScoreBoard();
    scoreboard();


}
