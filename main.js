function setup() {
    re = 0;
    le = 0;

    rwx = 0;
    lwx = 0;

    difference = 0;

    video = createCapture(VIDEO);
    video.size(500, 400);

    canvas = createCanvas(500, 400);
    canvas.position(560, 200);

   
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw() {
    background('white');
    document.getElementById("font").innerHTML = "The Font's Size Is: " + difference + " px";
    fill('black');
    text('Danny', re, le);
    textSize(difference)
}

function modelLoaded() {
    console.log("-----\nposeNet model loaded!\n-----");
}

function gotPoses(results) {
    if(results.length>0){
        
        console.log(results);
    re = results[0].pose.rightEye.x;
    le = results[0].pose.leftEye.x;
    rwx = results[0].pose.rightWrist.x;
    lwx = results[0].pose.leftWrist.x;

    difference = floor(lwx - rwx);

    console.log(re + le + rwx + lwx);
}}