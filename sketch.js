const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint 

var engine,world;
var polygon_image

function setup(){

createCanvas(800,400)
engine=Engine.create()
world=engine.world;

polygon_image=loadImage("polygon.png")

polygon = Bodies.circle(50,200,20)
World.add(world,polygon);

string1=new String(this.polygon,{x:100,y:200})

imageMode(CENTER)
image(polygon_image,polygon.position.x,polygon.position.y,40,40)

ground = new Ground(600,height,1200,20);

box1= new Box(600,275,30,40)
box2= new Box(630,275,30,40)
box3= new Box(660,275,30,40)
box4= new Box(690,275,30,40)
box5= new Box(720,275,30,40)
box6= new Box(750,275,30,40)
box7= new Box(780,275,30,40)
box8= new Box(630,235,30,40)
box9= new Box(660,235,30,40)
box10= new Box(690,235,30,40)
box11= new Box(720,235,30,40)
box12= new Box(750,235,30,40)
box13= new Box(660,195,30,40)
box14= new Box(690,195,30,40)
box15= new Box(720,195,30,40)
box16= new Box(690,155,30,40)




}

function draw(){
background(180)
    Engine.update(engine);
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
string1.display()

drawSprites()

}






































































