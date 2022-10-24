function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  //rectMode(CENTER)//設定方塊座標點以中心為座標
  background(0);//背景顏色為黑色
  noFill()//不充滿顏色
  stroke(255)//寬線的顏色
  //ellipse(50,50,25)//座標(50,50),直徑25的小圓
 //rect(25,25,50)//
  //rect(20,20,25)//左上角小方塊
  var w=mouseX/10
 for(var j=0;j<height/50;j++)
 {
 for(var i=0;i<width/50;i++)//i++=i+1
 {
  stroke("#ED590E")
  ellipse(50+50*i,50+50*j,mouseX/10)//座標(50,50),直徑25的小圓
  stroke("#f2d8f0")
  rect(25+50*i,25+50*j,mouseY/4)
  stroke("#678f8d")
  rect(20+50*i,20+50*j,25)//左上角小方塊
 }
}
}

