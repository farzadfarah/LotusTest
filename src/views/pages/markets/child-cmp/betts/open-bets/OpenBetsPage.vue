<template>
  <div
    class="block relative w-full md:w-10/12 px-1 py-2 m-auto font-cera-round-pro"
  >
    <div class="bg-primary w-full text-white py-2 px-3 text-sm">
      Matched Bets
    </div>

    <div>
      <!-- <open-bets v-if="openBetData.length > 0" :matchBets="openBetData"></open-bets> -->
      <open-bets-new
        v-if="openBetData.length > 0"
        :matchBets="openBetData"
      ></open-bets-new>
      <div v-else class="text-sm p-3 bg-white">You have no matched bets.</div>
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";

  //import OpenBetsNew from "./OpenBetsNew.vue";
  export default {
    components: {
      OpenBetsNew: defineAsyncComponent(() => import("./OpenBetsNew.vue")),
    },
    data() {
      return {
        openBetData: [],
      };
    },
    methods: {
      getOpenBets() {
        this.$store
          .dispatch("moduleMain/getUserOpenBets")
          .then(() => {
            this.openBetData =
              this.$store.getters["moduleMain/getOpenBets"].openBets;

            this.openBetData = this.openBetData.sort(function (a, b) {
              return new Date(b.placeTime) - new Date(a.placeTime);
            });
          })
          .catch();
      },
    },
    mounted() {
      this.getOpenBets();
    },
    watch: {
      //"$store.state.moduleMain.openbetsObj"() {
      //    this.getOpenBets()
      //}
    },
  };
</script>

<style></style>
