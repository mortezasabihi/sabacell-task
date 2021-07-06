<template>
  <div class="border rounded p-4 relative">
    <!-- name -->
    <h2 class="text-2xl">{{ user.name }}</h2>
    <!-- /name -->

    <!-- phone -->
    <h6>{{ user.phone }}</h6>
    <!-- /phone -->

    <!-- delete btn -->
    <button
      type="button"
      class="
        absolute
        top-0
        right-0
        bg-red-500
        text-white
        w-16
        h-16
        text-xs
        rounded-full
        transform
        scale-75
      "
      @click="$emit('delete')"
    >
      DELETE
    </button>
    <!-- /delete btn -->
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
};
</script>
