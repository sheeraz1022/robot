// import prompt from 'prompt';
import _ from "lodash";
// import Executor from "./src/robot/executor";
// import Robot from "./src/robot";
import Table from "./../../src/table";

import chai from "chai";
const expect = chai.expect;

export default () => {
    describe("Creates a table of justified area", () => {

        it("should check table interface", () => {
            let table = new Table(5, 5);
            expect(typeof table.Edges).to.be.equals('object');
        });
        
        it("should create a 5x5 table", () => {
            let table = new Table(5, 5);
            expect(table.Edges).to.be.deep.equal({
                x1: 0,
                y1: 0,
                x2: 4,
                y2: 4,
            });
        });

        it("should create a 2x9 table", () => {
            let table = new Table(2, 9);
            expect(table.Edges).to.be.deep.equal({
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 8,
            });
        });

        it("should create a 7x3 table", () => {
            let table = new Table(7, 3);
            expect(table.Edges).to.be.deep.equal({
                x1: 0,
                y1: 0,
                x2: 6,
                y2: 2,
            });
        });
    });
};
