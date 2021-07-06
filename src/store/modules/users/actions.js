import userService from "@/services/users";
import { SET_LOADING, SET_LIST } from "./mutations";

export const FETCH_LIST = "fetchList";

export default {
  async [FETCH_LIST]({ commit }) {
    commit(SET_LOADING, true);

    const { data } = await userService.fetchUsers();
    commit(SET_LIST, data);

    commit(SET_LOADING, false);
  },
};
