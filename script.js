const bg = new Image();
bg.src = './images/background.png';

const fishOrange = new Image();
fishOrange.src = './images/player.png';

const fishBlue = new Image();
fishBlue.src = './images/enemy.png';

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.score = 0;
    this.gameFrame = 0;
    this.ctx.font = '50px Georgia';
    this.player = new Fish(this, fishOrange, 1);
    this.enemies = [];
    for (let i = 0; i < 10; i++) {
      this.enemies.push(new Fish(this, fishBlue, 1));
    }
  }
  width = () => {
    return this.canvas.width;
  };

  height = () => {
    return this.canvas.height;
  };

  draw = () => {
    this.ctx.drawImage(bg, 0, 0, this.width(), this.height());

    this.player.draw();
    this.enemies.forEach((enemy) => {
      enemy.move();
      enemy.draw();
    });

    requestAnimationFrame(this.draw);
  };
}

let game = null;

window.addEventListener('load', () => {
  let canvas = document.getElementById('gamecanvas');
  document.getElementById('startgame').style.display = 'block';
  document.getElementById('gameover').style.display = 'none';
  document.getElementById('gamecanvas').style.display = 'none';

  canvas.style.backgroundColor = 'none';
  canvas.style.border = '2px solid black';
  canvas.width = 1000;
  canvas.height = 600;

  game = new Game(canvas);
  game.draw();

  window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        game.player.x -= 10;
        break;
      case 'ArrowRight':
        game.player.x += 10;
        break;
      case 'ArrowUp':
        game.player.y -= 10;
        break;
      case 'ArrowDown':
        game.player.y += 10;
        break;
    }
  });
  document.getElementById('start').addEventListener('click', () => {
    document.getElementById('startgame').style.display = 'none';
    document.getElementById('gamecanvas').style.display = 'block';
  });
});
