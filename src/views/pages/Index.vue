<template>
  <!-------------------- List of Events -------------------------->
  <div class="block relative w-full md:w-10/12 m-auto font-cera-round-pro">
    <div class>
      <div
        v-if="dataObjCricket.length > 0 && sportId == 3"
        class="block py-1 px-4"
      >
        <h5 class="text-new-sky text-xl leading-6 font-medium flex">
          <span class="ui-icon sports-22 font-bold"></span>
          <span class="ml-1 inline-block text-new-sky font-medium"
            >Cricket</span
          >
        </h5>
        <div>
          <div class="flex justify-center">
            <ul class="rounded-xl w-full">
              <game-list-vue :gamesList="dataObjCricket" :sportId="3" />
            </ul>
          </div>
        </div>
      </div>
      <!---------------------------->
      <div
        v-if="dataObjFootball.length > 0 && sportId == 1"
        class="block py-1 px-4"
      >
        <h5 class="text-new-sky text-xl leading-6 font-medium flex">
          <span class="ui-icon sports-4 font-bold"></span>
          <span class="ml-1 inline-block text-new-sky font-medium"
            >Football</span
          >
        </h5>
        <div>
          <div class="flex justify-center">
            <ul class="rounded-xl w-full">
              <game-list-vue :gamesList="dataObjFootball" :sportId="1" />
            </ul>
          </div>
        </div>
      </div>
      <!----------------------------------------->
      <div
        v-if="dataObjTenis.length > 0 && sportId == 2"
        class="block py-1 px-4"
      >
        <h5 class="text-new-sky text-xl leading-6 font-medium flex">
          <span class="ui-icon sports-5 font-bold"></span>
          <span class="ml-1 inline-block text-new-sky font-medium">Tennis</span>
        </h5>
        <div>
          <div class="flex justify-center">
            <ul class="rounded-xl w-full">
              <game-list-vue :gamesList="dataObjTenis" :sportId="2" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //import GameListVue from "../../components/game-list/GameList.vue";

  import { defineAsyncComponent } from "vue";

  export default {
    name: "index",
    components: {
      GameListVue: defineAsyncComponent(() =>
        import("../../components/game-list/GameList.vue")
      ),
    },
    data() {
      return {
        sportId: 3,
        dataObj: [],
        dataObjCricket: [],
        dataObjFootball: [],
        dataObjTenis: [],
        inplayCountCricket: 0,
        inplayCountFootball: 0,
        inplayCountTenis: 0,
      };
    },
    methods: {
      showSearchBox() {
        this.$store.dispatch("moduleMain/setSearchVisibility", true);
      },
      getData() {
        //this.btnSelected = this.$route.params.id;
        this.dataObj = [];

        this.dataObj = this.$store.getters["moduleMain/getAllEvents"];

        this.filterBySportId();
        this.emitter.emit("active-menu-prop-changed", null);
      },

      sportCount(sport) {
        let filterdSports = this.dataObj.filter((f) => f.id == sport);

        return filterdSports[0].events.length;
      },

      filterBySportId(sport) {
        this.dataObj.forEach((f) => {
          if (f.id == 3) this.dataObjCricket = f["events"];
          else if (f.id == 1) this.dataObjFootball = f["events"];
          else if (f.id == 2) this.dataObjTenis = f["events"];
        });

        this.inplayCountCricket = 0;
        this.inplayCountFootball = 0;
        this.inplayCountTenis = 0;
        this.dataObjCricket.forEach((game) => {
          if (game.status == "IN_PLAY" || game.matchDate == "In-Play") {
            this.inplayCountCricket++;
          }
        });
        this.dataObjFootball.forEach((game) => {
          if (game.status == "IN_PLAY" || game.matchDate == "In-Play") {
            this.inplayCountFootball++;
          }
        });
        this.dataObjTenis.forEach((game) => {
          if (game.status == "IN_PLAY" || game.matchDate == "In-Play") {
            this.inplayCountTenis++;
          }
        });
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
</style>
