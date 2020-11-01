var backgrondimg;
var block1,block2;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24;
var police,policeimg,policeimg2;
var policespeed=3;
var thief1,thief1img,thief2,thief2img,thief3,thief4,thief5,thief6,thief7,thief8,thief9,thief10;
function preload(){
  policeimg2=loadImage("img/police.png");
backgrondimg=loadImage("img/backgroundimg.png");
policeimg=loadImage("img/police2.png");
thief1img=loadImage("img/thief1.png");
thief2img=loadImage("img/thief2.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight-150);
 police= createSprite(300, 170, 30, 30);
 police.addImage(policeimg);
 police.scale=0.08;
 //police.debug=true;
 police.setCollider("circle",0,0,300);

 thief1= createSprite(170, 350, 30, 30);
 thief1.addImage(thief1img);
 thief1.scale=0.3;

 thief2= createSprite(170, 550, 30, 30);
 thief2.addImage(thief1img);
 thief2.scale=0.3;
 
thief3= createSprite(170, 800, 30, 30);
thief3.addImage(thief1img);
thief3.scale=0.3;

thief4= createSprite(370, 805, 20, 20);
thief4.addImage(thief1img);
thief4.scale=0.3;

thief5= createSprite(1210, 430, 30, 30);
thief5.addImage(thief1img);
thief5.scale=0.3;

thief6= createSprite(1210, 560, 30, 30);
thief6.addImage(thief1img);
thief6.scale=0.3;


thief7= createSprite(1490, 805, 30, 30);
thief7.addImage(thief2img);
thief7.scale=0.35;

thief8= createSprite(1490, 705, 30, 30);
thief8.addImage(thief2img);
thief8.scale=0.35;

thief9= createSprite(1720, 125, 30, 30);
thief9.addImage(thief2img);
thief9.scale=0.35;

thief10= createSprite(1720, 250, 30, 30);
thief10.addImage(thief2img);
thief10.scale=0.35;


wall1= createSprite(105, 500, 20, 725);
wall1.visible=false;

wall2= createSprite(225, 160, 15, 195);
wall2.visible=false;

wall3= createSprite(450, 252, 455, 8);
wall3.visible=false;

wall4= createSprite(672, 230, 11, 50);
wall4.visible=false;

wall5= createSprite(672, 103, 11, 80);
wall5.visible=false;

wall6= createSprite(450, 70, 450, 12);
wall6.visible=false;

wall7= createSprite(390, 300, 565, 8);
wall7.visible=false;

wall8= createSprite(390, 605, 565, 8);
wall8.visible=false;

wall9= createSprite(390, 858, 565, 10);
wall9.visible=false;

wall10= createSprite(500, 665, 353, 8);
wall10.visible=false;

wall11= createSprite(332, 760, 10, 190);
wall11.visible=false;

wall12= createSprite(670, 810, 13, 100);
wall12.visible=false;

wall13= createSprite(670, 680, 12, 30);
wall13.visible=false;

wall14= createSprite(670, 570, 12, 70);
wall14.visible=false;

wall15= createSprite(670, 450, 12, 70);
wall15.visible=false;

wall16= createSprite(670, 325, 12, 60);
wall16.visible=false;

wall17= createSprite(1460, 70, 630, 12);
wall17.visible=false;

wall18= createSprite(1655, 305, 250, 8);
wall18.visible=false;

wall19= createSprite(1295, 305, 300, 8);
wall19.visible=false;

wall20= createSprite(1152, 290, 13, 30);
wall20.visible=false;

wall21= createSprite(1172, 490, 10, 240);
wall21.visible=false;

wall22= createSprite(1385, 610, 435, 8);
wall22.visible=false;

wall23= createSprite(1385, 375, 435, 8);
wall23.visible=false;

wall24= createSprite(1465, 655, 600, 8);
wall24.visible=false;

wall25= createSprite(1360, 858, 390, 8);
wall25.visible=false;

wall26= createSprite(1543, 800, 14, 115);
wall26.visible=false;

wall27= createSprite(1543, 685, 12, 60);
wall27.visible=false;

wall28= createSprite(1170, 820, 10, 80);
wall28.visible=false;

wall29= createSprite(1170, 685, 10, 60);
wall29.visible=false;

wall30= createSprite(1660, 775, 230, 10);
wall30.visible=false;

wall31= createSprite(1770, 420, 15, 710);
wall31.visible=false;

wall32= createSprite(1600, 590, 10, 40);
wall32.visible=false;

wall33= createSprite(1600, 470, 10, 90);
wall33.visible=false;

wall34= createSprite(1600, 385, 10, 30);
wall34.visible=false;

wall35= createSprite(1150, 130, 11, 130);
wall35.visible=false;

block1= createSprite(1540, 730, 35, 35);
block1.visible=false;

block2= createSprite(220, 200, 35, 35);
block2.visible=false;
}

function draw() {

  background(backgrondimg); 
  police.bounceOff(wall1);
  police.bounceOff(wall2);
  police.bounceOff(wall3);
  police.bounceOff(wall4);
  police.bounceOff(wall5);
  police.bounceOff(wall6);
  police.bounceOff(wall7);
  police.bounceOff(wall8);
  police.bounceOff(wall9);
  police.bounceOff(wall10);
  police.bounceOff(wall11);
  police.bounceOff(wall12);
  police.bounceOff(wall13);
  police.bounceOff(wall14);
  police.bounceOff(wall15);
  police.bounceOff(wall16);
  police.bounceOff(wall17);
  police.bounceOff(wall18);
  police.bounceOff(wall19);
  police.bounceOff(wall20);
  police.bounceOff(wall21);
  police.bounceOff(wall22);
  police.bounceOff(wall23);
  police.bounceOff(wall24);
  police.bounceOff(wall25);
  police.bounceOff(wall26);
  police.bounceOff(wall27);
  police.bounceOff(wall28);
  police.bounceOff(wall29);
  police.bounceOff(wall30);
  police.bounceOff(wall31);
  police.bounceOff(wall32);
  police.bounceOff(wall33);
  police.bounceOff(wall34);
  police.bounceOff(wall35);

  if(keyDown("up")){
    police.y = police.y -policespeed;
 }
 
 if(keyDown("down")){
    police.y = police.y +policespeed;
 }
 
 if(keyDown("right")){
     police.x= police.x +policespeed;
 }
 
 if(keyDown("left")){
     police.x = police.x -policespeed;

 }
 
 if(keyDown("left")){
police.addImage(policeimg2);
}else{
  police.addImage(policeimg);
}
 
 drawSprites();
}