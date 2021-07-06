import mutations, {
  SET_LOADING,
  SET_LIST,
  ADD_TO_SELECTED,
  REMOVE_FROM_SELECTED,
} from "@/store/modules/users/mutations";
import { LOADING, LIST, SELECTED } from "@/store/modules/users/state";
import users from "../../__mocks__/users.json";
import payload from "../../__mocks__/user.json";

describe("users mutations", () => {
  it("SET_LOADING", () => {
    const state = { [LOADING]: false };

    mutations[SET_LOADING](state, true);
    expect(state[LOADING]).toBeTruthy();

    mutations[SET_LOADING](state, false);
    expect(state[LOADING]).toBeFalsy();
  });

  it("SET_LIST", () => {
    const state = { [LIST]: [] };

    mutations[SET_LIST](state, users);
    expect(state[LIST]).toEqual(users);
  });

  it("ADD_TO_SELECTED", () => {
    const state = { [SELECTED]: [] };

    mutations[ADD_TO_SELECTED](state, payload);
    expect(state[SELECTED]).toEqual([payload]);
  });

  it("REMOVE_FROM_SELECTED", () => {
    const state = { [SELECTED]: [payload] };

    mutations[REMOVE_FROM_SELECTED](state, payload.id);
    expect(state[SELECTED]).toEqual([]);
  });
});
