<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
    <user-card
      v-for="(item, index) in selected"
      :key="index"
      :user="item"
      @delete="remove(item.id)"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UserCard from "./UserCard.vue";
import { MODULE_NAME } from "@/store/modules/users";
import { SELECTED } from "@/store/modules/users/state";
import { REMOVE_FROM_SELECTED } from "@/store/modules/users/mutations";

const { mapState, mapMutations } = createNamespacedHelpers(MODULE_NAME);

export default {
  name: "UsersSelected",
  components: {
    UserCard,
  },
  computed: {
    ...mapState({
      selected: SELECTED,
    }),
  },
  methods: {
    ...mapMutations({
      remove: REMOVE_FROM_SELECTED,
    }),
  },
};
</script>
