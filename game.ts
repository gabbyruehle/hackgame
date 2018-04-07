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
            this.sprite = Sprite.fromImage("./bullet.png");
            this.sprite.y = shooter1.y;
            this.sprite.x = shooter1.x;
            this.sprite.scale.x = .12;
            this.sprite.scale.y = .12;
            app.stage.addChild(this.sprite);
            console.log("Added to stage");
        }
    }
    class Bullet2 {
        sprite: Sprite;
        direction: number = -1; // made negative
        constructor() {
            this.sprite = Sprite.fromImage("./bullet.png");
            this.sprite.y = shooter2.y;
            this.sprite.x = shooter2.x;
            this.sprite.scale.x = .12;
            this.sprite.scale.y = .12;
            this.sprite.rotation = 3.14;
            app.stage.addChild(this.sprite);
            console.log("Added to stage");
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

let D: boolean = false;
let U: boolean = false;
let S: boolean = false;
let U2: boolean = false;
let D2: boolean = false;
let S2: boolean = false;

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
        S = true;
        let B: Bullet1 = new Bullet1();
        append(bullets1, B);
    }
    if (e.keyCode === UP1) {
        U = true;
        shooter1.y -= STEP;
    } else if (e.keyCode === DOWN1) {
        D = true;
        shooter1.y += STEP;
    } 
    if (e.keyCode === SHOOT2) {
        console.log("Shot");
        S2 = true;
        let B2: Bullet2 = new Bullet2();
        append(bullets2, B2);
    }
    if (e.keyCode === UP2) {
        U2 = true;
        shooter2.y -= STEP;
    } else if (e.keyCode === DOWN2) {
        D2 = true;
        shooter2.y += STEP;
    }
},                      false);

window.addEventListener("keyup", (e: KeyboardEvent): void => {
    console.log("key: " + e.keyCode);
    const SHOOT1: number = 68;
    const UP1: number = 87;
    const DOWN1: number = 83;
    const SHOOT2: number = 37;
    const UP2: number = 38;
    const DOWN2: number = 40;
    const STEP: number = 5;
    if (e.keyCode === SHOOT1) {
        S = false;
    }
    if (e.keyCode === UP1) {
        U = false;
    } else if (e.keyCode === DOWN1) {
        D = false;
    }
    if (e.keyCode === SHOOT2) {
        S2 = false;
    }
    if (e.keyCode === UP2) {
        U2 = false;
    } else if (e.keyCode === DOWN2) {
        D2 = false;
    }
},                      false);


let append = <T>(a: T[], item: T): void => {
        a[a.length] = item;
    };

let bullets1: Bullet1[] = [];

let bullets2: Bullet2[] = [];

app.ticker.add((delta: number): void => {
    let STEP = 5;
    if (U) {
        shooter1.y -= STEP;
    }
    if (U2) {
        shooter2.y -= STEP;
    }
    if (D) {
        shooter1.y += STEP;
    }
    if (D2) {
        shooter2.y += STEP;
    }
    if (bullets1.length !== 0) {
            for (let i: number = 0; i < bullets1.length; i++) {
                let bb1: Bullet1 = bullets1[i];
                bb1.sprite.x += 5 * bb1.direction;
            }
    }        
    if (bullets2.length !== 0) {
            for (let i: number = 0; i < bullets2.length; i++) {
                let bb2: Bullet2 = bullets2[i];
                bb2.sprite.x += 5 * bb2.direction;
            }
    }
});

