var bgi, cpi, cpi2, stonei, stonei2, stonei3, villani , bgi2;
var marvel;
var bg, villan, infinity, t1, t2, t1i, t2i;
var thanos, thanosi, start, bomb;
var level=1
var gs="play"
var bombg

function preload(){
  bgi=loadImage("space.JPG")
    bgi2=loadImage("Capture.PNG")
  thanosi=loadImage("thanoss.png")
  cpi=loadImage("captain.PNG")
  cpi2=loadImage("cp.png")
  stonei=loadImage("infinity.PNG")
  stonei2=loadImage("infjf.PNG")
  stonei3=loadImage("stone.PNG")
  villani=loadImage("villan.png")
  t1i=loadImage("T1.png")
  t2i=loadImage("T2.png")

  bombg=new Group()
}
function setup(){
  createCanvas(600, 400 )
  bg=createSprite(300, 200, 10, 10)
  bg.addImage("back", bgi)
  bg.scale=1.8
  bg.velocityX=-1
  
  villan=createSprite(500, 325, 10,10)
  villan.addImage("dead", villani)
  villan.scale=0.5
  
  infinity=createSprite(300, 30, 10, 10)
  infinity.addImage("stone", stonei)
  infinity.scale=0.6
  
  t1=createSprite(300, 150, 10, 10)
  t1.addImage("t", t1i)
  t1.scale=0.3
   start=createSprite(300, 300, 20, 20)
      marvel=createSprite(500, 200, 10, 10)
   marvel.addImage("mar", cpi2)
   marvel.scale=0.3
marvel.visible=false
  thanos=createSprite(20, 200, 10, 10)
    thanos.addImage("t", thanosi)
    thanos.scale=0.3
    
   thanos.y=200
  thanos.visible=false
  
    
}
function draw(){
  background("red")
 // console.log(frameCount)
  if (gs==="play"){
  if(bg.x<100){
    bg.x=500
  }
if(mousePressedOver(start)&&level===1){
   start.remove();

  bg.addImage("back", bgi2)
  t1.destroy()
  villan.destroy()
  thanos.visible=true
    marvel.visible=true
  
}
  
  
  
    if(keyDown("up")){
      marvel.y=marvel.y-5
    }
    
    if(keyDown("down")){
      marvel.y=marvel.y+5
    }
    

  spawnbomb(); 
  if(bombg.isTouching(marvel)){
      gs="end"
      bg.addImage("back", bgi)
infinity.addImage("d", stonei2)
      }
   
  
  drawSprites()
}
  if(gs==="end"){
    text("Captain Marvel captured the stone",200,200)
  }
}
function spawnbomb(){
  if(frameCount%100===0){
    
      bomb=createSprite(20, 300, 10, 10)
    bomb.shapeColor="red"
    bomb.velocityX=5
    bomb.y=thanos.y
    bomb.y=Math.round(random(20, 350))
    bombg.add(bomb)
    }
}
