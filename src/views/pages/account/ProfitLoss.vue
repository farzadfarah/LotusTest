<template>
  <div class="block relative w-full md:w-10/12 px-2 m-auto font-cera-round-pro">
    <h1 class="pt-2 text-lg font-semibold">Betting Profit & Loss</h1>
    <hr class="border-gray-500 my-3" />
    <div class="w-full mt-3 pt-3 pb-3 px-3">
      <div class="flex md:hidden items-center justify-between">
        <button
          @click="showfilter = !showfilter"
          class="flex items-center px-4 py-2 bg-white hover:bg-gray-200 text-gray-800 text-sm rounded-md"
        >
          <span v-if="showfilter == true"
            ><svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3538 1.12947e-06H0.646062C0.404295 -0.000445031 0.18265 0.13132 0.0721317 0.341164C-0.0399105 0.553833 -0.020246 0.809928 0.122894 1.00416L5.14483 7.90593C5.1465 7.90831 5.14833 7.91054 5.15001 7.91292C5.33248 8.15325 5.43111 8.44429 5.43172 8.74352V14.3705C5.43065 14.5372 5.49772 14.6972 5.61815 14.8154C5.73857 14.9337 5.90229 15 6.07302 15C6.15991 15 6.24574 14.983 6.32592 14.9506L9.14786 13.9008C9.40075 13.8256 9.56859 13.5928 9.56859 13.3125V8.74352C9.56905 8.44444 9.66783 8.15325 9.85014 7.91292C9.85182 7.91054 9.85365 7.90831 9.85533 7.90593L14.8771 1.00386C15.0202 0.809779 15.0399 0.553833 14.9279 0.341164C14.8174 0.13132 14.5957 -0.000445031 14.3538 1.12947e-06ZM9.22088 7.46185C8.94039 7.83321 8.78871 8.28219 8.7878 8.74352V13.22L6.2122 14.178V8.74352C6.21129 8.28219 6.05961 7.83321 5.77897 7.46185L0.903531 0.761445H14.0965L9.22088 7.46185Z"
                fill="#102327"
              />
            </svg>
          </span>
          <span v-else
            ><svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r="8" stroke="#102327" />
              <path
                d="M12 5.41234L11.6187 5.03282L8.51649 8.12048L5.38132 5L5.00002 5.37952L8.13519 8.49999L5 11.6205L5.3813 12L8.51649 8.87951L11.6187 11.9672L12 11.5877L8.89779 8.49999L12 5.41234Z"
                fill="#102327"
              />
            </svg>
          </span>
          <span class="ml-2">Filter</span>
        </button>
      </div>

      <div v-if="showfilter == true">
        <div
          class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 --mt-4"
        >
          <div class="mb-1">
            <label class="text-xs md:text-sm">From Date</label>
            <input
              type="date"
              placeholder="From Date"
              v-model="form.fromDate"
              class="px-2 py-2 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
          </div>
          <div class="mb-1">
            <label class="text-xs md:text-sm">To Date</label>
            <input
              type="date"
              placeholder="From Date"
              v-model="form.toDate"
              class="px-2 py-2 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
          </div>

          <div class="flex items-center justify-between mt-4">
            <button
              @click="getTransactionHistory()"
              class="flex items-center align-middle hover:bg-secondary bg-cta-primary-darken h-8 w-20 px-2 text-center border-r-2 border-b-2 border-[rgba(0,0,0,.25)] rounded font-bold text-xs py-2 text-white"
            >
              <i class="ui-icon theme-search withe"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-3 rounded-lg font-cera-pro">
      <div class="scrolbar">
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden">
                <div
                  v-for="item in accountCash"
                  :key="item"
                  class="mb-2 shadow-md"
                >
                  <div class="bg-[#0f2327] flex justify-between p-2">
                    <h5 class="text-xs text-white">{{ item.date }}</h5>
                    <div class="text-xs text-white">
                      P&L:
                      <span
                        class="ml-1"
                        v-if="item.credit != 0"
                        :class="isPositive(item.credit)"
                        >{{ item.credit }}</span
                      ><span
                        class="ml-1"
                        v-if="item.debit != 0"
                        :class="isPositive(item.debit)"
                        >{{ item.debit }}</span
                      >
                    </div>
                  </div>
                  <div class="bg-white pt-2 pb-3 px-2">
                    <router-link
                      :to="'/profit-detail/' + item.id"
                      class="text-[12px] underline text-[#2587d0] font-[700]"
                      ><strong>{{ item.description }}</strong>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-pagination
        class="text-xs"
        :totalPages="totalPages"
        :total="total"
        :currentPage="currentPage"
        :maxVisibleButtons="maxVisibleButtons"
        :perPage="perPage"
        @pagechanged="pagechanged"
      ></v-pagination>
    </div>
  </div>
  <!-- <modal v-if="showModal" name="show-modal-result-data"
    :modalSize="'md:max-w-6xl modal-dialog-custome font-cera-round-pro'">
    <template v-slot:header>Result</template>
    <template v-slot:close>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true" @click="showModal = false">&times;</span>
      </button>
    </template>
    <template v-slot:default>
      <div class="w-full overflow-auto">
        <div class="row m-0" style="font-size: small">
          <div class="col col-12 mt-1 mb-1 p-0">{{ rowDetail.description }}</div>
          <div class="col-sm-12 col-md-12 mt-1 mb-1 p-0">
            Winner:
            <span class="font-bold">{{ rowDetail.winner }}</span>
          </div>
          <div class="col-sm-12 col-md-12 mt-1 mb-1 p-0">
            <span>Total Bets:</span>
            <span class="text-green-300 font-bold">&nbsp;{{ rowDetail.totalBets }}</span>
            <span>&nbsp;&nbsp;&nbsp;Total Win:</span>
            <span class="font-bold" :class="isPositive(rowDetail.totalWin)">&nbsp;{{ rowDetail.totalWin }}</span>
          </div>
          <div class="col-sm-12 col-md-6 mt-1 mb-1 p-0">Game Time: {{ rowDetail.gameStartTime }}</div>

          <div class="col col-12 mt-1 mb-1 scrolable p-0 h-1/2" v-if="rowDetail.bets.length > 0">
            <table class="tblResult text-xs">
              <thead>
                <tr>
                  <th v-if="!isFancy">Runner</th>
                  <th>Rate</th>
                  <th>Amount</th>
                  <th>ProfitLoss</th>
                  <th v-if="isFancy">Fancy Value</th>
                  <th>Date</th>
                  <th>IP Address</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in rowDetail.bets" :key="item.id">
                  <td v-if="!isFancy" :class="!isFancy == true ? color(item) : ''">{{ item.title }}</td>
                  <td :class="isFancy == true ? color(item) : ''">{{ item.rate }}</td>
                  <td class="font-bold">{{ item.amount }}</td>
                  <td class="font-bold" :class="isPositive(item.profitLoss)">{{ item.profitLoss }}</td>
                  <td v-if="isFancy">{{ item.fancyValue }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.ipAddress }}</td>
      
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </modal> -->
</template>

<script>
  //import VPagination from "../../../components/table/V-Pagination.vue";
  // import Modal from "../../../layouts/components/modal/Modal.vue";

  import { defineAsyncComponent } from "vue";

  export default {
    components: {
      VPagination: defineAsyncComponent(() =>
        import("../../../components/table/V-Pagination.vue")
      ),
    },
    data() {
      return {
        showfilter: false,
        form: {
          fromDate: this.utcDate(),
          toDate: this.utcDate(),
          type: 2,
        },

        accountCash: [],
        currentPage: 1,
        perPage: 10,
        total: 10,
        totalPages: 0,
        maxVisibleButtons: 1,
        rowDetail: {},
        showModal: false,
      };
    },
    methods: {
      utcDate() {
        let utc = new Date().toUTCString();
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

      getTransactionHistory() {
        let data = {
          From: this.form.fromDate,
          To: this.form.toDate,
          Type: this.form.type,
          Sorting: null,
          MaxResultCount: this.perPage,
          SkipCount: (this.currentPage - 1) * this.perPage,
        };

        this.$store
          .dispatch("moduleMain/getTransactionHistory", data)
          .then((response) => {
            this.accountCash = response.data.result.items;
            if (response.data.result.totalCount % this.perPage == 0) {
              this.totalPages = response.data.result.totalCount / this.perPage;
            } else {
              this.totalPages =
                parseInt(response.data.result.totalCount / this.perPage) + 1;
            }
            this.total = response.data.result.totalCount;
            this.maxVisibleButtons = this.totalPages < 6 ? this.totalPages : 3;
          })
          .catch(() => {
            //console.log(error);
          });
      },

      pagechanged(page, countInPage) {
        if (page == -1) this.currentPage = 1;
        else this.currentPage = page;

        if (countInPage && page == -1) this.perPage = countInPage;
        else this.perPage = 10;

        this.getTransactionHistory();
      },

      getRowInfo(row) {
        if (row.eventId != null) {
          this.$store
            .dispatch("moduleMain/getBetTransactionHistoryDetail", {
              transactionId: row.id,
            })
            .then((response) => {
              //console.log(response);
              //if (response.data.result.eventId != null)
              this.rowDetail = response.data.result;
              this.showModal = true;
              this.emitter.emit("show-modal-changed", true);
            })
            .catch(() => {
              //console.error(error)
            });
        }
      },

      color(item) {
        if (
          item.betType.toLowerCase() == "yes" ||
          item.betType.toLowerCase() == "back"
        )
          return "border-l-4-border-blue-600";
        return "border-l-4-border-red-600";
      },

      isPositive(val) {
        if (val) {
          if (parseFloat(val.replace(",", "")) > 0) return "text-green-500";
          else if (parseFloat(val.replace(",", "")) == 0) return "";
          else return "text-red-500";
        }
        return "text-red-500";
      },
    },

    computed: {
      isFancy() {
        if (!this.rowDetail && !this.rowDetail.marketTypeName) return false;
        return this.rowDetail.marketTypeName == "fancy2";
      },
    },

    mounted() {
      this.getTransactionHistory();

      this.emitter.on("show-modal-result-data", () => {
        this.showModal = false;
      });
    },
  };
</script>
<style scoped>
  .tblResult tr th {
    background: #c9c9c9;
    white-space: nowrap;
    padding: 10px;
  }

  .tblResult tr td {
    padding: 5px;
  }

  .tblResult {
    width: 100%;
  }
</style>
