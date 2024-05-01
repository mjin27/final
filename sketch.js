var mode = 0;
var song;
var fft;
var color1;
var color2;
var color3;
var color4;
var whichDraw = 3;
let audioStarted = false;

function preload() {
  song = loadSound('song.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); 
   splash = new Splash();
  fft = new p5.FFT();
  fft3 = new p5.FFT();
  angleMode(RADIANS);

  color1 = 'red';
  color2 = 'aqua';
  color3 = 'purple';
  color4 = 'yellow';
}

function draw() {

  if (mouseIsPressed == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();
  } 
  if (whichDraw == 1) {
    draw1();
  } else if (whichDraw == 2) {
    draw2();
  } else if (whichDraw == 3) {
    draw3();
  }
}


function keyTyped() {
  if ((key === 'p') && (color1 === 'red')) {
    color1 = 'yellow';
  } else {
    color1 = 'red';
  }
  if ((key === 'y') && (color2 === 'blue')) {
    color2 = 'aqua';
  } else {
    color2 = 'blue';
  }
  if ((key === 'o') && (color3 === 'purple')) {
    color3 = 'aqua';
  } else {
    color3 = 'purple';
  }
  if ((key === 'i') && (color4 === 'yellow')) {
    color4 = 'pink';
  } else {
    color4 = 'yellow';
  }

  if (key === '1') {
    whichDraw = 1;
  } else if (key === '2') {
    whichDraw = 2;
  } else if (key === '3') {
    whichDraw = 3;
  }
}

function draw1() {
  background(0);
  let spectrum = fft.analyze(16);
  let lowLevels = spectrum[10];
  let highLevels = spectrum[500];

  for (let i = 1; i < spectrum.length; i++) {
    let radius = map(spectrum[i], -1, 1, 100, 600);
    push();
    translate(0, 0, -1000);
    noFill(); 
    stroke(color1);
    strokeWeight(1);
    box(100);
    sphere(radius);
    pop();
  }
  let waveform = fft.waveform(16);
  for (let i = 1; i < waveform.length; i++) {
    let radius = map(waveform[i], -1, 1, 100, 600);
    push();
    translate(0, 0, -1000);
    noFill();
    stroke(color2);
    strokeWeight(1);
    box(100);
    sphere(radius);
    pop();
  }

  push();
  fill(50);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  pop();
  noFill();
  stroke(color1);
    strokeWeight(1);
  push();
  sphere(lowLevels, 20);
  pop();

  push();
  translate(150, 0, 0);
  stroke(color3);
    strokeWeight(1);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  sphere(highLevels, 20);
  pop();

  push();
  noFill();
  stroke(color3);
  strokeWeight(1);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  torus(lowLevels, 20);
  pop();

  push();
  translate(150, 0, 0);
  noFill();
  stroke(color4);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  sphere(highLevels / 2);
  pop();

  push();
  translate(-150, 0, 0);
  stroke('purple');
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  sphere(highLevels, 20);
  pop();

  push();
  translate(-150, 0, 0);
  noFill();
  stroke('yellow');
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  sphere(highLevels / 2);
  pop();
}

function draw2() {
}

function draw3() {
  var wave = fft3.waveform();
  
  
  
  background(0);
  stroke('red');
  strokeWeight (10);
  
  translate (-windowWidth / 2, -windowHeight /2);
  for (var i = 0; i < windowWidth; i++) {
    var index = floor(map(i, 0, windowWidth, 0, wave.length));
     var x = i;
    var y = wave[index] * 1000 + windowHeight / 2;
    point(x, y);
  }
   stroke('blue');
  strokeWeight (10);
  
  translate (windowWidth/200, windowHeight/200);
  for (var i = 0; i < windowWidth; i++) {
    var index2 = floor(map(i, 0, windowWidth, 0, wave.length));
     var x2 = i;
    var y2 = wave[index2] * 1000 + windowHeight / 2;
    point(x2, y2);
  }
    stroke('aqua');
  strokeWeight (5);
  translate (windowWidth/200, windowHeight/200);
  for (var i = 0; i < windowWidth; i++) {
    var index3 = floor(map(i, 0, windowWidth, 0, wave.length));
     var x3 = i;
    var y3 = wave[index3] * 1000 + windowHeight / 2;
    point(x3, y3);
  }

}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
function mousePressed() {
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}




