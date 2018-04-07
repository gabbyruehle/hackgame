import {
  Sprite,
  Container,
  Application
} from "pixi.js";


let shooter2: Sprite = Sprite.fromImage("./tonsofthings.jpg");
shooter2.scale.x = .5;
shooter2.scale.y = .5;
shooter2.x = 500;
shooter2.y = 240;
app.stage.addChild(shooter2);
