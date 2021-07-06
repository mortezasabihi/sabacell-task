<template>
  <div class="container mx-auto px-10 md:px-32 my-10">
    <main class="bg-white p-0 md:p-10">
      <router-view />
    </main>
  </div>
</template>

<script>
import { MODULE_NAME } from "@/store/modules/users";
import { FETCH_LIST } from "@/store/modules/users/actions";

export default {
  name: "App",
  created() {
    this.$store.dispatch(`${MODULE_NAME}/${FETCH_LIST}`);
  },
};
</script>
