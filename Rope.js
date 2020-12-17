class Rope {
    constructor(body1, body2){

        //this.offsetX=offsetX;
      //  this.offsetY=offsetY;

     var options={
         bodyA:body1,
         bodyB:body2,
         pointB: {x:this.offsetX, y:this.offsetY}
     }
     this.rope=Constraint.create(options);
     World.add(world, this.rope);

    }
    display(){
        var Body1 = this.rope.body1.position;
        var Body2 = this.rope.body2.position;
 
     strokeWeight(5);
     line(Body1.x,Body1.y,Body2.x,Body2.y)
    }
 }