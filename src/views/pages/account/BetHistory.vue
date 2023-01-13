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
          class="px-2 py-3 bg-gray-200 hover:bg-gray-300 text-new-sky text-xs sm:text-sm text-center font-medium rounded-md"
          >Current Bets</router-link
        >
        <router-link
          to="/bet-history"
          class="px-2 py-3 bg-gray-400 hover:bg-gray-300 text-new-sky text-xs sm:text-sm text-center font-bold rounded-md"
          >Bet History</router-link
        >
        <router-link
          to="/ProfitLoss"
          class="px-2 py-3 bg-gray-200 hover:bg-gray-300 text-new-sky text-xs sm:text-sm text-center font-medium rounded-md"
          >Profit &amp; Loss</router-link
        >
      </div>
    </div>
    <div class="w-full mt-3 pt-3 pb-3 px-3 rounded font-cera-pro">
      <div>
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
          <div class="mb-1">
            <label class="text-xs md:text-sm">From Date</label>
            <input
              type="date"
              placeholder="From Date"
              v-model="startDate"
              class="px-2 py-2 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
          </div>
          <div class="mb-1">
            <label class="text-xs md:text-sm">To Date</label>
            <input
              type="date"
              placeholder="From Date"
              v-model="endDate"
              class="px-2 py-2 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
          </div>
          <div class="mb-1">
            <button
              @click="getAllData('today')"
              class="flex items-center align-middle hover:bg-secondary bg-cta-primary-darken h-8 px-2 text-center border-r-2 border-b-2 border-[rgba(0,0,0,.25)] rounded font-bold text-xs py-2 text-white mt-6"
            >
              Just For Today
            </button>
          </div>
          <div class="mb-1">
            <button
              @click="getAllData('yesterday')"
              class="flex items-center align-middle hover:bg-secondary bg-cta-primary-darken h-8 px-2 text-center border-r-2 border-b-2 border-[rgba(0,0,0,.25)] rounded font-bold text-xs py-2 text-white mt-6"
            >
              From Yesterday
            </button>
          </div>

          <div class="flex items-center justify-between mt-4">
            <button
              @click="getAllData()"
              class="flex items-center align-middle hover:bg-secondary bg-cta-primary-darken h-8 px-2 text-center border-r-2 border-b-2 border-[rgba(0,0,0,.25)] rounded font-bold text-xs py-2 text-white"
            >
              Get History
            </button>
          </div>
        </div>
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
                        Profit Loss
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Result
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Placed Time
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Settle Time
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 --dark:bg-gray-800 --dark:divide-gray-700"
                  >
                    <!--:class="marketType(item)"-->
                    <tr
                      v-for="item in userdata"
                      :key="item"
                      :class="marketType(item)"
                      class="hover:bg-gray-100 --dark:hover:bg-gray-700"
                    >
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.betId }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.betTitle }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.betRate }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.stake }}
                      </td>
                      <td
                        :class="color(item)"
                        class="py-4 px-6 text-sm font-medium whitespace-nowrap --dark:text-white"
                      >
                        <!--:class="color(item)"-->
                        {{ item.profitLoss }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.result }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.placeTime }}
                      </td>
                      <td
                        class="py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.settleTime }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-pagination
        :totalPages="totalPages"
        :total="total"
        :currentPage="currentPage"
        :maxVisibleButtons="maxVisibleButtons"
        :perPage="perPage"
        @pagechanged="pagechanged"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
  import VTable from "@/components/table/V-Table.vue";
  import VPagination from "../../../components/table/V-Pagination.vue";

  export default {
    components: { VTable, VPagination },
    data() {
      return {
        heads: [
          "Bet ID",
          "Title",
          //"Market",
          //"Type",
          "Rate",
          "Stake",
          //"Bet Result",
          //"Bet Runner Name",
          //"Fancy Value",
          //"Odds",
          "Profit Loss",
          "Result",
          "Placed Time",
          "Settle Time",
        ],
        columns: [
          "betId",
          "betTitle",
          //"marketName",
          //"betType",
          "betRate",
          "stake",
          //"betResult",
          //"betRunnerName",
          //"fancyValue",
          //"odds",
          "profitLoss",
          "result",
          "placeTime",
          "settleTime",
        ],
        userdata: [], //this.$store.getters["moduleMain/getOpenBets"].openBets,
        filteredData: [],
        //startDate: this.utcDate(),
        //endDate: this.utcDate(),
        sorting: "",
        currentPage: 1,
        perPage: 10,
        total: 0,
        totalPages: 0,
        maxVisibleButtons: 1,
        showfilter: false,
      };
    },
    methods: {
      utcDate(pdate) {
        let utc = new Date().toUTCString();
        if (pdate) {
          utc = new Date(
            new Date().setDate(new Date().getDate() + pdate)
          ).toUTCString();
        }
        let y = new Date(utc).getFullYear();
        let m =
          new Date(utc).getMonth() + 1 < 10
            ? "0" + (new Date(utc).getMonth() + 1)
            : new Date(utc).getMonth() + 1;
        let d =
          new Date(utc).getDate() < 10
            ? "0" + new Date(utc).getDate()
            : new Date(utc).getDate();

        return `${y}-${m}-${d}`;
      },

      getAllData(filter) {
        if (filter && filter == "today") {
          this.startDate = this.utcDate();
          this.endDate = this.utcDate();
        }

        if (filter && filter == "yesterday") {
          this.startDate = this.utcDate(1);
          this.endDate = this.utcDate(1);
        }

        let data = {
          StartDate: this.startDate,
          EndDate: this.endDate,
          Sorting: this.sorting,
          MaxResultCount: this.perPage,
          SkipCount: (this.currentPage - 1) * this.perPage,
        };

        this.$store
          .dispatch("moduleMain/getUserBetHistory", data)
          .then((response) => {
            this.userdata = response.data.result.items;
            if (response.data.result.totalCount % this.perPage == 0) {
              this.totalPages = response.data.result.totalCount / this.perPage;
            } else {
              this.totalPages =
                parseInt(response.data.result.totalCount / this.perPage) + 1;
            }
            this.total = response.data.result.totalCount;
            this.maxVisibleButtons = this.totalPages < 6 ? this.totalPages : 3;
          })
          .catch();
      },

      pagechanged(page, countInPage) {
        if (page == -1) this.currentPage = 1;
        else this.currentPage = page;

        if (countInPage && page == -1) this.perPage = countInPage;
        else this.perPage = 10;

        this.getAllData();
      },

      color(item) {
        if (item.profitLoss.replace(",", "") < 0) return "text-red-700";
        else if (item.profitLoss.replace(",", "") > 0) return "text-green-700";
        else return "text-gray-700";
      },

      marketType(item) {
        if (
          item.betType.toLowerCase() == "yes" ||
          item.betType.toLowerCase() == "back"
        )
          return "border-l-4-border-blue-600";
        return "border-l-4-border-red-600";
      },
    },

    mounted() {
      this.getAllData();
    },
  };
</script>

<style lang="scss" scoped></style>
