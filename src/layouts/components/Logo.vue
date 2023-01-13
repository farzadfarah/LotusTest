<template>
  <img :src="$store.getters['configModule/domainSettings']?.mainLogo" />
</template>

<script>
export default {
  computed: {
    logo() {
      return `background-image: url(${this.$store.getters["configModule/domainSettings"]?.mainLogo});`;
    },
  },
};
</script>
