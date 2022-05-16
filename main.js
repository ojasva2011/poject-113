function preload(){

}

function setup(){
 canvas=createCanvas(650,480);
 canvas.position(110,250);
 video=createCapture(VIDEO);
 video.hide();
}

 function draw(){
 image(video,225,175,150,150);
 fill(255,0,0);
 circle(60,60,100);
 circle(580,60,100);
 circle(60,410,100);
 circle(580,410,100);
 fill(0,128,0);
 stroke(0,128,0);
 rect(110,50,420,20);
 rect(50,110,20,250);
 rect(570,110,20,250);
 rect(110,400,420,20);

 }

 function take_snapshot(){
  save("photo.png")
 }

