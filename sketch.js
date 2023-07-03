let samira // variable personaje
let fondo
let rammus 
var paralax = 0

var px = 100,py= 300;
var mx,my
var enx = 800,eny= py, ent = 100,env;
var flag = false
var puntos = 0
var a,h,k,f;


function preload(){
  // rellenar con el nombre del archivo y su extencion (debe ser png)
    samira = loadImage('data/samira-removebg-preview.png')  
    fondo = loadImage('data/Ask_Riot_Winter_Rift_Banner.jpg')
  rammus = loadImage('data/rammus.png')
}

function setup() {
 
  createCanvas(700, 400);
  env = 1
  // recomendado, proporcionar la imagen a la pantalla
  var tx = samira.width * 0.1  
  var ty = samira.height * 0.1

  samira.resize(200,200  )
  rammus.resize(200,200) 
  fondo.resize(width,height)
  
  // var de imagen, posision (x,y), tamaño del sprite (tx,ty) cuadros y velocidad
  textSize(25)
  imageMode(CENTER)
  noCursor()
  textAlign(CENTER)
  
}

function draw() {
  image(fondo,width/2 - paralax,height/2)
  
  image(fondo,3*width/2 - paralax,height/2)
  image(samira,100,300)
  paralax += 3
  
  if(paralax > width){
     paralax = 0
     }
  ////////////////////////////
  fill(255)
  image(rammus,enx,eny)
  enx -= env
  

  

  //////////////////////////
  fill(255,0,0)
  circle(mouseX,py,30)
  if(mouseIsPressed && !flag){
      flag = true 
      h = px
      k = mouseX
      f = py
      var vx = (k-h)/2+h
      var vy = height/4
      mx = px
      my = py
      
      a = (vy-f)/((vx-h)*(vx-k))
     }
  
  if(flag){
     mx += 4
     my = a *(mx-h)*(mx-k)+f
     circle(mx,my,10) 
     if(mx > width || mx < 0 || my < 0 || my >height){
       flag = false       
       }
     var minHitX = mx < enx + (ent/2) && mx > enx - (ent/2)
     var minHitY = my < eny + (ent/2) && my > eny - (ent/2)
    if(minHitX && minHitY){
      enx = 800
    env = random(1,4);
      puntos += 300
    }
    
     }
  
  
  //////////////
  
    var inHitX = enx < px + (samira.width/2) && enx > px - (samira.width/2)
  var inHitY = eny < py + (samira.height/2) && eny > py - (samira.height/2)
    if(inHitX && inHitY){
     background(0)
    text("GAME OVER",width/2,height/2)
    noLoop()     
     }
  fill(255)
  text("Puntos: " + puntos,width/2,height*0.1)
  puntos ++
}

