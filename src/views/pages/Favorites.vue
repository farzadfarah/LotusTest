<template>
  <div class="block relative w-full md:w-10/12 px-3 m-auto font-cera-round-pro">
    <div class="w-full py-3 rounded-lg font-cera-pro">
      <h1 class="text-[24px] font-normal mb-3">Favourites</h1>
      <hr class="border-gray-700" />
      <div v-if="all.length == 0" class="mian-wrap">
        <div id="noMultiMarkets" class="no-data" style>
          <h3>There are currently no followed multi markets.</h3>
          <p>Please add some markets from events.</p>
        </div>
      </div>

      <div v-else-if="all.length > 0" class="mt-3 w-full block">
        <div v-if="footballs.length > 0" class="w-full block">
          <h4 class="text-[20px] font-normal mb-1 mt-2">Footballs</h4>
          <div
            v-for="item in footballs"
            :key="item.id"
            class="w-full block bg-white px-1 mb-1 shadow-sm"
          >
            <div class="w-full">
              <div class="flex w-full relative">
                <a @click="pinUpdate(item.id)" class="leading-10 contents">
                  <img
                    v-if="!item.pin"
                    src="../../assets/svg/star-line-yellow.svg"
                    class="w-4 h-4 mt-[12px] mr-2"
                  />
                  <img
                    v-else
                    src="../../assets/svg/star-svgrepo-com.svg"
                    class="w-4 h-4 mt-[12px] mr-2"
                  />
                </a>
                <router-link class="w-full" :to="'/Markets/' + item.id">
                  <div class="flex justify-between">
                    <div class="min-w-0 flex">
                      <h4 class="leading-10 text-sm text-new-sky truncate">
                        {{ item.title }}
                      </h4>
                    </div>
                    <a
                      v-if="
                        item.status == 'IN_PLAY' || item.matchDate == 'In-Play'
                      "
                      :to="'/Markets/' + item.id"
                      class="min-w-[4.031rem] min-h-[2.75rem] rounded-lg py-2 px-2 text-xs font-bold leading-5"
                    >
                      <div class="text-center whitespace-nowrap">
                        <i
                          class="ui-icon theme-playbutton text-sm absolute inplay-icon"
                        ></i>
                      </div>
                    </a>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="crickets.length > 0" class="w-full block">
          <h4 class="text-[20px] font-normal mb-1 mt-2">Crickets</h4>
          <div
            v-for="item in crickets"
            :key="item.id"
            class="w-full block bg-white px-1 mb-1 shadow-sm"
          >
            <div class="w-full">
              <div class="flex w-full relative">
                <a @click="pinUpdate(item.id)" class="leading-10 contents">
                  <img
                    v-if="!item.pin"
                    src="../../assets/svg/star-line-yellow.svg"
                    class="w-4 h-4 mt-[12px] mr-2"
                  />
                  <img
                    v-else
                    src="../../assets/svg/star-svgrepo-com.svg"
                    class="w-4 h-4 mt-[12px] mr-2"
                  />
                </a>
                <router-link class="w-full" :to="'/Markets/' + item.id">
                  <div class="flex justify-between">
                    <div class="min-w-0 flex">
                      <h4 class="leading-10 text-sm text-new-sky truncate">
                        {{ item.title }}
                      </h4>
                    </div>
                    <a
                      v-if="
                        item.status == 'IN_PLAY' || item.matchDate == 'In-Play'
                      "
                      :to="'/Markets/' + item.id"
                      class="min-w-[4.031rem] min-h-[2.75rem] rounded-lg py-2 px-2 text-xs font-bold leading-5"
                    >
                      <div class="text-center whitespace-nowrap">
                        <i
                          class="ui-icon theme-playbutton text-sm absolute inplay-icon"
                        ></i>
                      </div>
                    </a>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="tennis.length > 0" class="w-full block">
          <h4 class="text-[20px] font-normal mb-1 mt-2">Tennis</h4>
          <div
            v-for="item in tennis"
            :key="item.id"
            class="w-full block bg-white px-1 mb-1 shadow-sm"
          >
            <div class="w-full">
              <div class="flex w-full relative">
                <a @click="pinUpdate(item.id)" class="leading-10 contents">
                  <img
                    v-if="!item.pin"
                    src="../../assets/svg/star-line-yellow.svg"
                    class="w-4 h-4 mt-[12px] mr-2"
                  />
                  <img
                    v-else
                    src="../../assets/svg/star-svgrepo-com.svg"
                    class="w-4 h-4 mt-[12px] mr-2"
                  />
                </a>
                <router-link class="w-full" :to="'/Markets/' + item.id">
                  <div class="flex justify-between">
                    <div class="min-w-0 flex">
                      <h4 class="leading-10 text-sm text-new-sky truncate">
                        {{ item.title }}
                      </h4>
                    </div>
                    <a
                      v-if="
                        item.status == 'IN_PLAY' || item.matchDate == 'In-Play'
                      "
                      :to="'/Markets/' + item.id"
                      class="min-w-[4.031rem] min-h-[2.75rem] rounded-lg py-2 px-2 text-xs font-bold leading-5"
                    >
                      <div class="text-center whitespace-nowrap">
                        <i
                          class="ui-icon theme-playbutton text-sm absolute inplay-icon"
                        ></i>
                      </div>
                    </a>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="kabaddi.length > 0" class="w-full block">
          <h4 class="text-[20px] font-normal mb-1 mt-2">Kabaddi</h4>
          <div
            v-for="item in kabaddi"
            :key="item.id"
            class="w-full block bg-white px-1 mb-1 shadow-sm"
          >
            <div class="w-full">
              <div class="flex w-full relative">
                <a @click="pinUpdate(item.id)" class="leading-10 contents">
                  <img
                    v-if="!item.pin"
                    src="../../assets/svg/star-line-yellow.svg"
                    class="w-4 h-4 mt-[12px] mr-2"
                  />
                  <img
                    v-else
                    src="../../assets/svg/star-svgrepo-com.svg"
                    class="w-4 h-4 mt-[12px] mr-2"
                  />
                </a>
                <router-link class="w-full" :to="'/Markets/' + item.id">
                  <div class="flex justify-between">
                    <div class="min-w-0 flex">
                      <h4 class="leading-10 text-sm text-new-sky truncate">
                        {{ item.title }}
                      </h4>
                    </div>
                    <a
                      v-if="
                        item.status == 'IN_PLAY' || item.matchDate == 'In-Play'
                      "
                      :to="'/Markets/' + item.id"
                      class="min-w-[4.031rem] min-h-[2.75rem] rounded-lg py-2 px-2 text-xs font-bold leading-5"
                    >
                      <div class="text-center whitespace-nowrap">
                        <i
                          class="ui-icon theme-playbutton text-sm absolute inplay-icon"
                        ></i>
                      </div>
                    </a>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        footballs: [],
        crickets: [],
        tennis: [],
        kabaddi: [],
        all: [],
      };
    },
    methods: {
      pineds() {
        this.all = this.$store.getters["moduleMain/getPinedEvents"];
      },

      pinedsBySports() {
        if (this.$store.getters["moduleMain/getPinedEvents"]) {
          let pins = this.$store.getters["moduleMain/getPinedEvents"];

          this.footballs = [];
          this.crickets = [];
          this.tennis = [];

          pins.forEach((element) => {
            if (element.id == 1) {
              element.events.forEach((el) => {
                this.footballs.push(el);
              });
            } else if (element.id == 2) {
              element.events.forEach((el) => {
                this.tennis.push(el);
              });
            } else if (element.id == 3) {
              element.events.forEach((el) => {
                this.crickets.push(el);
              });
            } else if (element.id == 27) {
              element.events.forEach((el) => {
                this.kabaddi.push(el);
              });
            }
          });
        }
      },

      pinUpdate(id) {
        this.$store
          .dispatch("moduleMain/updatePin", id)
          .then(() => {
            this.pineds();
            this.pinedsBySports();
          })
          .catch(() => {});
      },
    },
    mounted() {
      this.pineds();
      this.pinedsBySports();
      let pinInterVal = setInterval(() => {
        this.pineds();
        this.pinedsBySports();
      }, 3000);
    },
  };
</script>
<style scoped>
  .ui-icon.inplay-icon::before {
    color: green;
  }
</style>
