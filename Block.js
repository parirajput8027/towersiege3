class Block 
{
   constructor(x,y,width,height)
   {
   var options =
   {
    restitution:0.4,
    friction:1,
   }
   this.body = Bodies.rectangle(x,y,width,height,options)
   this.width = width
   this.height = height
   World.add(myworld,this.body)
   this.Visiblity=255
   this.remove = true;
   }
  display()
  {
    if(this.body.speed<5)
  {
   var pos = this.body.position
  push()
 translate(pos.x,pos.y)
 strokeWeight("4")
 stroke("black")
 fill("yellow")
 rect(0,0,this.width,this.height)
 pop()
}
else
{
World.remove(myworld,this.body) 
if(this.remove===true)
     {
       score=score+50; 
       this.remove = false
     } 
// push();
// this.Visiblity=this.Visiblity-5;
// tint(255,this.Visiblity)
// rect(999,999,this.width,this.height)
// pop()
  }
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105)
     {
     score++;
    }
  }
  }
  
  
  
