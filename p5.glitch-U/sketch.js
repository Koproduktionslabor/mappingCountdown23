
let glitch;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(0);
  //tint(255,255,255,50);
	imageMode(CENTER);
    
	glitch = new Glitch();
	loadImage('UMAP4_MasterFrame_e02.png', function(im){
		glitch.loadImage(im);
	});
  //pixeldensity(1);
  glitch.loadType('webp'); // specify jpeg file glitching, default
  // optionally crunch to low quality
  //glitch.pixelate(.1);
}

function draw() {
  // clear();
  glitch.loadQuality(.1);
	glitch.resetBytes();
	glitch.randomByte(60); //ngle random
	//glitch.randomBytes(5) // 5 random
	//glitch.randomBytes(5, 150) // 5 random pos, exact val
  //glitch.limitBytes(sin(frameCount*0.01)*0.5+0.5);
    glitch.limitBytes(0.1);
 // glitch.randomBytes(map(mouseX, 0, width, 0, 100))
	glitch.replaceBytes(5, 150); // swap all decimal byte 100 for 104
	glitch.randomBytes(5); // add one random byte for movement

	glitch.buildImage();
	image(glitch.image, width/2, height/2,glitch.width*0.7,glitch.height*0.7)
}