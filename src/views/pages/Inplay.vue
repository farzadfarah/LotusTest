<template>
  <div class="block relative w-full md:w-10/12 m-auto font-cera-round-pro">
    <div>
      <image-slider-vue v-if="$store.state.showImageSliderHeader" />
    </div>

    <div class="w-full px-1 mt-1 mb-2">
      <div
        class="flex px-3 py-2 rounded-sm justify-between bg-in-play-block-color text-white"
      >
        <h3 class="font-semibold flex">
          <i
            class="ui-icon before-white theme-playbutton text-sm inplay-icon"
          ></i>
          In Play
        </h3>
        <router-link to="/open-bets" class="text-sm"
          >Open Bets<span
            class="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-300 text-white rounded-full ml-1 text-xs"
            >{{
              $store.getters["moduleMain/getOpenBets"]?.openBets?.length || 0
            }}</span
          ></router-link
        >
      </div>
    </div>
    <div class>
      <div v-if="dataObjCricketShow.length > 0" class="block py-1 px-1">
        <h5
          class="text-new-sky text-base leading-6 font-medium flex bg-white border border-slate-200 p-1"
        >
          <span class="ui-icon sports-22 before-green font-thin"></span>
          <span class="ml-1 inline-block text-new-sky font-bold leading-8"
            >Cricket</span
          >
        </h5>
        <div>
          <div class="flex justify-center">
            <ul class="rounded-xl w-full">
              <game-list-vue :gamesList="dataObjCricketShow" :sportId="3" />
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="block px-1 bg-[#1f2118] mx-1">
        <a @click="gotoLotus('https://casinolive8.io/1235/{token}')">
          <img
            class="sm:w-[400px] m-auto"
            src="@/assets/images/live-cards-banner-mobile1.gif"
          />
        </a>
      </div> -->
      <!---------------------------->
      <div v-if="dataObjFootballShow.length > 0" class="block py-1 px-1">
        <h5
          class="text-new-sky text-base leading-6 font-medium flex bg-white border border-slate-200 p-1"
        >
          <span class="ui-icon sports-4 before-green font-thin"></span>
          <span class="ml-1 inline-block text-new-sky font-bold leading-8"
            >Football</span
          >
        </h5>
        <div>
          <div class="flex justify-center">
            <ul class="rounded-xl w-full">
              <game-list-vue :gamesList="dataObjFootballShow" :sportId="1" />
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="block px-1 bg-[#1d384b] mx-1">
        <a @click="gotoLotus('https://casinolive8.io/1235/{token}')">
          <img
            class="sm:w-[400px] m-auto"
            src="@/assets/images/live-casino-banner-mobile2.gif"
          />
        </a>
      </div> -->
      <!----------------------------------------->
      <div v-if="dataObjTenisShow.length > 0" class="block py-1 px-1">
        <h5
          class="text-new-sky text-base leading-6 font-medium flex bg-white border border-slate-200 p-1"
        >
          <span class="ui-icon sports-5 before-green font-thin"></span>
          <span class="ml-1 inline-block text-new-sky font-bold leading-8"
            >Tennis</span
          >
        </h5>
        <div>
          <div class="flex justify-center">
            <ul class="rounded-xl w-full">
              <game-list-vue :gamesList="dataObjTenisShow" :sportId="2" />
            </ul>
          </div>
        </div>
      </div>
      <!----------------------------------------->
      <div v-if="dataObjKabaddiShow.length > 0" class="block py-1 px-1">
        <h5
          class="text-new-sky text-base leading-6 font-medium flex bg-white border border-slate-200 p-1"
        >
          <span class="d-icon icon-66 mt-2 mx-1 before-green font-thin"></span>
          <span class="ml-1 inline-block text-new-sky font-bold leading-8"
            >Kabaddi</span
          >
        </h5>
        <div>
          <div class="flex justify-center">
            <ul class="rounded-xl w-full">
              <game-list-vue :gamesList="dataObjKabaddiShow" :sportId="27" />
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-1 mt-1 mb-2">
      <div class="bg-white py-2 px-3">Casino</div>

      <CasinoCardMini />
    </div>
  </div>
</template>

<script>
  //import GameListVue from "../../components/game-list/GameList.vue";
  //import ImageSliderVue from "@/layouts/components/sliders/image-slider/ImageSlider.vue";
  //import CasinoCardMini from "@/layouts/components/CasinoCardMini.vue";

  import { defineAsyncComponent } from "vue";

  export default {
    name: "inplay",
    components: {
      GameListVue: defineAsyncComponent(() =>
        import("../../components/game-list/GameList.vue")
      ),
      ImageSliderVue: defineAsyncComponent(() =>
        import("@/layouts/components/sliders/image-slider/ImageSlider.vue")
      ),
      CasinoCardMini: defineAsyncComponent(() =>
        import("@/layouts/components/CasinoCardMini.vue")
      ),
    },
    data() {
      return {
        dataObj: [],
        dataObjCricket: [],
        dataObjFootball: [],
        dataObjTenis: [],
        dataObjKabaddi: [],
        //
        dataObjCricketShow: [],
        dataObjFootballShow: [],
        dataObjTenisShow: [],
        dataObjKabaddiShow: [],
        selected: "inplay",
      };
    },
    methods: {
      gotoLotus(url) {
        localStorage.setItem("lotus_url", url);
        this.$router.push("/Lotus");
      },

      getData() {
        //this.btnSelected = this.$route.params.id;
        this.dataObj = [];

        this.$store.getters["moduleMain/getAllEvents"].forEach((value) => {
          if (value.name == "tennis") {
            if (this.$store.getters["configModule/domainSettings"]?.tennis)
              this.dataObj.push(value);
          } else if (value.name == "cricket") {
            if (this.$store.getters["configModule/domainSettings"]?.cricket)
              this.dataObj.push(value);
          } else if (value.name == "football") {
            if (this.$store.getters["configModule/domainSettings"]?.football)
              this.dataObj.push(value);
          } else if (value.name == "kabaddi") {
            if (this.$store.getters["configModule/domainSettings"]?.kabaddi)
              this.dataObj.push(value);
          }
        });

        this.filterBySportId();
        this.emitter.emit("active-menu-prop-changed", null);
      },

      sportCount(sport) {
        let filterdSports = this.dataObj.filter((f) => f.id == sport);

        return filterdSports[0].events.length;
      },

      filterBySportId(type) {
        this.dataObj.forEach((f) => {
          if (f.id == 3) this.dataObjCricket = f["events"];
          else if (f.id == 1) this.dataObjFootball = f["events"];
          else if (f.id == 2) this.dataObjTenis = f["events"];
          else if (f.id == 27) this.dataObjKabaddi = f["events"];
        });

        this.dataObjCricketShow = [];
        this.dataObjFootballShow = [];
        this.dataObjTenisShow = [];
        this.dataObjKabaddiShow = [];

        if (!type) type = "inplay";

        if (type && type == "inplay") {
          this.dataObjCricket.forEach((c) => {
            if (c.status == "IN_PLAY" || c.matchDate == "In-Play")
              this.dataObjCricketShow.push(c);
          });
          this.dataObjFootball.forEach((c) => {
            if (c.status == "IN_PLAY" || c.matchDate == "In-Play")
              this.dataObjFootballShow.push(c);
          });
          this.dataObjTenis.forEach((c) => {
            if (c.status == "IN_PLAY" || c.matchDate == "In-Play")
              this.dataObjTenisShow.push(c);
          });
          this.dataObjKabaddi.forEach((c) => {
            if (c.status == "IN_PLAY" || c.matchDate == "In-Play")
              this.dataObjKabaddiShow.push(c);
          });
        } else if (type && type == "today") {
          this.dataObjCricket.forEach((c) => {
            if (c.status == "Today" || c.matchDate == "Today")
              this.dataObjCricketShow.push(c);
          });
          this.dataObjFootball.forEach((c) => {
            if (c.status == "Today" || c.matchDate == "Today")
              this.dataObjFootballShow.push(c);
          });
          this.dataObjTenis.forEach((c) => {
            if (c.status == "Today" || c.matchDate == "Today")
              this.dataObjTenisShow.push(c);
          });
          this.dataObjKabaddi.forEach((c) => {
            if (c.status == "Today" || c.matchDate == "Today")
              this.dataObjKabaddiShow.push(c);
          });
        } else if (type && type == "tomorrow") {
          this.dataObjCricket.forEach((c) => {
            if (c.status == "Tomorrow" || c.matchDate == "Tomorrow")
              this.dataObjCricketShow.push(c);
          });
          this.dataObjFootball.forEach((c) => {
            if (c.status == "Tomorrow" || c.matchDate == "Tomorrow")
              this.dataObjFootballShow.push(c);
          });
          this.dataObjTenis.forEach((c) => {
            if (c.status == "Tomorrow" || c.matchDate == "Tomorrow")
              this.dataObjTenisShow.push(c);
          });
          this.dataObjKabaddi.forEach((c) => {
            if (c.status == "Tomorrow" || c.matchDate == "Tomorrow")
              this.dataObjKabaddiShow.push(c);
          });
        }
      },

      firstUppercase(value) {
        if (value) {
          return (
            value.substring(0, 1).toUpperCase() +
            value.substring(1, value.length - 1)
          );
        }
      },
    },
    mounted() {
      this.$store.dispatch("setImageSliderHeader", true);
      this.getData();
    },

    unmounted() {
      this.$store.dispatch("setImageSliderHeader", false);
    },

    watch: {
      "$store.state.moduleMain.events"() {
        this.getData();
      },
    },
  };
</script>

<style scoped>
  .inplay-top-nav a.active {
    background-color: rgb(22, 49, 66, 1);
    color: white;
  }

  .before-white {
    height: 1.25rem;
  }

  .before-white::before {
    color: aliceblue;
  }

  .before-green::before {
    color: var(--in-play-block-color);
  }
</style>
