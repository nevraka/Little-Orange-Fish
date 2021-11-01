class Fish {
  constructor(game, img, size) {
    this.game = game;
    this.x = Math.random() * game.width();
    this.y = Math.random() * game.height();
    this.size = size;
    this.ctx = game.ctx;
    this.speed = 2;
    this.opacity = 1;
    this.img = img;
    this.randomDirection();
  }

  width = () => {
    return Math.log(this.size + 1) * 100;
  };

  height = () => {
    return Math.log(this.size + 1) * 50;
  };

  draw = () => {
    this.keepInFrame();
    this.ctx.drawImage(this.img, this.x, this.y, this.width(), this.height());
  };

  move = () => {
    this.x += this.dx;
    this.y += this.dy;
  };

  keepInFrame = () => {
    if (this.x + this.width() > this.game.width()) {
      this.x = this.game.width() - this.width();
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y + this.height() > this.game.height()) {
      this.y = this.game.height() - this.height();
    }
    if (this.y < 0) {
      this.y = 0;
    }
  };

  randomDirection = () => {
    this.dx = (Math.random() - 0.5) * this.speed;
    this.dy = (Math.random() - 0.5) * this.speed;
  };
}
