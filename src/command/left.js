import Abstract from "./abstract";
import Direction from "../utils/direction";
import Command from "./command";
import { isEqual, findIndex, size } from "lodash";

export default class extends Abstract {
  /**
   * Rotates robot to 90 degree anti-clockwise
   * @param {Command} command
   */
  static Execute(command) { 

    const directions = Object.keys(Direction);
    let result = findIndex(directions, item =>
      isEqual(item, command.Direction)
    );
    let selectedDirection = null;
    if (result === 0) selectedDirection = directions[size(directions) - 1];
    else selectedDirection = directions[result - 1];

    return new Command(command.X, command.Y, selectedDirection);
  }
}
