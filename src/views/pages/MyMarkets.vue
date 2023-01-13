<template>
  <div class="w-full p-3">
    <h3 class="text-lg font-semibold">My Markets</h3>
    <div class="md:hidden">
      <p
        v-if="$store.getters['moduleMain/getOpenBets'].openBets.length == 0"
        class="text-sm mt-3"
      >
        You have no open bets.
      </p>

      <div v-else class="mt-3">
        <div class="bg-white p-2 mb-1" v-for="item in exposurs" :key="item">
          <router-link
            v-if="item[0].dreamMarketTypeName?.toLowerCase() == 'lotus'"
            to="/lotus"
            @click="emitter.emit('show-modal-exposure', false)"
          >
            <i class="ui-icon sports-icon theme-casino"></i>
            {{ item[0].betTitle }}
          </router-link>

          <router-link
            v-else
            :to="'/Markets/' + item[0].eventId"
            @click="emitter.emit('show-modal-exposure', false)"
          >
            <i
              class="ui-icon sports-icon"
              :class="setIconBySportId(item[0].sportId)"
            ></i>
            {{ item[0].betTitle }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden md:flex w-full">
      <open-bets
        v-if="$store.getters['moduleMain/getOpenBets'].openBets.length > 0"
        :matchBets="$store.getters['moduleMain/getOpenBets'].openBets"
      ></open-bets>
    </div>
  </div>
</template>

<script>
  import OpenBets from "./markets/child-cmp/betts/open-bets/OpenBets.vue";
  export default {
    components: { OpenBets },
    data() {
      return {
        exposurs: [],
      };
    },
    methods: {
      getAllExpo() {
        //
        let openBets = this.$store.getters["moduleMain/getOpenBets"].openBets;
        const groupByEventId = this.groupBy("eventId");
        this.exposurs = groupByEventId(openBets);
      },

      groupBy(key) {
        return function group(array) {
          return array.reduce((acc, obj) => {
            const property = obj[key];
            acc[property] = acc[property] || [];
            acc[property].push(obj);
            return acc;
          }, {});
        };
      },

      setIconBySportId(id) {
        switch (id) {
          case 2:
            return "sports-4";
          case 3:
            return "sports-5";
          case 1:
            return "sports-22";
          default:
            return "sports-22";
            break;
        }
      },
    },
    mounted() {
      this.getAllExpo();
    },
    watch: {
      "$store.state.moduleMain.openbetsObj"() {
        this.getAllExpo();
      },
    },
  };
</script>

<style></style>
