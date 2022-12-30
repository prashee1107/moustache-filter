moustache_x = 0;
moustache_y = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/Wpq1WHhh/moustache-filter.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}
function draw(){
image(video,0,0,300,300);
image( moustache,moustache_x,moustache_y,60,45);
}

function  takesnapshot(){
    save("myMoustachePicture.png");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        moustache_x= results[0].pose.nose.x-30;
        console.log("nose y = " + results[0].pose.nose.y);
        moustache_y= results[0].pose.nose.y ;
        
        
    }
    }