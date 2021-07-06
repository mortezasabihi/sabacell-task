<template>
  <div>
    <div v-if="loading" class="text-4xl font-bold text-center">Loading ...</div>
    <UsersTable v-else />
  </div>
</template>

<script>
import { MODULE_NAME } from "@/store/modules/users";
import { LOADING } from "@/store/modules/users/state";
import UsersTable from "@/components/users/UsersTable";

export default {
  name: "Home",
  components: {
    UsersTable,
  },
  computed: {
    loading() {
      return this.$store.state[MODULE_NAME][LOADING];
    },
  },
};
</script>
