<template>
  <div class="text-sm">
    <div class="bg-bg-table-header text-text-table-header">
      <a
        class="py-1 px-1 text-sm leading-6 font-medium flex justify-between"
        @click.prevent="active = !active"
      >
        <span
          class="ml-1 inline-block text-new-sky font-medium cursor-pointer"
          >{{ title }}</span
        >
        <span class="flex items-center justify-center w-6 h-6">
          <font-awesome-icon v-if="active" icon="angle-down" />
          <font-awesome-icon v-if="!active" icon="angle-up" />
        </span>
      </a>
    </div>
    <div v-show="active">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, default: "" },
      open: { type: Boolean, default: false },
    },
    data() {
      return {
        active: this.open,
      };
    },
  };
</script>

<style></style>
