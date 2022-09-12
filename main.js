noseX=0;
noseY=0;
diff=0;
rightwristX=0;
leftwristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function draw(){
    background("grey");
    textSize(diff);
    fill('yellow');
    text('shubham',noseX,noseY);
    
    
}
function modelLoaded(){
    console.log("Posenet is InitiaLize");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        diff=floor(leftwristX-rightwristX);
    }
}