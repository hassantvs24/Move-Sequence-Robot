let config = {
    pointer: 50,
    direction: 'E',
    dimentionX: 5,
    dimentionY: 5,
    xaxis: 0+1,
    yaxis: 4-2,
    width: function(){
        return this.pointer * this.dimentionX;
    },
    height: function(){
        return this.pointer * this.dimentionY;
    },
    positionX: function(){
        return this.xaxis * this.pointer;
    },
    positionY: function(){
        return this.yaxis * this.pointer;
    }
}

function startGame() {
    myGameArea.start();
    myGamePiece = new component(config.pointer, config.pointer, "red", config.positionX(), config.positionY());
  }
  
  var myGameArea = {
    canvas : document.getElementById("myCanvas"),
    start : function() {
      this.canvas.width = config.width();
      this.canvas.height = config.height();
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
  }

  function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
