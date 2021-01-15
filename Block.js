class Block {

    constructor(x, y, width, height) {

        var options={
          restitution : 0.7,
          friction : 0.6,
          isStatic : false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("img/boy.png")
        World.add(world, this.body);

      }

      display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image ,this.body.position.x,this.body.position.y,40,40);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
    }