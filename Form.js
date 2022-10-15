class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","ENTER YOUR NAME");
    this.playButton = createButton("play");
    this.titleImg = createImg("./assets/title.png","gameTitle");
    this.greeting = createElement("h2")
  }
setElementposition()
{
  this.titleImg.position(120,100);
  this.input.position(width/2-110,height/2-80);
  this.playButton.position(width/2-90,height/2-20);
  this.greeting.position(width/2-250,height/2-100);
}
display(){
  this.setElementposition()
}
}
