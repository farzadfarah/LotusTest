<template>
  <div class="block relative w-full md:w-10/12 px-3 m-auto font-cera-round-pro">
    <h1 class="pt-2 text-lg font-semibold">Account Statement</h1>
    <hr class="border-gray-500 my-3" />
    <div class="w-full mt-3 pt-3 pb-3 font-cera-pro">
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
          class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-1 md:gap-4 --mt-4"
        >
          <div class="md:mb-1">
            <label class="text-xs md:text-sm">From Date</label>
            <input
              type="date"
              placeholder="From Date"
              v-model="form.fromDate"
              class="px-2 py-2 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-xs"
            />
          </div>
          <div class="md:mb-1">
            <label class="text-xs md:text-sm">To Date</label>
            <input
              type="date"
              placeholder="From Date"
              v-model="form.toDate"
              class="px-2 py-2 w-full rounded-md bg-white-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-xs"
            />
          </div>
          <!-- <div class="md:mb-1">
          <label class="text-xs md:text-sm">Type</label>

          <select
            v-model="form.type"
            class="px-2 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="0">All</option>
            <option value="1">Deposit/Withdraw Report</option>
            <option value="2">Game Report</option>
          </select>
        </div>
        <div class="md:mb-1">
          <label class="text-xs md:text-sm">Type</label>

          <select
            v-model="form.select"
            @change="setDayFilter"
            class="px-2 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
          </select>
        </div> -->
          <div class="flex items-center justify-between mt-4">
            <button
              class="press-effect-mini flex items-center align-middle hover:bg-secondary bg-cta-primary-darken h-8 w-20 px-2 text-center border-r-2 border-b-2 border-[rgba(0,0,0,.25)] rounded font-bold text-xs py-2 text-white"
            >
              <i class="ui-icon theme-search withe"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->

    <div class="w-full py-3 rounded-lg font-cera-pro">
      <div class="scrolbar">
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden">
                <!-- <div
                  v-for="item in accountCash"
                  :key="item"
                  class="mb-2 shadow-md"
                >
                  <div class="bg-[#0f2327] flex justify-between p-2">
                    <h5 class="text-xs text-white">{{ item.date }}</h5>
                    <div class="text-xs text-white">
                      <router-link
                        v-if="item.eventId != null"
                        :to="'/account-cash-statement/detail/' + item.id"
                        class="text-[12px] font-[700]"
                        ><strong>
                          <Fa :icon="faArrowUpRightFromSquare" class="" />
                        </strong>
                      </router-link>
                    </div>
                  </div>
                  <div class="bg-white pt-2 pb-2 px-2">
                    <router-link
                      v-if="item.eventId != null"
                      :to="'/account-cash-statement/detail/' + item.id"
                      class="text-[12px] underline text-[#2587d0] font-[700]"
                    >
                      <strong>{{ item.description }}</strong>
                    </router-link>
                    <div v-else class="text-[12px] font-[700]">
                      <strong>{{ item.description }}</strong>
                    </div>
                    <div class="w-full flex mt-2 bg-stone-100 p-2">
                      <div class="text-xs grow">
                        <span class="mr-1">CREDIT: </span
                        ><span
                          class="font-semibold"
                          :class="isPositive(item.credit)"
                          >{{ item.credit }}</span
                        >
                      </div>

                      <div class="text-xs grow">
                        <span class="mr-1">DEBIT: </span
                        ><span
                          class="font-semibold"
                          :class="isPositive(item.debit)"
                          >{{ item.debit }}</span
                        >
                      </div>

                      <div class="text-xs grow">
                        <span class="mr-1">BALANCE: </span
                        ><span class="font-semibold">{{ item.balance }}</span>
                      </div>
                    </div>
                  </div>
                </div> -->
                <table
                  class="min-w-full divide-y divide-gray-200 table-fixed --dark:divide-gray-700"
                >
                  <thead class="bg-gray-100 --dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Date/Time
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Credit
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Debit
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                      >
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 --dark:bg-gray-800 --dark:divide-gray-700"
                  >
                    <tr
                      v-for="item in accountCash"
                      :key="item"
                      @click="getRowInfo(item)"
                      class="hover:bg-gray-100 --dark:hover:bg-gray-700"
                    >
                      <td
                        :class="item.eventId != null ? 'clickable-row' : ''"
                        class="py-4 px-6 text-xs font-medium text-gray-900 --whitespace-nowrap --dark:text-white"
                      >
                        {{ item.date }}
                      </td>
                      <td
                        class="py-4 px-6 text-xs font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.description }}
                      </td>
                      <td
                        class="py-4 px-6 text-xs font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                        :class="isPositive(item.credit)"
                      >
                        {{ item.credit }}
                      </td>
                      <td
                        class="py-4 px-6 text-xs font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                        :class="isPositive(item.debit)"
                      >
                        {{ item.debit }}
                      </td>
                      <td
                        class="py-4 px-6 text-xs font-medium text-gray-900 whitespace-nowrap --dark:text-white"
                      >
                        {{ item.balance }}
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
        class="text-xs"
        :totalPages="totalPages"
        :total="total"
        :currentPage="currentPage"
        :maxVisibleButtons="maxVisibleButtons"
        :perPage="perPage"
        @pagechanged="pagechanged"
      ></v-pagination>
    </div>

    <!-- <modal v-if="showModal" name="show-modal-result-data" :modalSize="'md:max-w-6xl modal-dialog-custome'">
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
            <div class="col-sm-12 col-md-12 mt-1 mb-1 p-0">Winner: {{ rowDetail.winner }}</div>
            <div class="col-sm-12 col-md-12 mt-1 mb-1 p-0">
              <span>Total Bets:</span>
              <span class="text-green-700">&nbsp;{{ rowDetail.totalBets }}</span>
              <span>&nbsp;&nbsp;&nbsp;Total Win:</span>
              <span :class="isPositive == true ? 'text-green-700' : 'text-red-700'">&nbsp;{{
                  rowDetail.totalWin
              }}</span>
            </div>
            <div class="col-sm-12 col-md-6 mt-1 mb-1 p-0">Game Time: {{ rowDetail.gameStartTime }}</div>

            <div class="col col-12 p-0 mt-1 mb-1 scrolable" v-if="rowDetail.bets.length > 0">
              <table class="tblResult">
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
                    <td>{{ item.amount }}</td>
                    <td :class="isPositive(item.profitLoss)">{{ item.profitLoss }}</td>
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
  </div>
</template>

<script>
  import Fa from "vue-fa";
  import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
  import VPagination from "../../../components/table/V-Pagination.vue";
  import Modal from "../../../layouts/components/modal/Modal.vue";

  export default {
    components: { VPagination, Modal, Fa },
    data() {
      return {
        faArrowUpRightFromSquare,
        showfilter: true,
        form: {
          fromDate: this.utcDate(),
          toDate: this.utcDate(),
          type: 0,
          select: "today",
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
            //console.log(response);
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
            .catch((error) => console.error(error));
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

      setDayFilter() {
        if (this.form.select == "today") {
          this.form.fromDate = new Date().toISOString().substr(0, 10);
          this.form.toDate = new Date().toISOString().substr(0, 10);
        } else if (this.form.select == "yesterday") {
          this.form.fromDate = new Date(
            new Date().setDate(new Date().getDate() - 1)
          )
            .toISOString()
            .substr(0, 10);

          this.form.toDate = new Date().toISOString().substr(0, 10);
        } else if (this.form.select == "7") {
          this.form.fromDate = new Date(
            new Date().setDate(new Date().getDate() - 7)
          )
            .toISOString()
            .substr(0, 10);

          this.form.toDate = new Date().toISOString().substr(0, 10);
        } else if (this.form.select == "30") {
          this.form.fromDate = new Date(
            new Date().setDate(new Date().getDate() - 30)
          )
            .toISOString()
            .substr(0, 10);

          this.form.toDate = new Date().toISOString().substr(0, 10);
        }

        this.getTransactionHistory();
      },

      isPositive(val) {
        if (val) {
          if (parseFloat(val.replace(",", "")) > 0) return "text-green-700";
          else if (parseFloat(val.replace(",", "")) == 0) return "";
          else return "text-red-700";
        }
        return "text-red-700";
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

<style lang="scss" scoped>
  .filter-wrapper-box {
    width: 100%;
    border-radius: 8px;
    // background-color: #fff;
    // border: 1px #ced4da solid;
    padding: 20px;
    font-family: "inter";
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
  }

  .filter-field-group {
    display: inline-block;
  }

  .filter-field-group .field-group input,
  .filter-field-group .field-group select {
    padding: 11px 12px;
    background-color: #1a212a;
    border: 1px #6c757d solid;
    border-radius: 7px;
    color: #d9d9d9;
    display: inline-block;
    margin-bottom: 10px;
  }

  .filter-field-group-lable {
    color: rgb(211, 211, 211);
    font-size: 13px;
  }

  .margin-top-17px,
  .filter-button-box {
    margin-top: 17px;
  }

  .border-radius-5 {
    border-radius: 5px !important;
  }

  .filter-field-group .field-group {
    margin-top: 5px;
  }

  #filterbutton {
    padding: 6px 22px;
  }

  @media only screen and (max-width: 600px) {
    .wrapper {
      padding: 3px;
    }

    .filter-wrapper-box {
      border: none;
      padding: 0;
    }

    .filter-field-group {
      padding: 1px;
    }

    .filter-field-group .field-group input,
    .filter-field-group .field-group select {
      padding: 10px 1px;
      width: 100%;
    }

    .filter-button-box {
      width: 100%;
    }

    .margin-top-20px,
    .filter-button-box {
      margin-top: 0 !important;
    }
  }

  @media only screen and (min-width: 768px) {
    .filter-field-group .field-group input,
    .filter-field-group .field-group select {
      padding: 10px 6px;
      width: 100%;
    }

    .filter-field-group {
      padding-right: 3px;
      padding-left: 3px;
    }
  }

  .tblResult {
    width: 100%;
    font-size: 12px;
  }

  .tblResult tr th {
    background: #c9c9c9;
  }

  #prvMatched tr,
  th,
  td {
    // border: 1px solid #394452;
    padding: 8px 4px;
  }

  .tblResult tbody tr {
    border: 1px solid #394452;
  }

  .scrolable::-webkit-scrollbar {
    border: 1px solid #1a212a;
  }

  .scrolable::-webkit-scrollbar-thumb {
    background-color: #3b444b;
  }

  .scrolable::-webkit-scrollbar-track {
    background-color: #1a212a;
  }

  .border-left-blue {
    border-left: 4px solid #336794 !important;
  }

  .border-left-red {
    border-left: 4px solid #e6465b !important;
  }

  .tblResult tr th:first-child {
    border-left: 4px solid #3b444b;
  }

  .clickable-row {
    border-left: 1px solid #8283b7;
  }

  // .clickable-row td {
  //   border-bottom: none !important;
  // }

  // tr.clickable-row:last-child {
  //   border-bottom: none;
  // }
</style>
<style>
  @media only screen and (max-width: 992px) {
    .modal-dialog-custome {
      max-width: 100vw !important;
    }
  }
</style>
