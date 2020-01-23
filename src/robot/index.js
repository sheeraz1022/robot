import { isEmpty } from "lodash";
import Command from "../command/command";
import Place from "../command/place"
import Left from "../command/left"
import Right from "../command/right"
import Move from "../command/move"


export default class Robot {
  /**
   * Construct a Robot within the boundaries of the table
   * @param {Table} table
   */
  constructor(table) {
    this.table = table;
    this.robot = null;
  }

  /**
   * Hang around within the boundaries of the table
   * @param {Command} command
   */
  _safeToHangAround(intentedCommand) {
    let tableEdges = this.table.Edges;
    return (
      intentedCommand.X <= tableEdges.x2 &&
      intentedCommand.X >= tableEdges.x1 &&
      intentedCommand.Y <= tableEdges.y2 &&
      intentedCommand.Y >= tableEdges.y1
    );
  }

  /**
   * Updates intended state of Robot
   * @param {Command} command
   */
  _changeRobotState(command) {
    this.robot = { position: command };
    return true;
  }

  /**
   * Execute the command to change Robot's position or Orientation within boundaries
   * @param {Command} command
   */
  _execute(command) {
    if (!isEmpty(this.robot)) {
      let commandResult = command.Execute(this.robot.position);
      if (this._safeToHangAround(commandResult)) {
        return this._changeRobotState(commandResult);
      }
    }
    return false;
  }


  /**
   * To place the Robot on the table within boundaries
   */
  PlaceRobot(x, y, direction) {
    let result = Place.Execute(new Command(x, y, direction));

    if (this._safeToHangAround(result)) {
      return this._changeRobotState(result);
    }

    return false;
  }

  /**
   * To rotate the Robot in 90 degrees clockwise
   */
  RotateToRight() {
    return this._execute(Right);
  }

  /**
   * To rotate the Robot in 90 degrees anti-clockwise
   */
  RotateToLeft() {
    return this._execute(Left);
  }

  /**
   * To move the Robot in same direction
   */
  Move() {
    return this._execute(Move);
  }

  /**
   * To get the current position of the Robot
   */
  GetRobotPosition() {
    if (!isEmpty(this.robot)) {
      return this.robot.position.X + ', ' + this.robot.position.Y + ', ' + this.robot.position.Direction;
    }
    return null;
  }


}
