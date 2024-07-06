class RobotCoffee001 {
  serverAmericanCoffee() {
    return "american coffee";
  }

  getBill() {
    return "bill";
  }
}

class RobotCoffee002 extends RobotCoffee001 {
  serverFrapuchino() {
    return "frapuchino";
  }
}

const robot = new RobotCoffee002();
console.log(robot.serverFrapuchino());
console.log(robot.serverAmericanCoffee());
console.log(robot.getBill());
