<template>
  <!-- <div class="bg-new-sky h-12 w-full mt-4"></div> -->

  <div class="block relative w-full md:w-10/12 m-auto font-cera-round-pro">
    <div>
      <div class="block py-1 px-4 md:px-0">
        <div>
          <div>
            <h2 class="capitalize font-semibold text-new-sky">
              {{ sportName() }}
            </h2>
            <h3 v-if="inplayDataObj" class="font-semibold text-[#257b24] mt-2">
              In Play ({{ inplayCount }})
            </h3>
          </div>
          <div v-if="inplayDataObj" class="flex justify-center">
            <ul class="rounded-xl w-full">
              <game-list :gamesList="inplayDataObj" />
            </ul>
          </div>
          <h2 v-if="notInplayDataObj" class="font-semibold py-2 pl-2">
            Competitions
          </h2>
          <div v-if="notInplayDataObj" class="flex justify-center">
            <ul class="rounded-xl w-full">
              <game-list :gamesList="notInplayDataObj" />
            </ul>
          </div>
          <div
            v-if="dataObj.length == 0"
            class="flex justify-center m-4 p-4 text-sm font-cera-pro"
          >
            <p>No match available</p>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:block">
      <image-slider-vue v-if="$store.state.showImageSliderHeader" />
    </div>
  </div>
</template>

<script>
  //import GameList from "@/components/game-list/GameList.vue";
  //import ImageSliderVue from "@/layouts/components/sliders/image-slider/ImageSlider.vue";

  import { defineAsyncComponent } from "vue";

  export default {
    name: "inplay",
    components: {
      GameList: defineAsyncComponent(() =>
        import("@/components/game-list/GameList.vue")
      ),
      ImageSliderVue: defineAsyncComponent(() =>
        import("@/layouts/components/sliders/image-slider/ImageSlider.vue")
      ),
    },
    data() {
      return {
        dataObj: [],
        notInplayDataObj: [],
        inplayDataObj: [],
        inplayCount: 0,
      };
    },
    methods: {
      sportName() {
        switch (this.$route.params.id) {
          case "1":
            return "football";
          case "2":
            return "tennis";
          case "4":
            return "cricket";
          case "27":
            return "kabaddi";
          default:
            return "football";
        }
      },

      getBySportName(id) {
        id = id ? id : this.$route.params.id;
        let sportName = "";
        switch (id) {
          case "1":
            sportName = "football";
            break;
          case "2":
            sportName = "tennis";
            break;
          case "4":
            sportName = "cricket";
            break;
          case "27":
            sportName = "kabaddi";
            break;
          default:
            sportName = "football";
            break;
        }

        /*this.$store
        .dispatch("moduleMain/getBySportName", { sportName: sportName })
        .then((response) => {
          this.dataObj = response.data.result;
        })
        .catch((err) => {
          console.log(err);
        });*/

        if (this.$store.getters["moduleMain/getEventsBySportName"](sportName)) {
          this.dataObj =
            this.$store.getters["moduleMain/getEventsBySportName"](sportName);

          this.notInplayDataObj = [];
          this.inplayDataObj = [];
        }

        this.inplayCount = 0;
        this.dataObj.map((m) => {
          if (m.status == "IN_PLAY" || m.matchDate == "In-Play") {
            this.inplayCount += 1;
            this.inplayDataObj.push(m);
          } else {
            this.notInplayDataObj.push(m);
          }
        });

        /*this.dataObj = this.$store.getters[
        "moduleMain/getEventsBySportName(" + sportName + ")"
      ];*/
        /*this.$store.getters[
        "moduleMain/getEventsBySportName(" + sportName + ")"
      ];*/
        //}
      },
    },

    mounted() {
      this.$store.dispatch("setImageSliderHeader", true);

      this.getBySportName();
    },

    unmounted() {
      this.$store.dispatch("setImageSliderHeader", false);
    },

    beforeRouteUpdate(to, from, next) {
      this.getBySportName(to.params.id);
      next();
    },

    watch: {
      "$store.state.moduleMain.events"() {
        this.getBySportName();
      },
    },
  };
</script>

<style scoped></style>
