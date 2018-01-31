var redPicture;
var greenPicture;
var bluePicture;
var grayPicture;
var television;

function preload(){
    redPicture = loadImage("images/lpkids-red.png");
    greenPicture= loadImage("images/lpkids-green.png");
    bluePicture = loadImage("images/lpkids-blue.png");
    grayPicture=  loadImage("images/lpkids-gray.png");
    television =  loadImage("images/OLD-SCHOOL-TV.png");
}

function setup(){
    createCanvas(749,524);
}

function draw(){
   
    
    if(keyIsPressed){
        if(key=="r"){
            image(redPicture, 50, 50);
        }
        if(key=="g"){
            image(greenPicture, 50, 50);
        }
        if(key=="b"){
            image(bluePicture, 50, 50);
        }
        if(keyCode=="32"){
            fill(0);
            rect(50, 50, 500, 374);
            blendMode(LIGHTEST);
            image(Ipkidsred,50,50);
            image(Ipkidsgreen,50,50);
            image(Ipkidsblue,50,50);
        }
    }
    else{
        image(lpkids-gray,100,100);
    }
    blendMode(NORMAL);
      image(television, 0, 0);
}