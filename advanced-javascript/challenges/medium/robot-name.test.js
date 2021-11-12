let Robot = require('./robot-name.js');
Math.seedrandom = require('seedrandom');

describe("Robot Name", () => {
  const NAME_REGEXP = /^[A-Z]{2}\d{3}$/;
  const DIFFERENT_ROBOT_NAME_SEED = 1234;
  const SAME_INITIAL_ROBOT_NAME_SEED = 1000;

  test("has name", () => {
    expect(new Robot().name()).toMatch(NAME_REGEXP);
  });

  test("name sticks", () => {
    let robot = new Robot();
    let name = robot.name();
    expect(robot.name()).toBe(name);
  });

  test("different robots have different names", () => {
    Math.seedrandom(DIFFERENT_ROBOT_NAME_SEED);

    let robot1 = new Robot();
    let robot2 = new Robot();

    expect(robot1.name()).not.toBe(robot2.name());
  });

  test("different name when chosen name is taken", () => {
    Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
    let robot1 = new Robot();
    Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
    let robot2 = new Robot();
    expect(robot1.name()).not.toBe(robot2.name());
  });

  test("reset name", () => {
    Math.seedrandom(DIFFERENT_ROBOT_NAME_SEED);

    let robot = new Robot();
    let name1 = robot.name();
    robot.reset();
    let name2 = robot.name();

    expect(name1).not.toBe(name2);
  });
});