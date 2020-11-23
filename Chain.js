
class chain{
    constructor(bodyA , pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.02,
            length:50
          }
           this.body = Constraint.create(options);
           this.pointB = pointB 
           //this.image1 = loadImage("sprites/sling1.png");
           //this.image2 = loadImage("sprites/sling2.png");
           //this.image3 = loadImage("sprites/sling3.png");
           World.add(world ,this.body);  

                  
   }
    fly(){
        this.body.bodyA = null; 

    }
    attach(body){
        this.body.bodyA = body;
    }


     display(){

      
        if (this.body.bodyA !=null){
            var point1 = this.body.bodyA.position
            strokeWeight(50);
            stroke("black");
            fill("black");
          
            var point2 = this.pointB;
            line(point1.x ,point1.y , point2.x-20, point2.y+30); 
            //line(point1.x , point1.y , point2.x+30 , point2.y+40);
        } 
    }
}