import Direction from "./direction";
import { find, isEqual, isEmpty } from "lodash";

/**
 * Parse the provided string and validate the cardinal direction
 */

export default text => {
  let result = find(Object.keys(Direction), n => isEqual(text.toUpperCase(), n));
  if (isEmpty(result))
    throw new Error("Provided string is not a valid cardinal direction");
  return result;
};
