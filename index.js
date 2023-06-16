let barrel;
let grass;
let sky;
let stone;

function preload() {
  grass = loadImage("grass.png");
  sky = loadImage("sky.jpg");
  stone = loadImage("stone.jpg");
}

function setup() {
  const canvas = createCanvas(400, 400, WEBGL);
  canvas.parent("canvas");
  textureMode(NORMAL);

  barrel = new Barrel();
}

function draw() {
  background(0);
  noStroke();

  push();
  showcase();
  rotateX(PI / 2);
  texture(stone);
  barrel.render();
  pop();

  texture(sky);
  translate(0, 0, -300);
  plane(800, 800);
}
