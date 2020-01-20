import Abstract from "./abstract";
import Direction from "../utils/direction";
import Command from "./command";
import _ from "lodash";

export default class extends Abstract {
  /**
   * Rotates robot to 90 degree clockwise
   * @param {Command} command
   */
  static Execute(command) {

    const directions = Object.keys(Direction);

    let result = _.findIndex(directions, item =>
      _.isEqual(item, command.Direction)
    );

    let selectedDirection = null;
    if (result === _.size(directions) - 1) selectedDirection = directions[0];
    else selectedDirection = directions[result + 1];
    return new Command(command.X, command.Y, selectedDirection);
  }
}