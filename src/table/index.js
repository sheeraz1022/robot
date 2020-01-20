/**
 * Creating a table with dimensions X * Y for robot
 */

export default class {
/**
 * Dimentions of the table
 * @param {int} valueX
 * @param {int} valueY
 */
    constructor(dimensionX, dimensionY) {
      this.valueX = dimensionX;
      this.valueY = dimensionY;
    }

/**
 * Get the table edges
*/
    get Edges() {
        return {
            x1: 0,
            y1: 0,
            x2: this.valueX -1,
            y2: this.valueY -1,
        };
    }
}