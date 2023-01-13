<template>
  <div class="block relative w-full md:w-10/12 px-3 m-auto font-cera-round-pro">
    <div
      class="w-full shadow mt-3 pt-3 pb-3 px-3 rounded bg-white font-cera-pro"
    >
      <div
        class="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5 md:flex justify-center"
      >
        <router-link
          to="/open-bets"
          class="px-2 py-3 bg-gray-400 hover:bg-gray-300 text-new-sky text-xs sm:text-sm text-center font-bold rounded-md"
          >Current Bets</router-link
        >
        <!-- <router-link
          to="/bet-history"
          class="px-2 py-3 bg-gray-200 hover:bg-gray-300 text-new-sky text-xs sm:text-sm text-center font-medium rounded-md"
          >Bet History</router-link
        > -->
        <router-link
          to="/ProfitLoss"
          class="px-2 py-3 bg-gray-200 hover:bg-gray-300 text-new-sky text-xs sm:text-sm text-center font-medium rounded-md"
          >Profit &amp; Loss</router-link
        >
      </div>
    </div>

    <div class="w-full py-3 rounded-lg font-cera-pro">
      <div class="scrolbar">
        <div class="flex flex-col">
          <div class="overflow-x-auto shadow-md sm:rounded-lg">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden">
                <table
                  class="min-w-full divide-y divide-gray-200 table-fixed --dark:divide-gray-700"
                >
                  <thead class="bg-gray-100 --dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Bet ID
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Market
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Stake
                      </th>

                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Placed Time
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 --dark:bg-gray-800 --dark:divide-gray-700"
                  >
                    <tr
                      v-for="item in userdata"
                      :key="item"
                      class="hover:bg-gray-100 --dark:hover:bg-gray-700"
                    >
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.betId }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.betTitle }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.marketName }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.betType }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.betRate }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.stake }}
                      </td>

                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.placeTime }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <v-pagination
        :totalPages="totalPages"
        :total="total"
        :currentPage="currentPage"
        :maxVisibleButtons="maxVisibleButtons"
        :perPage="perPage"
        @pagechanged="pagechanged"
      ></v-pagination>-->
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";

  //import VTable from "@/components/table/V-Table.vue";
  export default {
    components: {
      VTable: defineAsyncComponent(() =>
        import("@/components/table/V-Table.vue")
      ),
    },
    data() {
      return {
        heads: [
          "Bet ID",
          "Title",
          "Market",
          "Type",
          "Rate",
          "Stake",
          "Placed Time",
        ],
        columns: [
          "betId",
          "betTitle",
          "marketName",
          "betType",
          "betRate",
          "stake",
          "placeTime",
        ],
        userdata: this.$store.getters["moduleMain/getOpenBets"].openBets,
        currentPage: 1,
        perPage: 100,
        total: 100,
        totalPages: 0,
        maxVisibleButtons: 1,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
