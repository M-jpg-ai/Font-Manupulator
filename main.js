
difference=0;
leftWristX=0;
rightWristX=0;

txt='Your Text';

while (true) {
    txt=document.getElementById('name')
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 400);

     canvas = createCanvas(500, 400);
     canvas.position(560, 150);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);

}
function draw()
{
    background('#0000FF');

    document.getElementById("font_size").innerHTML = "Width And Height of the Text will be = " + difference + "px";
    fill('#F90093');
    textSize(difference);
    
    text(txt, 100, 200 );

}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);

        console.log(" leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

// while (true) {
//     txt=document.getElementById('name')
// }

function lol(){
    txt= document.getElementById('name');
}
