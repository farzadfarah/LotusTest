<template>
  <circle-progress
    :is-bg-shadow="true"
    :bg-shadow="{
      inset: true,
      vertical: 2,
      horizontal: 2,
      blur: 4,
      opacity: 0.4,
      color: '#000000',
    }"
    :percent="50"
    empty-color="#f7f7f7"
    :border-width="15"
    :border-bg-width="30"
  />
</template>

<script>
  // import "vue3-circle-progress/dist/circle-progress.css";

  import { defineAsyncComponent } from "vue";

  //import CircleProgress from "vue3-circle-progress";
  export default {
    components: {
      CircleProgress: defineAsyncComponent(() =>
        import("vue3-circle-progress")
      ),
    },
    data() {
      return {
        second: 100,
        setInterValCounter: null,
      };
    },
    methods: {},
    mounted() {},
  };
</script>

<style scoped></style>
