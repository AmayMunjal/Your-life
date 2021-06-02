var gameState = 0
var bg1 
var playerStanding, playerRunning1,playerRunning2, player 

function preload(){
  bg1 = loadImage("playerhouse.png")
  playerStanding = loadImage("PlayerStanding.png")
  

}
function setup(){
  createCanvas(1500,800)
 // var bg1 = createSprite(200,200,400,400)
 var player = createSprite(740,555,10,10)
 player.addImage(playerStanding)
 player.visible = false
}


function draw() {
//background("black")
  if (gameState === 0){
    background("black")
    textSize(20)
    fill("white")
    textFont("Times New Roman")
    text("Make Your Own Decisions  ",600,220)
    text("But Be Careful What You Choose.",575,250)
    text("Press 'Space' To Continue",600,400)
    if (keyDown("space")){
      gameState = 1
    }
  }
  if (gameState === 1){
    background(bg1)
    player.visible = true
    text(mouseX + "," + mouseY,mouseX,mouseY)
  }
  drawSprites()
}
