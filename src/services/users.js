import http from "@/plugins/axios";

export default {
  fetchUsers() {
    return http.get("/users");
  },
};
