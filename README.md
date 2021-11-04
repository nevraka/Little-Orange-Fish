# Little Orange Fish

[Link Deploy](https://nevraka.github.io/Little-Orange-Fish/)

## Description

Little Orange Fish is a catching game with shark, blue fish and player fish. The orange color fish represents a player.
There are also sharks and blue fish characters in the game. They move to the right-left direction on the main game page.
The game's goal is to collect points by touching the blue fish.
The game ends when shark touches player fish. Otherwise game continues until the player loses.

## MVP

- There are orange player fish, sharks and blue fish in the sea.
- The player controls the orange fish vertically in main game.
- Other fish swim from the right edge from screen.
- If blue fish touches the player, the player gains a score.
- Otherwise, a shark touches the player, the game is over.
- Speed will increase after certain scores.

## Backlog

- add Scoreboard and list
- add diffrent size of fish

## Data structure

## script.js()

- Game() {this.canvas;this.ctx;this.player;this.audio}
- updateSpeed(){}
- reset(){}
- printScore(){}
- width(){}
- height(){}
- draw(){}
- start(){}
- gameOver(){}

## fish.js()

- Fish(){this.game;this.width;this.height;this.x;this.y;this.ctx;this.img;this.speed;this.direction()}
- draw(){}
- move(){}
- checkInFrame(){}
- recycle(){}
- keepInFrame(){}
- collision(fish){}
- start(){}
- gameOver(){}

Classes and methods definition. Or functions.

## States y States Transitions

- Start Screen
- Game Screen
- Game Over Screen

### Trello

[Link url]

### Slides

[Link Google Doc](https://docs.google.com/presentation/d/13Y5z4_iVt_VWFA24dCejnMPTwRXE19nixSCiUSF2oyg/edit?usp=sharing)
