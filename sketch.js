
let table, poem, poemString, binary, poemlines, whichword, randomLine, date, button, val, framerate
let index = 0;
let c=0;
let r=0;
let a= 0;
let b =0;
let ON="ON";
let dear = "Dear neighbour,"
let intro = "Hello and welcome to 'ON' and 'OFF'. A collection of messages transcribed from the lights of neighbours. Each message is unique to each apartment and the messages appear in order based on date and apartment number. Please enjoy this month's messages with words by poet George Gordon Byron. Click anywhere to begin."


let word=" "
let fade = 0;
//loading the spreadsheet  
function preload() { 
  table = loadTable('Binarydigits.csv', 'csv', 'header');
  table2 = loadTable('Poetrywords.csv', 'csv', 'header');
  img = loadImage ('Apartment.png'); 
  

  }
function mousePressed(){loop();}

 
function mouseReleased(){noLoop();}


  

 function setup() {
   frameRate (0.001);
   createCanvas(windowWidth,windowHeight);
  image(img, 0, 0);
  
// INTRODUCTION TEXT
    fill (255);
   textFont ('baskerville', 16);
    textAlign (LEFT);
    text (intro, 850,80, 500);


   
  //background (150);
// frameRate(0.1);
   // Extracting each cell from the Binarydigits.csv into console
  //oLoop();  
   


poemlines=table2.getRowCount(); //how many poem lines?
  print(poemlines);
     
}

function draw () {


//DONT TOUCH! MESSAGE CREATION
  c++;
  if (r < table.getRowCount()) { //for as many rows as there are
    if (c < table.getColumnCount()){
        poem=table.getString(r, c); //each cell
        print (poem);
        poemString=""; //reset the poem for each cell
  for (let i = 0; i < 8; i++) {
          binary=poem.charAt(i); //iterate through the binary digits
      if (binary=="1"){binary="ON"; //choose from left column "ON"
        
                      }
      else {binary = "OFF"; //choose word from right column "OFF"
     
           }
          randomLine=Math.floor(Math.random()* poemlines); //now we know the column, choose a randomline
          ON = table2.get(randomLine, binary); //get the word
          poemString+=ON;//add to this cell's poem
          poemString+=" ";//add a space in between words  
  
          
    
          
//MESSAGE APPEARANCE'
  fill(255, 50);
    strokeWeight (2.5);
    rect (mouseX, mouseY, 450, 250,10);
    
  textFont("gibson", 20);  
   
  
  
 // rect(mouseX +100,270,300, 200 );
  noStroke();
  noFill();
  fill(0);
  text(poemString,mouseX +20, mouseY+70, 200, 200);
  stroke(0);
  
  
// vertical line
  line (mouseX+270, mouseY+20, mouseX+270, mouseY+220);  
// The address lines on card 
  line(mouseX+290, mouseY+170, mouseX+430, mouseY+ 170);
  line(mouseX+290, mouseY+190, mouseX+430, mouseY+ 190);
  line(mouseX+290, mouseY+210, mouseX+430, mouseY+ 210);
  strokeWeight (2.5);

//"DEAR NEIGHBOUR" APPEARANCE
  strokeWeight (1);
  textFont ('gibson', 30);
  textAlign (LEFT);
  text (dear,mouseX+20, mouseY+20,500);      

  

          
     } //end of cells in each row
   } else{r++;c=0;}//end of rows in list
} //end draw function, sketch stops (noLoop is set) 
r=0;

}



