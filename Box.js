class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
  }
  score(){
    
  }
display(){
  fill("pink");
  if (this.body.speed<5) {
 super.display();   
  }
  else{
    World.remove(world,this.body);
  }
}
}
