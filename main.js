
song = ""; 
leftWristY=0;
leftWristX=0;
rightWristY=0;
rightWristX=0;


function preload()
{
song=loadSound("music.mp3");
}

function setup()
{
 canvas=createCanvas(600,500);
 canvas.center();

 video=createCapture(VIDEO);
 video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,600,500);
}

function modelLoaded()
{
    console.log('PoseNet Is Initiallized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        leftWristY=results[0].pose.leftWrist.y;
        leftWristX=results[0].pose.leftWrist.x;
    console.log("leftWristY="+ leftWristY+"leftWristX"+leftWristX);
    
    rightWristY=results[0].pose.rightWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
console.log("rightWristY="+ rightWristY+"rightWristX"+rightWristX);

}
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}