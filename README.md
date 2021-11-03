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

Backlog elements.

## Data structure

add scoreboard and list
add diffrent size of fish

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

Definition of the different states and their transition (transition functions)

## Task

Task definition in order of priority

## Additional Links

### Trello

[Link url](https://trello.com)

### Slides

[Link Slides.com](http://slides.com)
