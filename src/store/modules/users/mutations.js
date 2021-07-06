import { LOADING, LIST, SELECTED } from "./state";

export const SET_LOADING = "setLoading";
export const SET_LIST = "setList";
export const ADD_TO_SELECTED = "addToSelected";
export const REMOVE_FROM_SELECTED = "removeFromSelected";

export default {
  [SET_LOADING](state, payload) {
    state[LOADING] = payload;
  },
  [SET_LIST](state, payload) {
    state[LIST] = payload;
  },
  [ADD_TO_SELECTED](state, payload) {
    state[SELECTED].push(payload);
  },
  [REMOVE_FROM_SELECTED](state, payload) {
    const item = state[SELECTED].find((item) => item.id === payload);
    const index = state[SELECTED].indexOf(item);
    state[SELECTED].splice(index, 1);
  },
};
