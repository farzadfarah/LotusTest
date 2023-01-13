<!-- @format -->

<template>
  <div
    class="flex font-cera-pro border-b py-[1px] pl-3 pr-0 bet-item bg-white md:hover:bg-[#f7f7f7] min-h-[42px]"
  >
    <div class="flex flex-col w-3/5">
      <div class="text-sm font-semibold min-w-0 truncate">
        {{ betdata.runnername }}
      </div>

      <div class="text-sm font-normal" v-if="!fancyProfit">
        <span
          :class="[
            profitData > 0
              ? 'text-green-600'
              : profitData < 0
              ? 'text-red-600'
              : '',
          ]"
        >
          {{ profitData }}

          <span
            v-if="betdata.expectedData && betdata.expectedData != 0"
            :class="color()"
          >
            &nbsp;
            <i
              class="ui-icon theme-arrow-right text-[9px]"
              :class="color()"
            ></i>
            &nbsp;
            {{ expected() }}
          </span>
        </span>
      </div>
    </div>
    <div class="flex float-right w-2/5 relative" dir="rtl">
      <a
        :key="betdata.laySize"
        v-if="betdata.betType != 2"
        :class="
          betdata.showBetSlip == true && singleSelected == 'lay'
            ? 'bg-white border-2 border-red-200 border-b-white'
            : 'bg-red-200'
        "
        @click="selectBetButton('lay')"
        class="flex flex-col px-1 text-center justify-center min-w-[62px] mr-1 truncate cursor-pointer"
      >
        <div class="text-xs font-medium">{{ betdata.layPrice }}</div>
        <div class="text-xs font-normal truncate">
          {{ sizeBetRounded(betdata.laySize) }}
        </div>
      </a>
      <!---->
      <a
        :key="betdata.backSize"
        v-if="betdata.betType != 2"
        :class="
          betdata.showBetSlip == true && singleSelected == 'back'
            ? 'bg-white border-2 border-blue-200 border-b-white'
            : 'bg-blue-200'
        "
        @click="selectBetButton('back')"
        class="flex flex-col px-1 text-center justify-center min-w-[62px] mr-1 truncate cursor-pointer"
      >
        <!-- <transition-group name="bounce"> -->
        <div :key="betdata.backSize">
          <div class="text-xs font-medium">{{ betdata.backPrice }}</div>
          <div class="text-xs font-normal truncate">
            {{ sizeBetRounded(betdata.backSize) }}
          </div>
        </div>
        <!-- </transition-group> -->
      </a>

      <a
        :key="betdata.backSize"
        v-if="betdata.betType == 2"
        :class="
          betdata.showBetSlip == true && singleSelected == 'back'
            ? 'bg-white border-2 border-blue-200 border-b-white'
            : 'bg-blue-200'
        "
        @click="selectBetButton('back')"
        class="flex flex-col px-1 text-center justify-center min-w-[62px] mr-1 truncate cursor-pointer"
      >
        <div :key="betdata.backSize">
          <div class="text-xs font-medium">{{ betdata.backPrice }}</div>
          <div class="text-xs font-normal truncate">
            {{ sizeBetRounded(betdata.backSize) }}
          </div>
        </div>
      </a>
      <a
        :key="betdata.laySize"
        v-if="betdata.betType == 2"
        :class="
          betdata.showBetSlip == true && singleSelected == 'lay'
            ? 'bg-white border-2 border-red-200 border-b-white'
            : 'bg-red-200'
        "
        @click="selectBetButton('lay')"
        class="flex flex-col px-1 text-center justify-center min-w-[62px] mr-1 truncate cursor-pointer"
      >
        <div class="text-xs font-medium">{{ betdata.layPrice }}</div>
        <div class="text-xs font-normal truncate">
          {{ sizeBetRounded(betdata.laySize) }}
        </div>
      </a>

      <!---->
      <div
        class="w-3 flex min-w-[15px]"
        v-if="fancyProfit && fancyProfitArray.length > 0"
      >
        <img
          @click="showFancyRunner()"
          class="m-auto flex items-center"
          src="@/assets/images/ladder1.png"
        />
      </div>

      <div
        v-if="betdata.status == 'SUSPENDED' || betdata.status == 'BALLRUNNING'"
        class="suspended-overlay min-w-[134px] block absolute bg-[#eee] h-full rounded text-center"
        style="line-height: 2.5rem"
      >
        <p>
          {{ betdata.status == "SUSPENDED" ? "SUSPENDED" : "BALL RUNNING" }}
        </p>
      </div>
    </div>
  </div>

  <div class="md:hidden">
    <bet-slip-vue
      :bet="betdata"
      v-if="betdata.showBetSlip"
      :betRedOrBlue="singleSelected"
      @close="closeBetSlip"
    />
  </div>

  <modal
    v-if="showModal"
    modalSize="modal-md"
    name="show-player-book-detail-modal"
  >
    <template v-slot:header>Player Book Detail</template>
    <template v-slot:close>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true" @click="showModal = false">&times;</span>
      </button>
    </template>
    <template v-slot:default>
      <div class="row">
        <div class="col">
          <table
            class="min-w-full divide-y divide-sky-900 table-fixed --dark:divide-gray-700"
          >
            <thead class="bg-gray-300 --dark:bg-gray-700">
              <tr>
                <th
                  class="py-3 px-3 text-xs font-medium rounded-l-md tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400"
                >
                  Runs
                </th>
                <th
                  class="py-3 px-3 text-xs font-medium rounded-r-md tracking-wider text-center text-gray-700 uppercase --dark:text-gray-400"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-100 divide-y divide-new-sky">
              <tr
                v-for="item in fancyRunner"
                :key="item"
                :class="getFancyClass(item.amount)"
                class="hover:bg-gray-100 --dark:hover:bg-gray-700"
              >
                <td
                  class="py-2 px-3 text-xs sm:text-sm font-medium rounded-l-md text-gray-900 whitespace-nowrap"
                >
                  {{ item.runnerId }}
                </td>
                <td
                  class="text-center rounded-r-md py-2 px-3 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  {{ item.amount }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
  import { defineAsyncComponent } from "vue";
  //import Modal from "../../../../../../layouts/components/modal/Modal.vue";
  //import BetSlipVue from "./BetSlip.vue";

  export default {
    name: "bet-item",
    components: {
      BetSlipVue: defineAsyncComponent(() => import("./BetSlip.vue")),
      Modal: defineAsyncComponent(() =>
        import("../../../../../../layouts/components/modal/Modal.vue")
      ),
    },
    emits: ["ChangeAllBaetSlipStatus"],
    props: {
      betdata: {
        type: Object,
        default: () => {},
      },
      allEqual: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        singleSelected: null,
        showModal: false,
        fancyRunner: [],
        isActive: false,
      };
    },
    methods: {
      sizeBetRounded(value) {
        if (value && value != "") {
          value = value.replace(/\,/g, "");
          if (parseFloat(value) < 1000) return value;
          else if (parseFloat(value) >= 1000 && parseFloat(value) < 1000000) {
            return (parseFloat(value) / 1000).toFixed(0) + "k";
          } else if (parseFloat(value) >= 1000000) {
            return (parseFloat(value) / 1000000).toFixed(0) + "m";
          }
        }
      },
      closeBetSlip() {
        this.singleSelected = null;

        this.$emit("ChangeAllBaetSlipStatus", {
          status: false,
          betId: this.betdata.betId,
          betType: this.betdata.betType,
          id: this.betdata.id,
          marketId: this.betdata.marketId,
        });
      },
      selectBetButton(val) {
        //this.$emit("closeAllBetSlip");
        this.singleSelected = val;
        this.$emit("ChangeAllBaetSlipStatus", {
          status: true,
          betId: this.betdata.betId,
          betType: this.betdata.betType,
          id: this.betdata.id,
          marketId: this.betdata.marketId,
        });
      },

      showFancyRunner() {
        this.fancyRunner = this.betdata.profitloss;
        this.showModal = true;
      },

      getFancyClass(val) {
        if (val > 0) return "rowBorderBack";
        else if (val < 0) return "rowBorderLay";
        else return "rowBorderNon";
      },

      expected() {
        return this.profitData2() + this.betdata.expectedData;
        /*if (this.isNegative()) {
          let exp =
            parseFloat(this.betdata.expectedData) * -1 +
            parseFloat(this.profitData2());

          if (exp < 0) exp = exp * -1;
          return exp;
        } else {
          return (
            parseFloat(this.betdata.expectedData) + parseFloat(this.profitData2())
          );
        }*/
      },

      isNegative() {
        if (this.color() == "text-danger" && this.betdata.expectedData > 0) {
          return true;
        } else return false;
      },

      color() {
        /*if (this.betdata?.br && !this.singleSelected) {
          if (this.betdata.br == "back") return "text-danger";
          else return "text-success";
        }

        if (this.singleSelected == "back") {
          if (this.betdata.showBetSlip == true) return "text-success";
          else return "text-danger";
        } else {
          if (this.betdata.showBetSlip == true) return "text-danger";
          else return "text-success";
        }*/

        if (this.expected() < 0) return "text-red-600";
        else return "text-green-600";
      },

      profitData2() {
        if (this.betdata.betType == 2) {
          if (this.betdata.profitloss.length > 0)
            return this.betdata.profitloss;
          else return null;
        } else {
          if (this.betdata.profitloss) {
            return this.betdata.profitloss;
          } else {
            return 0;
          }
        }
      },
    },
    computed: {
      fancyProfit() {
        if (this.betdata.betType == 2 && this.betdata.profitloss.length > 0)
          return true;
        else return false;
      },

      fancyProfitArray() {
        if (this.betdata.betType == 2 && this.betdata.profitloss.length > 0)
          return this.betdata.profitloss;
        else return [];
      },

      profitData() {
        if (this.betdata.betType == 2) {
          if (this.betdata.profitloss.length > 0)
            return this.betdata.profitloss;
          else return null;
        } else {
          if (this.betdata.profitloss) {
            return this.betdata.profitloss;
          } else {
            return 0;
          }
        }
      },

      showMaxAndMin() {
        if (
          this.betdata?.limitObj?.limit.maxStake &&
          this.betdata?.limitObj?.limit.maxStake != 0 &&
          this.betdata?.limitObj?.limit.minStake &&
          this.betdata?.limitObj?.limit.minStake != 0
        )
          return true;
        return false;
      },

      gridStyle() {
        if (
          this.fancyProfit == true &&
          this.fancyProfitArray.length > 0 &&
          this.allEqual == true
        )
          return "grid-template-columns: 1fr 31px 121px;grid-column-gap: 4px;";
        else if (
          this.fancyProfit == true &&
          this.fancyProfitArray.length > 0 &&
          this.allEqual != true
        )
          return "grid-template-columns: 1fr 50px 50px 121px;grid-column-gap: 4px;";
        else if (this.fancyProfitArray.length == 0 && this.allEqual == true)
          return "grid-template-columns: 1fr 121px;grid-column-gap: 4px;";
        /*if (this.fancyProfitArray.length == 0 && this.allEqual != true)*/ else
          return "grid-template-columns: 1fr 50px 121px;";
      },

      styleOfSelectedBet() {
        if (this.betdata.showBetSlip == true && this.singleSelected == "back")
          return "border-2 border-blue-200 p-2 ---rounded-t-lg";
        else if (
          this.betdata.showBetSlip == true &&
          this.singleSelected == "lay"
        )
          return "border-2 border-red-200 p-2 ---rounded-t-lg";
        return "";
      },
    },
    mounted() {
      this.emitter.on("show-player-book-detail-modal", (result) => {
        if (result) {
          this.showModal = result;
        } else {
          this.showModal = false;
        }
      });
    },
  };
</script>

<style lang="scss" scoped>
  .h-100 {
    height: 100%;
  }

  .active .spark-lay {
    background-color: #f4496d !important;
  }

  .active .spark-back {
    background-color: #1a8ee1 !important;
  }

  .spark-lay {
    background-color: #faa9ba;
  }

  .spark-back {
    background-color: #72bbef;
  }

  .spark-box {
    // border: 1px solid #eee;
    border-radius: 5px;
  }

  /*.ladder-btn {
  background: #1a212a;
  width: 28px;
  outline-style: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px;
  margin-top: 5px;

  img {
    width: 100%;
  }
}*/

  .bounce-enter-active,
  .bounce-leave-active {
    animation: mymove 0.5s;
    //background-color: #f9fb72;
    //transition: background-color 220.5s ease-out;
  }

  .bounce-enter-from,
  .bounce-leave-to {
    //animation: mymove 0.5s reverse;
    background-color: #94dfff;
    transition: background-color 220.5s ease-out;
  }

  @keyframes mymove {
    //from {background-color: red;}
    to {
      //background-color: blue;
      border: 2px solid #f9fb72;
      background-color: #f9fb72;
      box-shadow: 0 0 40px 40px #fdfeb2 inset, 0 0 0 0 #fff985;
      //background-color: rgb(5, 255, 5);
      cursor: pointer;
      -webkit-transition: background-color 220.5s ease-out;
      -moz-transition: background-color 220.5s ease-out;
      -o-transition: background-color 220.5s ease-out;
      transition: background-color 220.5s ease-out;
    }
  }

  .yellow-blink-box {
    border: 2px solid #f9fb72;
    background-color: #f9fb72;
    box-shadow: 0 0 40px 40px #fdfeb2 inset, 0 0 0 0 #fff985;
    //background-color: rgb(5, 255, 5);
    cursor: pointer;
    -webkit-transition: background-color 220.5s ease-out;
    -moz-transition: background-color 220.5s ease-out;
    -o-transition: background-color 220.5s ease-out;
    transition: background-color 220.5s ease-out;
  }

  .rowBorderBack {
    background-color: #94dfff;
  }

  .rowBorderLay {
    background-color: #f9c8d3;
  }

  .rowBorderNon {
    background-color: #ffffff87;
  }

  /*.single-game .list .single-overview .title-wrapper {
  width: 100%;
  display: grid;
  // grid-template-columns: 1fr 50px 121px;
  grid-column-gap: 10px;
  margin-top: 5px;
}*/

  .lay-gradient {
    background-image: linear-gradient(
      270deg,
      rgba(247, 205, 214, 0.75) 5%,
      #f0c0cb 60%
    );
  }

  .back-gradient {
    justify-content: center;
    width: 18.66667vw;
    background-image: linear-gradient(
      90deg,
      rgba(151, 199, 234, 0.7) 0%,
      #97c7ea 65%
    );
  }
</style>
