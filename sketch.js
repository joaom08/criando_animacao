let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(350, 350);
   background(color(400,10,50));
  cor = color(random(0,266), random(0,265), random(0,265));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
  
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,1);
 
  
  
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
  
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
  
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
    
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
  
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
    
}