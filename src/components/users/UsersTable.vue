<template>
  <div class="overflow-x-auto">
    <table class="table-auto w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Row</th>
          <th>Name</th>
          <th>Username</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <!-- /head -->

      <!-- tbody -->
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>
            <div><strong>City:</strong> {{ user.address.city }}</div>
            <div><strong>Street:</strong> {{ user.address.street }}</div>
            <div><strong>Zipcode:</strong> {{ user.address.zipcode }}</div>
          </td>
          <td>
            {{ user.phone }}
          </td>
          <td>
            <button
              :class="[
                `py-2
                px-4
                font-semibold
                rounded-lg
                shadow-md
                text-white
                 ${
                   checkIfAdded(user)
                     ? 'bg-gray-500'
                     : 'bg-green-500 hover:bg-green-700'
                 }`,
              ]"
              @click="handleAdd(user)"
              :disabled="checkIfAdded(user)"
            >
              {{ checkIfAdded(user) ? "Added" : "Add" }}
            </button>
          </td>
        </tr>
      </tbody>
      <!-- /tbody -->
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { MODULE_NAME } from "@/store/modules/users";
import { LIST, SELECTED } from "@/store/modules/users/state";
import { SELECTED_LENGTH } from "@/store/modules/users/getters";
import { ADD_TO_SELECTED } from "@/store/modules/users/mutations";

const { mapState, mapMutations, mapGetters } =
  createNamespacedHelpers(MODULE_NAME);

export default {
  name: "UsersTable",
  computed: {
    ...mapState({
      users: LIST,
    }),
    ...mapGetters({
      length: SELECTED_LENGTH,
    }),
  },
  methods: {
    ...mapMutations({
      add: ADD_TO_SELECTED,
    }),
    checkIfAdded(user) {
      return this.$store.state[MODULE_NAME][SELECTED].includes(user);
    },
    handleAdd(user) {
      this.length < 5 ? this.add(user) : alert("No More :)");
    },
  },
};
</script>

<style lang="postcss">
th {
  @apply bg-blue-500 text-white;
}

td,
th {
  @apply border-2 border-blue-500 px-4 py-2 text-center;
}
</style>
