<template>
  <modal v-if="showModal" modalSize="modal-md" name="show-modal-exposure">
    <template v-slot:header>Exposure</template>
    <template v-slot:close>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true" @click="showModal = false">&times;</span>
      </button>
    </template>
    <template v-slot:default>
      <div class="row">
        <div class="col">
          <table class="min-w-full divide-y divide-sky-900 table-fixed --dark:divide-gray-700">
            <thead class="bg-gray-300 --dark:bg-gray-700">
              <tr class>
                <th
                  class="py-3 px-3 text-xs font-medium rounded-l-md tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400">
                  Description</th>
                <th
                  class="py-3 px-3 text-xs font-medium rounded-r-md tracking-wider text-center text-gray-700 uppercase --dark:text-gray-400">
                  Total Bets</th>
              </tr>
            </thead>
            <tbody class="bg-gray-100 divide-y divide-new-sky --dark:bg-gray-800 --dark:divide-gray-700">
              <tr v-for="item in exposurs" :key="item" class="hover:bg-gray-100 --dark:hover:bg-gray-700">
                <td
                  class="py-2 px-3 text-xs sm:text-sm font-medium rounded-l-md text-gray-900 whitespace-nowrap --dark:text-white">
                  <router-link v-if="item[0].dreamMarketTypeName?.toLowerCase() == 'lotus'" to="/lotus"
                    @click="emitter.emit('show-modal-exposure', false)">{{ item[0].betTitle }}</router-link>

                  <router-link v-else :to="'/Markets/' + item[0].eventId"
                    @click="emitter.emit('show-modal-exposure', false)">{{ item[0].betTitle }}</router-link>
                </td>
                <td
                  class="text-center rounded-r-md py-2 px-3 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white">
                  {{ item.length }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from "../modal/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      showModal: false,
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
  },
  mounted() {
    this.emitter.on("show-modal-exposure", (result) => {
      if (result) {
        this.showModal = result;
        this.getAllExpo();
      } else {
        this.showModal = false;
      }
    });
  },

  /*watch: {
    "$store.state.moduleMain.profitloss"() {
      this.getAllExpo();
    },
  },*/
};
</script>
