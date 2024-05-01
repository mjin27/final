class Splash {
  constructor() {
    this.splashBorder = 50;
    fill(255);
    stroke(255, 0, 0);
    rect(this.splashBorder, this.splashBorder, windowWidth - this.splashBorder * 2, windowHeight - this.splashBorder * 2);
    fill(0, 0, 222);
    noStroke();

    this.title = createDiv("SPHERE");
    this.title.style('color', 'deeppink');
    this.title.style('font-family', 'Arial, Helvetica, sans-serif');
    this.title.position(this.splashBorder + 20, this.splashBorder + 20);

    this.name = createDiv("Ben Jin");
     this.name.style('color:deeppink');
    this.name.position(this.splashBorder + 20, this.splashBorder + 60);

    this.info = createDiv("In this project I used some 3D shapes to create a audio visualizer. I use FFT to analysis the waveform and make it combines with the shape so the shape can move according to the waveform of the piece. I use keyboard to control the color changes of the shapes and changes between different settiings");
     this.info.style('color:deeppink');
    this.info.position(this.splashBorder + 20, this.splashBorder + 100);
    this.info.size(windowWidth - this.splashBorder * 2 - 50, windowHeight - this.splashBorder * 2 - 50);
  }

  hide() {
    this.title.remove();
    this.name.remove();
    this.info.remove();
  }
}


   
  

