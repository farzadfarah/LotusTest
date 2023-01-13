<template>
  <!-- <marquee-up-vue v-if="$store.state.showNewsBoxMarquee"></marquee-up-vue> -->
  <horizontal-nav-menu-header v-if="showNavbarHeader" />

  <!-- <horizontal-nav-menu
    v-if="$store.state.showNavbarScrollabel"
    :style="paddingMenu"
  />-->
  <slot />

  <!-- <marquee-up-vue v-if="$store.state.showNewsBoxMarquee"></marquee-up-vue> -->
</template>

<script>
  import HorizontalNavMenu from "../horizontal-nav-menu/HorizontalNavMenu.vue";
  import HorizontalNavMenuHeader from "../horizontal-nav-menu/HorizontalNavMenuHeader.vue";
  //import MarqueeUpVue from "@/components/marquee/marquee.vue";

  // import Logo from "../Logo.vue";

  export default {
    name: "the-navbar-horizontal",
    props: {
      showNavbarHeader: {
        type: Boolean,
        default: true,
      },
      //showNavbarScrollabel: {
      //  type: Boolean,
      //  default: true,
      //},
      //showNewsBoxMarquee: {
      //  type: Boolean,
      //  default: true,
      //},
    },
    data() {
      return {
        isPaused: false,
        window: {
          width: 0,
          height: 0,
        },
      };
    },
    components: {
      // Logo,
      HorizontalNavMenuHeader,
      HorizontalNavMenu,
      //ImageSliderVue,
      //MarqueeUpVue,
    },
    created() {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    },
    methods: {
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
    },
    computed: {
      isThemedark() {
        return this.$store.state.theme;
      },

      paddingMenu() {
        if (
          this.$store.state.showImageSliderHeader == false &&
          this.window.width <= 1200
        )
          return "padding-top:80px !important;";
        else return "padding-top:0px !important;";
      },

      // navbarStyle() {
      //   return this.navbarType === "static"
      //     ? { transition: "all .25s ease-in-out" }
      //     : {};
      // },
      // navbarClasses() {
      //   return this.scrollY > 5 && this.navbarType === "static"
      //     ? null
      //     : "d-theme-dark-light-bg shadow-none";
      // },
      // scrollY() {
      //   return this.$store.state.scrollY;
      // },
      // verticalNavMenuWidth() {
      //   return this.$store.state.verticalNavMenuWidth;
      // },
      // windowWidth() {
      //   return this.$store.state.windowWidth;
      // }
    },
  };
</script>
