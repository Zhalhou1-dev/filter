nosex=null;
nosey=null;
function preload(){

}
function setup(){
  canvas=createCanvas(500,800);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,500);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
    
}
    function draw(){
image(video,0,0,500,800);
}
function save(){
    
}
function gotPoses(results){
  if (results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
  }
}