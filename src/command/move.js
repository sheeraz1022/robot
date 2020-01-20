import Abstract from "./abstract";
import Direction from "../utils/direction";
import Command from "./command";

export default class extends Abstract {
  /**
   * Moves robot one unit further in the same direction
   * @param {Command} command
   */
  static Execute(command) {
    let intendedX = command.X;
    let intendedY = command.Y;

    switch (command.Direction) {
      case Direction.EAST:
        ++intendedX;
        break;

      case Direction.WEST:
        --intendedX;
        break;

      case Direction.NORTH:
        ++intendedY;
        break;

      case Direction.SOUTH:
        --intendedY;
        break;
    }

    return new Command(intendedX, intendedY, command.Direction);
  }
}
