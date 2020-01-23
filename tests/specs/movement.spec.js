"use strict";

import Robot from "./../../src/robot";
import Table from "./../../src/table";
import Direction from "./../../src/utils/direction";
import chai from "chai";
const expect = chai.expect;

export default () => {
    describe("Checks robot to move in the appropriate directions", () => {

        it("should move the robot to left on the table", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(2, 2, Direction.NORTH);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            //expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 2, y: 2, direction: Direction.NORTH });

            expect(robot.GetRobotPosition()).to.be.equal("2, 3, NORTH");

            executionResult = robot.RotateToLeft();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            //expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 2, y: 2, direction: Direction.WEST });

            expect(robot.GetRobotPosition()).to.be.equal("2, 2, WEST");

            executionResult = robot.Move();
            expect(executionResult).to.be.equals(true);
            //expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 1, y: 2, direction: Direction.WEST });

            expect(robot.GetRobotPosition()).to.be.equal("1, 2, WEST");

            executionResult = robot.RotateToRight();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            //expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 1, y: 2, direction: Direction.NORTH });

            expect(robot.GetRobotPosition()).to.be.equal("1, 2, NORTH");
        });
    });
};
