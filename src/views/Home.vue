<template>
  <div>
    <!-- loading -->
    <div v-if="loading" class="text-4xl font-bold text-center">Loading ...</div>
    <!-- /loading -->

    <div v-else>
      <!-- selected -->
      <UsersSelected />
      <!-- /selected -->

      <!-- list -->
      <UsersTable />
      <!-- /list -->
    </div>
  </div>
</template>

<script>
import { MODULE_NAME } from "@/store/modules/users";
import { LOADING } from "@/store/modules/users/state";
import UsersTable from "@/components/users/UsersTable";
import UsersSelected from "@/components/users/UsersSelected";

export default {
  name: "Home",
  components: {
    UsersTable,
    UsersSelected,
  },
  computed: {
    loading() {
      return this.$store.state[MODULE_NAME][LOADING];
    },
  },
};
</script>
