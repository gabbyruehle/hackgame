import {
  Sprite,
  Container,
  Application
} from "pixi.js";

const app: Application = new Application(600, 450);
document.body.appendChild(app.view);

let background: Sprite = Sprite.fromImage("./desert.jpg");
app.stage.addChild(background);

class Bullet1 {
    sprite: Sprite; 
    direction: number = 1;
    constructor() {
        this.sprite = Sprite.fromImage("bullet.png");
        this.sprite.y = shooter1.y;
        this.sprite.x = 40;
        this.sprite.scale.x = .12;
        this.sprite.scale.y = .12;
    }
}

let shooter1: Sprite = Sprite.fromImage("katniss-edit.jpg");
shooter1.scale.x = .3;
shooter1.scale.y = .3;
shooter1.x = 40;
shooter1.y = 240;
app.stage.addChild(shooter1);

let shooter2: Sprite = Sprite.fromImage("./tonsofthings.jpg");
shooter2.scale.x = .5;
shooter2.scale.y = .5;
shooter2.x = 500;
shooter2.y = 240;
app.stage.addChild(shooter2);

window.addEventListener("keydown", (e: KeyboardEvent): void => {
    console.log("key: " + e.keyCode);
    const SHOOT1: number = 68;
    const UP1: number = 87;
    const DOWN1: number = 83;
    const SHOOT2: number = 37;
    const UP2: number = 38;
    const DOWN2: number = 40;
    const STEP: number = 5;
    if (e.keyCode === SHOOT1) {
        // ADD NEW BULLET SHOOTER1
        // S1 = true;
        let B: Bullet1 = new Bullet1;
        app.stage.addChild(B.sprite);
    } 
    } else if (e.keyCode === UP1) {
        shooter1.y -= STEP;
    } else if (e.keyCode === DOWN1) {
        shooter1.y += STEP;
    } else if (e.keyCode === SHOOT2) {
        // ADD NEW BULLET (DIRECTION LEFT)
    } else if (e.keyCode === UP2) {
        shooter2.y -= STEP;
    } else if (e.keyCode === DOWN2) {
        shooter2.y += STEP;
    }
},                      false);
