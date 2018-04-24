import {
    Sprite,
    Container,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text
} from "pixi.js";

export let main = async () => {

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
            this.sprite.scale.x = .08;
            this.sprite.scale.y = .08;
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
            this.sprite.scale.x = .08;
            this.sprite.scale.y = .08;
            this.sprite.rotation = 3.14;
            app.stage.addChild(this.sprite);
            console.log("Added to stage");
        }
    }

    let shooter1: Sprite = Sprite.fromImage("./katniss-edit.jpg");
    shooter1.scale.x = .3;
    shooter1.scale.y = .3;
    shooter1.x = 40;
    shooter1.y = 340;
    app.stage.addChild(shooter1);

    let shooter2: Sprite = Sprite.fromImage("./tonsofthings.jpg");
    shooter2.scale.x = .5;
    shooter2.scale.y = .5;
    shooter2.x = 500;
    shooter2.y = 40;
    app.stage.addChild(shooter2);

    /* let shield: Sprite = Sprite.fromImage(/* put sometime here *//*);
    shield.x = 220;
    app.stage.addChild(shield); */

    /* let bullet1: Sprite = Sprite.fromImage("./bullet.png");
    bullet1.scale.x = .12;
    bullet1.scale.y = .12;
    bullet1.y = shooter2.y;
    bullet1.x = 300;
    app.stage.addChild(bullet1);
    
    let bullet2: Sprite = Sprite.fromImage("./bullet.png");
    bullet2.scale.x = .12;
    bullet2.scale.y = .12;
    bullet2.y = shooter2.y;
    bullet2.x = 300;
    bullet2.rotation = 3.14;
    app.stage.addChild(bullet2); */

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

    let isColliding = (a: DisplayObject, b: DisplayObject): boolean => {
        let ab: Rectangle = a.getBounds();
        let bb: Rectangle = b.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    };

    let isDead1 = (a: DisplayObject, b: Bullet2[]): boolean => {
        for (let i: number = 0; i < b.length; i++) {
            let bb = b[i].sprite;
            if (isColliding(a, bb)) {
                handleWin2();
                return true;
            }
        }
        return false;
    };
    let isDead2 = (a: DisplayObject, b: Bullet1[]): boolean => {
        for (let i: number = 0; i < b.length; i++) {
            let bb = b[i].sprite;
            if (isColliding(a, bb)) {
                handleWin1();
                return true;
            }
        }
        return false;
    };
    let isNewGame = (a: DisplayObject, b: Bullet1[]): boolean => {
        for (let i: number = 0; i < b.length; i++) {
            let bb = b[i].sprite;
            if (isColliding(a, bb)) {
                return true;
            }
        }
        return false;
    };
    

    let hasWon1: boolean = false;
    let hasWon2: boolean = false;
    let message1: Text = new Text("Player1 Wins!");
    let messageBox1: Graphics = new Graphics();
    let message2: Text = new Text("Player2 Wins!");
    let messageBox2: Graphics = new Graphics();

    let handleWin1 = (): void => {
        message1.x = 35;
        message1.y = 90;
        message1.style.fill = 0xffffff;
        messageBox1.beginFill(0x4444aa, 0.4);
        messageBox1.drawRect(0, 0, 175, 50);
        messageBox1.x = 30;
        messageBox1.y = 80;
        app.stage.addChild(messageBox1);
        app.stage.addChild(message1);
        hasWon1 = true;
    };
    let handleWin2 = (): void => {
        message2.x = 400;
        message2.y = 390;
        message2.style.fill = 0xffffff;
        messageBox2.beginFill(0x4444aa, 0.4);
        messageBox2.drawRect(0, 0, 175, 50);
        messageBox2.x = 400;
        messageBox2.y = 380;
        app.stage.addChild(messageBox2);
        app.stage.addChild(message2);
        hasWon2 = true;
    };

    let resetGame = (): void => {
        shooter1.x = 40;
        shooter1.y = 340;
        shooter2.x = 500;
        shooter2.y = 40;
        for (let i: number = 0; i < bullets1.length; i++) {
            let aa = bullets1[i].sprite;
            app.stage.removeChild(aa);
        }
        for (let i: number = 0; i < bullets2.length; i++) {
            let bb = bullets2[i].sprite;
            app.stage.removeChild(bb);
        }
    };

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
        // add in moving shield
        if (!hasWon1 && !hasWon2) {
            if (isDead1(shooter1, bullets2)) {   
                resetGame();
            }
            if (isDead2(shooter2, bullets1)) {   
                resetGame();
            } 
        }
        
        
        if (isColliding(shooter1, messageBox1) && hasWon1) {
            hasWon1 = false;
            // hasWon2 = false;
            app.stage.removeChild(message1);
            app.stage.removeChild(messageBox1);
            resetGame();
            
            
        }
        if (isColliding(shooter2, messageBox2) && hasWon2) {
            hasWon2 = false;
            // hasWon1 = false;
            app.stage.removeChild(message2);
            app.stage.removeChild(messageBox2);
            resetGame();
            
            
        }
        
        
       
    });
    
};
main();
