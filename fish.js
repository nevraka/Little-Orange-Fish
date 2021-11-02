class Fish {
  constructor(game, img) {
    this.game = game;
    this.width = 120;
    this.height = 100;
    this.x = game.width() + Math.random() * game.width();
    this.y = Math.random() * (game.height() - this.height);
    this.ctx = game.ctx;
    this.opacity = 1;
    this.img = img;
    this.speed = 2;
    this.direction();
  }

  draw = () => {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  move = () => {
    this.x += this.dx * this.speed * this.game.speed;
  };

  checkInFrame = () => {
    if (this.x + this.width < 0) {
      this.recycle();
    }
  };

  recycle = () => {
    this.x = this.game.width();
    this.y = Math.random() * (game.height() - this.height);
  };

  keepInFrame = () => {
    if (this.x + this.width > this.game.width()) {
      this.x = this.game.width() - this.width;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y + this.height > this.game.height()) {
      this.y = this.game.height() - this.height;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  };

  collision = (fish) => {
    if (
      this.x < fish.x + fish.width &&
      this.x + this.width > fish.x &&
      this.y < fish.y + fish.height &&
      this.height + this.y > fish.y
    ) {
      return true;
    }
    return false;
  };

  direction = () => {
    this.dx = -2;
  };
}
