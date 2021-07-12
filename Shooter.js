class Shooter 
{
   constructor(x,y)
   {
      var options = {density:1}
      this.body = Bodies.circle(x,y,20,options)
      World.add(myworld,this.body)
      this.radius = 20
   }
   display()
   {

   fill("green")
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)

}

}