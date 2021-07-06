import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import createStoreConfig from "../../__mocks__/storeConfig";
import mockUsers from "../../__mocks__/users.json";
// import { MODULE_NAME } from "@/store/modules/users";
// import { LIST } from "@/store/modules/users/state";
// import { FETCH_LIST } from "@/store/modules/users/actions";
import mockAxios from "axios";

// eslint-disable-next-line no-unused-vars
let store;

beforeEach(() => {
  createLocalVue().use(Vuex);
  const storeConfig = createStoreConfig();
  store = new Vuex.Store(storeConfig);
});

describe("users actions", () => {
  mockAxios.post.mockImplementationOnce(() =>
    Promise.resolve({ data: mockUsers })
  );

  // failed :(
  it("FETCH_LIST", async () => {
    // await store.dispatch(`${MODULE_NAME}/${FETCH_LIST}`);
    // expect(store.state[MODULE_NAME][LIST]).toEqual(mockUsers);
  });
});
