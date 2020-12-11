var noseX=0;
var noseY=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/MGv5YNKh/580b57fbd9996e24bc43bed5.pngh');
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    image(clown_nose,noseX-50,noseY-10,50,50);
}
function take_snapshot(){
    save('MY PICTURE.PNG');
}
function modelLoaded(){
    console.log("PoseNet model has loaded!!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = "+noseX);
        console.log("Nose Y = "+noseY);

    }
}


