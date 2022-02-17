import { SportsController } from "./Controllers/SportsController.js";

class App {
  sportsController = new SportsController()
}

window["app"] = new App();
