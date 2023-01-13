<template>
  <!-- <div class="p-body" :class="window.width <= 1200 == true ? 'mobile-margin' : ''">
    <iframe
      id="lotusIframe"
      v-if="lotusUrl"
      :src="lotusUrl"
      class="w-100 h-100"
      :key="window.width"
    ></iframe>
  </div>-->
  <div class="h-full w-full">
    <iframe
      class="h-full-130-px w-full fixed00000"
      id="lotusIframe"
      v-if="lotusUrl"
      :src="lotusUrl"
      :key="window.width"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lotusUrl: null,
      width: 100,
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  methods: {
    getUrl() {
      let TOKEN = localStorage.getItem("casinoToken");

      /*if (this.window.width <= 760) {
        this.lotusUrl = `https://m2.fawk.app/#/splash-screen/${TOKEN}`;
      } else {
        this.lotusUrl = `https://d2.fawk.app/#/splash-screen/${TOKEN}`;
      }*/

      let url = localStorage.getItem("lotus_url");
      url = url ? url.replace("{token}", TOKEN) : null;

      //url = url.replace("{lobby}", "");
      //url = url.replace("{homeUrl}", "/Lotus");
      this.lotusUrl = url;

      //setTimeout(() => {
      //  /*var iframe = document.getElementById("lotusIframe")[0];
      //  var video1 = iframe.contentWindow.document.getElementsByTagName(
      //    "video"
      //  )[0];
      //  video1.setAttribute("muted", "true");*/
      //  document.querySelector("#h5live-playerDiv").muted = true;
      //}, 2000);
    },

    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
  computed: {},
  created() {
    this.$emit("changeSideBarStatus", false);

    window.addEventListener("resize", this.getUrl);
    //
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  mounted() {
    this.getUrl();
    this.$store.dispatch("setImageSliderHeader", false);
    //this.$store.dispatch("setAllTopHeader", false);
  },

  unmounted() {
    this.$emit("changeSideBarStatus", true);
    window.removeEventListener("resize", this.getUrl);
    this.$store.dispatch("setImageSliderHeader", true);
    //this.$store.dispatch("setAllTopHeader", true);
  },
};
</script>

<style lang="scss" scoped>
.h-full-130-px {
  height: calc(100vh - 70px);
}
</style>
