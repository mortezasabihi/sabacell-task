import { SELECTED } from "./state";

export const SELECTED_LENGTH = "selectedLength";

export default {
  [SELECTED_LENGTH]: (state) => state[SELECTED].length,
};
