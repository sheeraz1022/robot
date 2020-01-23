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
        it("should create a robot and place it at 1, 1 with North direction", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(1,1,Direction.NORTH);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 1, y: 1, direction: Direction.NORTH });
        });

        it("should create a robot and place it at 0, 0 with West direction", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(0,0,Direction.WEST);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 0, y: 0, direction: Direction.WEST });
        });

        it("shouldn't move the robot, as it will be at the edge of bottom left", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(0,0,Direction.WEST);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 0, y: 0, direction: Direction.WEST });

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 0, y: 0, direction: Direction.WEST });

            executionResult = robot.PlaceRobot(0,0,Direction.SOUTH);
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 0, y: 0, direction: Direction.SOUTH });

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 0, y: 0, direction: Direction.SOUTH });
        });

        it("shouldn't move the robot, as it will be at the edge of bottom right", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(4,0,Direction.EAST);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 4, y: 0, direction: Direction.EAST });

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 4, y: 0, direction: Direction.EAST });

            executionResult = robot.PlaceRobot(4,0,Direction.SOUTH);
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 4, y: 0, direction: Direction.SOUTH });

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 4, y: 0, direction: Direction.SOUTH });
        });

        it("shouldn't move the robot, as it will be at the edge of top left", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(0,4,Direction.NORTH);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 0, y: 4, direction: Direction.NORTH });

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 0, y: 4, direction: Direction.NORTH });

            executionResult = robot.PlaceRobot(0,4,Direction.WEST);
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 0, y: 4, direction: Direction.WEST });

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 0, y: 4, direction: Direction.WEST });
        });

        it("shouldn't move the robot, as it will be at the edge of top right", () => {
            let robot = new Robot(new Table(5, 5));
            let executionResult = robot.PlaceRobot(4,4,Direction.EAST);

            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 4, y: 4, direction: Direction.EAST });

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 4, y: 4, direction: Direction.EAST });

            executionResult = robot.PlaceRobot(4,4,Direction.NORTH);
            expect(executionResult).to.be.equals(true);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 4, y: 4, direction: Direction.NORTH });

            executionResult = robot.Move();
            expect(typeof executionResult).to.be.equals('boolean');
            expect(executionResult).to.be.equals(false);
            expect(robot.GetRobotPosition()).to.be.deep.equal({ x: 4, y: 4, direction: Direction.NORTH });
        });
    });
}