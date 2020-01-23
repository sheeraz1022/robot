"use strict";

import Robot from "./../../src/robot";
import Table from "./../../src/table";
import Direction from "./../../src/utils/direction";

import chai from "chai";
const expect = chai.expect;

export default () => {

    describe("Creates a robot on an arbitary table", () => {
        it("should create a robot", () => {
            let robot = new Robot(new Table(5, 5));
            expect(typeof robot.PlaceRobot).to.be.equals('function');
            expect(typeof robot.RotateToRight).to.be.equals('function');
            expect(typeof robot.RotateToLeft).to.be.equals('function');
            expect(typeof robot.Move).to.be.equals('function');
            expect(typeof robot.GetRobotPosition).to.be.equals('function');
        });
    });

    describe("Creation of robot and placement", () => {
        it("should create a robot and report without placing on table", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.GetRobotPosition();
            expect(executionResult).to.be.null;
        });

        it("should create a robot and place outside boundaries of table", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(5, 5, Direction.NORTH);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.null;
        });

        it("should create a robot and place it at 1, 1 with North direction", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(1, 1, Direction.NORTH);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.equal("1, 1, NORTH");

        });

        it("should create a robot and place it at 0, 0 with West direction", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(0, 0, Direction.WEST);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal("0, 0, WEST");
        });

        it("shouldn't move the robot, as it will be at the edge of bottom left", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(0, 0, Direction.WEST);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.equal("0, 0, WEST");

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.equal("0, 0, WEST");

            executionResult = robot.PlaceRobot(0, 0, Direction.SOUTH);
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.equal("0, 0, SOUTH");

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.equal("0, 0, SOUTH");
        });

        it("shouldn't move the robot, as it will be at the edge of bottom right", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(4, 0, Direction.EAST);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.equal("4, 0, EAST");

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.equal("4, 0, EAST");

            executionResult = robot.PlaceRobot(4, 0, Direction.SOUTH);
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.equal("4, 0, SOUTH");

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.equal("4, 0, SOUTH");
        });

        it("shouldn't move the robot, as it will be at the edge of top left", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(0, 4, Direction.NORTH);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.equal("0, 4, NORTH");

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.equal("0, 4, NORTH");

            executionResult = robot.PlaceRobot(0, 4, Direction.WEST);
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.equal("0, 4, WEST");

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.equal("0, 4, WEST");
        });

        it("shouldn't move the robot, as it will be at the edge of top right", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(4, 4, Direction.EAST);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.equal("4, 4, EAST");

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.equal("4, 4, EAST");

            executionResult = robot.PlaceRobot(4, 4, Direction.NORTH);
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.equal("4, 4, NORTH");

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.equal("4, 4, NORTH");
        });
    });
}