class block{
    constructor(x,y,width,height){
        var options =  {
            isStatic:false,
            restitution:0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height;
        this.Visibility = 255;
        World.add(world , this.body)
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed <5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
        
      }
    }
    score(){
        if(this.Visibility<0 && this.Visibility > -9999999){
            score = score + 5;
        }
    }

}