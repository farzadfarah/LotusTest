<template>
  <!-- :class="this.$store.state.showImageSliderHeader == false ? 'mt-4' : ''"-->
  <ul
    class="nav-menu hidden md:flex justify-center font-cera-round-pro uppercase bg-white py-[6px] shadow-md"
  >
    <li class="mr-3 ml-300">
      <router-link
        class="text-[#440a57] hover:text-sky-700 text-center font-semibold text-xs flex flex-col align-middle justify-center items-center"
        to="/inplay"
        exact-active-class="underline underline-offset-4 decoration-2"
        active-class="font-bold"
        >In Play</router-link
      >
    </li>
    <li
      v-if="$store.getters['configModule/domainSettings']?.cricket"
      class="mr-3 ml-300"
    >
      <router-link
        class="text-[#440a57] hover:text-sky-700 text-center font-semibold text-xs flex flex-col align-middle justify-center items-center"
        to="/matchlist/4"
        exact-active-class="underline underline-offset-4 decoration-2"
        active-class="font-bold"
        >Cricket</router-link
      >
    </li>
    <li
      v-if="$store.getters['configModule/domainSettings']?.football"
      class="mr-3 ml-300"
    >
      <router-link
        class="text-[#440a57] hover:text-sky-700 text-center font-semibold text-xs flex flex-col align-middle justify-center items-center"
        to="/matchlist/1"
        exact-active-class="underline underline-offset-4 decoration-2"
        active-class="font-bold"
        >Football</router-link
      >
    </li>
    <li
      v-if="$store.getters['configModule/domainSettings']?.tennis"
      class="mr-3 ml-300"
    >
      <router-link
        class="text-[#440a57] hover:text-sky-700 text-center font-semibold text-xs flex flex-col align-middle justify-center items-center"
        to="/matchlist/2"
        exact-active-class="underline underline-offset-4 decoration-2"
        active-class="font-bold"
        >Tennis</router-link
      >
    </li>
    <li
      v-if="$store.getters['configModule/domainSettings']?.kabaddi"
      class="mr-3 ml-300"
    >
      <router-link
        class="text-[#440a57] hover:text-sky-700 text-center font-semibold text-xs flex flex-col align-middle justify-center items-center"
        to="/matchlist/27"
        exact-active-class="underline underline-offset-4 decoration-2"
        active-class="font-bold"
        >Kabaddi</router-link
      >
    </li>
    <li
      v-if="$store.getters['configModule/domainSettings']?.casino"
      class="mr-3 ml-300"
    >
      <router-link
        class="text-[#440a57] hover:text-sky-700 text-center font-semibold text-xs flex flex-col align-middle justify-center items-center"
        to="/casino"
        exact-active-class="underline underline-offset-4 decoration-2"
        active-class="font-bold"
        >Casino</router-link
      >
    </li>
  </ul>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        activeMenuItem: null,
      };
    },
    methods: {
      activeItem(val) {
        if (this.activeMenuItem == val) {
          return true;
        } else return false;
      },
    },
    mounted() {
      this.emitter.on("active-menu-prop-changed", (result) => {
        if (result) {
          this.activeMenuItem = result;
          this.activeItem();
        } else {
          this.activeMenuItem = null;
          this.activeItem();
        }
      });
    },
  };
</script>

<style lang="scss" scoped>
  a.active .nav-icon-svg i.ui-icon::before,
  .active.router-link-active .nav-icon-svg i.ui-icon::before,
  .active.router-link-exact-active .nav-icon-svg i.ui-icon::before {
    color: #bda871 !important;
  }

  .griditem-main i.ui-icon.active::before,
  a.active.router-link-exact-active i.ui-icon::before {
    color: #dbb551 !important;
  }

  .nav-menu li {
    display: flex;
    align-items: center;
  }
  .nav-menu li::after {
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #440a57;
    margin-left: 10px;
  }
</style>
