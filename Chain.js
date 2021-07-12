class Chain
{
 constructor(bodyA,pointB)
 {
   var options =
   {
     bodyA: bodyA,
     pointB: pointB,
     stifness: 0.2,
     length:20
   }
   this.pointB = pointB
   this.chain = Constraint.create(options)
   World.add(myworld,this.chain)
 }

 attach(body) 
 {
   this.chain.bodyA = body;
 }
    fly()
    {
        this.chain.bodyA = null;
    }

    display()
    {
      if(this.chain.bodyA)
      {
       var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push()

            strokeWeight(4);
            fill("red")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            pop()
      }

      }
    }