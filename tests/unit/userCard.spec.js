import { shallowMount } from "@vue/test-utils";
import UserCard from "@/components/users/UserCard.vue";

const user = {
  name: "Morteza Sabihi",
  phone: "09378719525",
};

describe("UserCard.vue", () => {
  const wrapper = shallowMount(UserCard, { propsData: { user } });

  it("renders user name", () => {
    expect(wrapper.find("h2").text()).toEqual(user.name);
  });

  it("renders user phone", () => {
    expect(wrapper.find("h6").text()).toEqual(user.phone);
  });

  it("triggers delete emit", async () => {
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("delete11"));
  });
});
