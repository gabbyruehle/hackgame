import {
  Sprite,
  Container,
  Application
} from "pixi.js";

const app: Application = new Application(600, 450);
document.body.appendChild(app.view);

let background: Sprite = Sprite.fromImage("./desert.jpg");
app.stage.addChild(background);

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


