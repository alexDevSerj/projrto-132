var status = "";
img = "";

function preload(){
  img = loadImage('quarto.jpg');
}

function setup(){
  canvas = createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "Detectando Objtos";
}

function modelLoaded(){
  console.log("modelo carregado")
  status = true
  objectDetector.detect(img,gotResult)
}

function gotResult(error,results){
  if(error){
    console.error(error)
  }
  else{
    console.log(results)
  }
}