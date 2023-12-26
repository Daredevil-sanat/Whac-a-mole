let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver= false;
let highScore = 0;
window.onload = function(){
    setGame();
}

function setGame(){

    for(let i = 0; i < 9 ; i++){
         let tile = document.createElement("div");
         tile.id = i.toString();
         tile.addEventListener('click',selectTile);
         document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole,1000);
    setInterval(setPlant,1500);
}

function generateRandomTile(){
   /* this will generate a random number between 0 to 8 which we will use to track the id and we will make it integer using Math.floor function*/
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }
     if(currentMoleTile){
        currentMoleTile.innerHTML="";
     }
    let mole = document.createElement("img");
    mole.src ='./monty-mole.png';
    mole.addEventListener('click',selectTile);
    let num = generateRandomTile();
    if(currentPlantTile && currentPlantTile.id == num){
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return;
    }
    if(currentPlantTile){
        currentPlantTile.innerHTML="";
    }
    let plant = document.createElement("img");
    plant.src='./piranha-plant.png';
    let num = generateRandomTile();
    if(currentMoleTile && currentMoleTile.id ==num){
        return;
    }
    currentPlantTile= document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currentMoleTile){
        score= score+10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == currentPlantTile){
        document.getElementById("score").innerText = "GAME-OVER:" + score.toString();
        gameOver = true;
    }
}

