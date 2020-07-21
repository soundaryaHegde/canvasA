var database;
var line1 = [];
var allPoints = [];
var dbpoins =[]

function setup(){
    database = firebase.database();
    createCanvas(500,500);
}

function draw(){
    background(0);

    readData();
    if (mouseIsPressed){
      var point = {
        x: mouseX, 
        y: mouseY
      }
      line1.push(point);
      allPoints.push(line1);
      console.log(allPoints);
      var drawingRef = database.ref('drawing')
    drawingRef.set({
        "d": allPoints
    })
    }
    
    beginShape();
    stroke(255);
    noFill();
    for(var i=0; i<this.dbpoins.length; i++){     
        vertex(dbpoins[i][i].x, dbpoins[i][i].y);
        
        endShape();
      }
}
function readData() {
  database.ref('drawing/').on('value', (data) => {
    console.log(data.val().d);
    dbpoins = data.val().d
  })
}

