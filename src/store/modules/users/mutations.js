import { LOADING, LIST } from "./state";

export const SET_LOADING = "setLoading";
export const SET_LIST = "setList";

export default {
  [SET_LOADING](state, payload) {
    state[LOADING] = payload;
  },
  [SET_LIST](state, payload) {
    state[LIST] = payload;
  },
};
