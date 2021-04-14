var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music,music1Sound

function preload(){
    // load sound here
    music1=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3=createSprite(510,580,200,30)
    block3.shapeColor = "red"

    block4=createSprite(720,580,200,30)
    block4.shapeColor = "yellow"

    


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=4
    ball.velocityY=4
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(is_Touching(ball,block1)){
        ball.shapeColor = "blue"
        ball.bounceOff(block1)
    
    
    }

if(is_Touching(ball,block3)){
    ball.shapeColor = "red"
    ball.bounceOff(block3)
    
}






if(is_Touching(ball,block4)){
    ball.bounceOff(block4)
ball.shapeColor = "yellow"

}
    
    //write code to bounce off ball from the block1 
    //if(ball.isTouching(block1) && ball.bounceOff(block1)){
        //ball.shapeColor = "blue";
        //music.play(music1);}







    if(is_Touching(ball,block2)){
        ball.shapeColor = "orange";
        ball.bounceOff(block2)
        //write code to set velocityX and velocityY of ball as 0
        //ball.velocityX=4
        //ball.velocityY=5

        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4






    drawSprites();
}

function is_Touching(object1,object2){

if(object1.x -object2.x <object2.width/2+object1.width/2
&&object2.x-object1.x < object2.width/2+object1.width/2
&&object1.y-object2.y<object2.height/2+object1.height/2
&&object2.y-object1.y<object2.height/2+object1.height/2
){

   return true; 
}
else{
    return false;
}

}

function bounceOff(object1,object2){
    if(object1.x -object2.x <object2.width/2+object1.width/2
        &&object2.x-object1.x < object2.width/2+object1.width/2){
        object1.velocityX=(-1)*object1.velocityX
        object2.velocityX=(-1)*object2.velocityX
    }
        
else if( object1.y-object2.y<object2.height/2+object1.height/2
         &&object2.y-object1.y<object2.height/2+object1.height/2)
           object1.velocityY=(-1)*object1.velocityY
           object2.velocityY=(-1)*object2.velocityY 

}




