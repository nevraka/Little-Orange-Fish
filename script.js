//Music
let audio = new Audio('');
let sound = new Audio('');
let gameOverSong = new Audio('');

//Images

const bg = new Image();
bg.src = './images/background.png';

const fishOrange = new Image();
fishOrange.src = './images/player.png';

const fishBlue = new Image();
fishBlue.src = './images/enemy.png';

const shark = new Image();
shark.src = './images/shark.png';

//Game class
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Fish(this, fishOrange);
    this.player.x = this.player.width;
  }

  updateSpeed = () => {
    if (this.score >= 20) {
      this.speed = 3;
    } else if (this.score >= 15) {
      this.speed = 2;
    } else if (this.score >= 10) {
      this.speed = 1.2;
    } else {
      this.speed = 1;
    }
  };

  reset = () => {
    this.isGameOver = false;
    this.score = 0;
    this.speed = 1;
    this.friendFish = [];
    for (let i = 0; i < 8; i++) {
      this.friendFish.push(new Fish(this, fishBlue));
    }
    this.enemyFish = [];
    for (let i = 0; i < 5; i++) {
      this.enemyFish.push(new Fish(this, shark));
    }
  };

  printScore = () => {
    this.ctx.font = "30px 'Boogaloo'";
    this.ctx.fillStyle = '#a00';
    this.ctx.fillText(`SCORE: ${this.score}`, 40, 60);
  };

  width = () => {
    return this.canvas.width;
  };

  height = () => {
    return this.canvas.height;
  };

  draw = () => {
    this.ctx.drawImage(bg, 0, 0, this.width(), this.height());

    this.friendFish.forEach((friend) => {
      friend.move();
      friend.checkInFrame();
      if (friend.collision(this.player)) {
        this.score++;
        this.updateSpeed();
        friend.recycle();
      }
      friend.draw();
    });

    this.enemyFish.forEach((enemy) => {
      enemy.move();
      enemy.checkInFrame();
      if (enemy.collision(this.player)) {
        this.gameOver();
      }
      enemy.draw();
    });

    this.player.keepInFrame();
    this.player.draw();
    this.printScore();

    if (!this.isGameOver) {
      requestAnimationFrame(this.draw);
    }
  };

  start = () => {
    this.reset();
    this.draw();
    document.getElementById('startgame').style.display = 'none';
    document.getElementById('gamecanvas').style.display = 'block';
    document.getElementById('gameover').style.display = 'none';
  };

  gameOver = () => {
    this.isGameOver = true;
    document.getElementById('startgame').style.display = 'none';
    document.getElementById('gamecanvas').style.display = 'none';
    document.getElementById('gameover').style.display = 'block';
    document.getElementById('gameoverscore').innerText = this.score;
  };
}

let game = null;

window.addEventListener('load', () => {
  let canvas = document.getElementById('gamecanvas');
  document.getElementById('startgame').style.display = 'block';
  document.getElementById('gameover').style.display = 'none';
  document.getElementById('gamecanvas').style.display = 'none';

  canvas.style.backgroundColor = 'none';
  canvas.width = 1400;
  canvas.height = 650;

  game = new Game(canvas);

  window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        game.player.y -= 10;
        break;
      case 'ArrowDown':
        game.player.y += 10;
        break;
    }
  });
  document.getElementById('start').addEventListener('click', () => {
    game.start();
  });
  document.getElementById('restart').addEventListener('click', () => {
    game.start();
  });
});
