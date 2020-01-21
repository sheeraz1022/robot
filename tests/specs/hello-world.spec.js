"use strict";

import chai from "chai";
const expect = chai.expect;

export default () => {
    describe("Runs a hello world", () => {
        it("should just run and remain silent", () => {
            return expect(true).to.be.true;
        });
    });
};
