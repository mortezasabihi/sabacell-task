import users from "@/store/modules/users";

export default function createStoreConfig() {
  return {
    modules: {
      users,
    },
  };
}
