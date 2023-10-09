const SECONDS_PER_EACH_MINUTE = 60;
const MILLISECONDS_PER_EACH_SECOND = 1000;
const TIME_TO_COUNT = 10* SECONDS_PER_EACH_MINUTE * MILLISECONDS_PER_EACH_SECOND;

let timeLimitMillis = TIME_TO_COUNT; // marks time in the future

let countdownMillis = TIME_TO_COUNT; // current remaining time

let font, points;
let rot= 0;
let t = 0;
let noiseScale=0.02;
var lastImg;
function preload() {
	font = loadFont("https://cdn.glitch.global/c8058944-5940-420c-b53d-d9865b2f4c82/grotesk.otf?v=1690372421136")
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  genType('', width / 4);

} 

function reinciarConteo()
{
// here what we do is take the current time and add the ten minutes to it
  // so that we have a time position that we're heading to
  timeLimitMillis = millis() + TIME_TO_COUNT; // update current remaining time
  
  countdownMillis = TIME_TO_COUNT; // update current remaining time

function keyPressed()
{
  restartCountdown();
}
}
function draw() {
 
   background(0);

   strokeWeight(1)
   noFill();
  /*
  strokeWeight(0.5)
  for(x=0; x<width; x++){
 
    //  stroke(x*0.1);    
  //let noiseVal = noise(x *20 + (frameCount *0.005));
  let noiseVal = noise(x *20 + frameCount*0.003);
  rotate(t);
  line(noiseVal+x, height*noiseVal,noiseVal+x+cos(frameCount*0.005)*50,100, 100);

 // rect(noiseVal+x+cos(frameCount*0.005)*50, height*noiseVal+sin(frameCount*0.005)*50,10)
  //t=+1;
  }
  t=0;*/
  stroke(255)
  //translate(width / 2, height / 2)
  fill(0);


	for(let i = 0; i < points.length; i++) {

		let p = points[i] 
   //  fill(i%155)
   //stroke(i % 255)
 
  //Draws another shapes for each typo
		//let s = sin(i * 0.5 + frameCount*0.05 ) * 20 +20 + cos(frameCount*0.05)*30+10 ;
    //let noiseVal = noise(i,noiseScale+radians(frameCount),noiseScale*i)*80;
    //let s = sin(i * 0.5 + frameCount*0.05 ) * 20 + cos(frameCount*0.05)*30 ;
   // let s = sqrt(i  + frameCount );
		//rotate(abs(sin(frameCount*0.001)+PI))
    strokeWeight(1.5)
		//rect(p.x, p.y, noiseVal)
    fill(0)
    rect(p.x, p.y, 50)
    //strokeWeight(1)
	}
  


  // current remaining time, is equal to the time we are going minus the current time
  countdownMillis = timeLimitMillis - millis();
  
  //to hold the countdown for 10 minutes until you release the button
  if (keyIsPressed)
  restartCountdown();
  
 
  if (countdownMillis < 0){
    countdownMillis = 0;
    
    // if you want it to restart automatically, remove the comment to this
    // restartCountdown();
  }
  
  
  let seconds = countdownMillis / MILLISECONDS_PER_EACH_SECOND;
  let minutes = seconds / SECONDS_PER_EACH_MINUTE;
  
 
  let secondsNicer = floor( seconds ); // integer rounded down
  secondsNicer %= 60; // to cycle every 60
  secondsNicer = nf(secondsNicer,2); // always have two digits ;)
  // reference to this function: https://p5js.org/es/reference/#/p5/nf
  
  let minuntesNicer = floor( minutes ); // integer rounded down
  minuntesNicer = nf(minuntesNicer,2); 
  

  textAlign(LEFT);
  textFont(font);
  noFill();
  stroke(255);
  //text(`${minuntesNicer}:${secondsNicer}` , width/2, height/2); 
  let text = `${minuntesNicer}:${secondsNicer}`; //same than above but prettier
  //console.log(text);
  genType(text, height / 2);

  lastImg = get();
}

function genType(txtString, txtSize) {
	// grab bounding box of text
	let bounds = font.textBounds(txtString, 0, 0, txtSize)

	points = font.textToPoints(txtString, width/2 -830, height/2 +160, txtSize, {
		sampleFactor: 0.09,
		simplifyThreshold: 0
	})
}