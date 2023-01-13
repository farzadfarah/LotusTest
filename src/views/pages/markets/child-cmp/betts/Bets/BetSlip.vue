<template>
  <modal
    v-if="
      bet &&
      bet.status != 'SUSPENDED' &&
      bet.status != 'BALLRUNNING' &&
      showConfirm == true
    "
    modalSize="modal-md"
    name="show-player-book-detail-modal"
  >
    <template v-slot:header>Player Book Detail {{ showConfirm }}</template>
    <!-- <template v-slot:close>
      {{ showConfirm }}
      <button type="button" @click="showConfirm = false">
        <span aria-hidden="true">&times;</span>
      </button>
    </template> -->

    <template v-slot:default>
      <div class="overlay text-sm" style="display: flex">
        <div class="w-full">
          <h3>Please Confirm Your Bet</h3>
          <div>
            <span :class="betRedOrBlue">{{ betRedOrBlue }}ing</span>
            <strong class="ml-1">{{ bet.runnername }}</strong>
          </div>
          <div class="border mt-1 p-2 grid grid-cols-3 text-center">
            <div>
              <div>Odds</div>
              <strong id="odds">{{ odds }}</strong>
            </div>
            <div>
              <div>Stake</div>
              <strong id="stake">{{ stacks }}</strong>
            </div>
            <div>
              <div id="plName">Profit</div>
              <strong id="pl">{{
                bet.betType == 2 ? stacks : bet.expectedData || 0.0
              }}</strong>
            </div>
          </div>

          <div class="flex justify-between mt-2">
            <a
              id="back"
              @click="showConfirm = false"
              class="text-gray-900 bg-white border border-gray-400 hover:bg-sky-900 focus:ring-4 focus:none font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >Back</a
            >

            <button
              id="confirm"
              @click="placeBet()"
              class="float-right text-white bg-cyan-800 border border-gray-500 hover:bg-sky-900 focus:ring-4 focus:none font-medium rounded text-sm px-5 py-1 leading-4 text-center mr-2 mb-2"
              :diabled="waiting"
              :class="waiting ? 'disabled' : ''"
            >
              Place Bet
              <p class="text-[0.6rem] font-normal">
                Profit:
                {{ bet.betType == 2 ? stacks : bet.expectedData || 0.0 }}
              </p>
            </button>
          </div>
        </div>
      </div>
    </template>
  </modal>

  <div
    v-if="loading"
    class="fixed top-0 right-0 left-0 z-20 bg-[#000000b3] w-full h-full"
  >
    <div
      class="fixed top-[30%] right-0 left-0 z-20 w-full h-54 bg-white p-7 shadow"
      :class="{
        'border-blue-200 border-b-8': betRedOrBlue == 'back',
        'border-red-200 border-b-8': betRedOrBlue == 'lay',
      }"
    >
      <div class="text-center text-sm font-bold">
        <p>Your bet is being processed.</p>
        <p>Please wait...</p>
      </div>
      <BaseTimer
        :TIME_LIMIT="timeLimit"
        @close-bet-slip-emited="closeBetSlipEmited"
      ></BaseTimer>
    </div>
  </div>

  <div
    :class="{
      'bg-blue-200 ': betRedOrBlue == 'back',
      'bg-red-200 ': betRedOrBlue == 'lay',
    }"
    class="shadow-md px-1 font-cera-pro relative bg-white mb-1"
    v-if="bet && bet.status != 'SUSPENDED' && bet.status != 'BALLRUNNING'"
  >
    <div>
      <!-- <div class="item-title truncate text-sm" v-if="betRedOrBlue == 'back'">
      Back (Bet For):
      <span class="font-bold text-blue-700">{{ bet.runnername }}</span>
    </div>
    <div class="item-title truncate text-sm" v-if="betRedOrBlue == 'lay'">
      Lay (Bet Against):
      <span class="font-bold text-red-700">{{ bet.runnername }}</span>
    </div> -->
      <div
        class="item"
        :class="{
          'item-blue': betRedOrBlue == 'back',
          'item-pink': betRedOrBlue == 'lay',
        }"
      >
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:m-auto mb-2 mt-3">
          <div class="md:col-start-2">
            <label
              for="small-input"
              class="block mb-2 text-xs font-medium text-gray-900 --dark:text-gray-300 uppercase"
              >Odds:</label
            >
            <div class="flex items-center align-middle bg-white rounded-lg">
              <input
                type="text"
                @keypress="isNumber($event)"
                class="p-1 h-full w-full text-gray-900 text-center text-sm shadow-md z-1 bg-gray-50 rounded-none border"
                v-model="odds"
              />
            </div>
          </div>
          <div class="md:col-start-3">
            <label
              for="small-input"
              class="block mb-2 text-xs font-medium text-gray-900 --dark:text-gray-300 uppercase"
              >Stake:</label
            >
            <div class="flex items-center align-middle bg-white rounded-lg">
              <input
                type="text"
                @keypress="isNumber($event)"
                class="p-1 h-full w-full text-gray-900 text-center text-sm shadow-md z-1 bg-gray-50 rounded-none border"
                v-model="stacks"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-2 items-center mt-3 bg-white p-2">
          <div
            class="btn-stak-market"
            @click="helper_stack_market_click(betSlipData[0]?.value, 0, $event)"
            v-cloak
          >
            +{{ betSlipData[0]?.value }}
          </div>
          <div
            class="btn-stak-market"
            @click="helper_stack_market_click(betSlipData[1]?.value, 0, $event)"
          >
            +{{ betSlipData[1]?.value }}
          </div>
          <div
            class="btn-stak-market"
            @click="helper_stack_market_click(betSlipData[2]?.value, 0, $event)"
          >
            +{{ betSlipData[2]?.value }}
          </div>
          <div
            class="btn-stak-market"
            @click="helper_stack_market_click(betSlipData[3]?.value, 0, $event)"
          >
            +{{ betSlipData[3]?.value }}
          </div>
          <div
            class="btn-stak-market"
            @click="helper_stack_market_click(betSlipData[4]?.value, 0, $event)"
          >
            +{{ betSlipData[4]?.value }}
          </div>
          <div
            class="btn-stak-market"
            @click="helper_stack_market_click(betSlipData[5]?.value, 0, $event)"
          >
            +{{ betSlipData[5]?.value }}
          </div>
          <div
            class="btn-stak-market"
            @click="helper_stack_market_click(betSlipData[6]?.value, 0, $event)"
          >
            +{{ betSlipData[6]?.value }}
          </div>
          <div
            class="btn-stak-market"
            @click="helper_stack_market_click(betSlipData[7]?.value, 0, $event)"
          >
            +{{ betSlipData[7]?.value }}
          </div>
        </div>
        <div class="mt-3 mb-3">
          <button
            type="button"
            @click="closeBetSlip()"
            class="mobile-cancel bottomBtns-remove"
          >
            Remove All
          </button>
          <button
            type="button"
            :class="isActiveButton ? 'bg-sky-900' : 'bg-gray-500'"
            :disabled="!isActiveButton"
            class="float-right bet-place-btn hover:custome-shadow"
            @click="confirmBeforePlacing ? (showConfirm = true) : placeBet()"
          >
            Place bet
            <p v-if="isActiveButton" class="text-[0.6rem] font-normal">
              Profit: {{ bet.betType == 2 ? stacks : bet.expectedData || 0.0 }}
            </p>
          </button>
        </div>
        <div class="flex justify-between px-2">
          <span class="ml-r text-sm font-medium text-[#3c3c3c] mb-4"
            ><input
              type="checkbox"
              v-model="confirmBeforePlacing"
              @change="updateConfirmBeforePlaceBet"
              id="default-toggle"
              class="___sr-only peer mr-2"
            />Confirm bet before placing</span
          >
          <label
            for="default-toggle"
            class="relative inline-flex items-center mb-4 cursor-pointer"
          >
            <!-- <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
            ></div> -->
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Modal from "@/layouts/components/modal/Modal.vue";

  import { defineAsyncComponent } from "vue";

  // import BaseTimer from "./BaseTimer.vue";
  export default {
    props: {
      bet: {
        type: Object,
        default: () => {},
      },
      betRedOrBlue: {
        type: String,
        default: null,
      },
    },
    data() {
      return {
        showConfirm: false,
        betSlipData: [],
        odds: 0,
        stacks: 0,
        stacksOrOdds: 0,
        mouseClicked: false,
        loading: false,
        timerLoadingInterval: null,
        isSuccessBetSlip: true,
        isResponsed: false, // waiting for response and timer of loader down
        waiting: false,
        confirmBeforePlacing:
          this.$store.getters["moduleMain/getConfirmBeforePlaceBet"] || false,
      };
    },
    methods: {
      closeBetSlip() {
        this.$emit("close", true);
        this.loading = false;
        // clear expected in close
        this.odds = 0;
        this.stacks = 0;
        this.showConfirm = false;
        this.waiting = false;
      },
      closeBetSlipEmited() {
        if (this.isSuccessBetSlip == false) {
          this.$emit("close", true);
          this.loading = false;
          // clear expected in close
          this.odds = 0;
          this.stacks = 0;
        } else {
          this.isSuccessBetSlip = false;
          this.loading = false;
        }
      },
      geBetSlipData() {
        if (this.$store.getters["configModule/BetSlipData"].length > 0) {
          this.betSlipData = this.$store.getters["configModule/BetSlipData"];
        } else {
          this.$store
            .dispatch("configModule/getBetSlipData")
            .then((res) => {
              this.betSlipData = res;
            })
            .catch((error) => {
              this.toast.error(error.data.error.message);
            });
        }
      },
      helper_stack_market_click(val, val2, event) {
        try {
          this.stacks = this.hasVal(this.stacks);
          if ((parseFloat(this.stacks) + parseFloat(val)).toFixed(0) >= 0)
            this.stacks = (parseFloat(this.stacks) + parseFloat(val)).toFixed(
              0
            );
          else this.stacks = 0;
          if (event) {
            event.target.classList.toggle("clicked");
            setTimeout(function () {
              event.target.classList.toggle("clicked");
            }, 200);
          }
        } catch (ex) {
          //console.log(ex);
        }
      },
      helper_stack_market_click_AddStr(val, val2, event) {
        try {
          this.stacks = this.hasVal(this.stacks);
          if (parseFloat(this.stacks + val).toFixed(0) >= 0)
            this.stacks = parseFloat(this.stacks + val).toFixed(0);
          else this.stacks = 0;
          if (event) {
            event.target.classList.toggle("clicked");
            setTimeout(function () {
              event.target.classList.toggle("clicked");
            }, 200);
          }
        } catch (ex) {
          //console.log(ex);
        }
      },
      backspace() {
        if (this.stacks < 10) this.stacks = 0;
        else {
          this.stacks = parseInt(
            this.stacks
              .toString()
              .substring(0, this.stacks.toString().length - 1)
          );
        }
      },

      helper_market_click(val) {
        if (this.betRedOrBlue == "back") {
          val = val * 100;
          this.helper_stack_market_click(val);
        } else {
          val = val * 0.01;
          this.helper_odd_market_click(val);
        }
      },

      helper_odd_market_click(val) {
        if (!this.odds) this.odds = 0;
        if (this.bet.betType == 2) {
          if (val < 0) this.odds = (parseInt(this.odds) - 1).toFixed(0);
          else this.odds = (parseInt(this.odds) + 1).toFixed(0);
        } else {
          this.odds = (parseFloat(this.odds) + parseFloat(val)).toFixed(2);
        }
        if (parseFloat(this.odds) < 0) this.odds = 0;
      },
      isNumber: function (evt) {
        evt = evt ? evt : window.event;
        let charCode = evt.which ? evt.which : evt.keyCode;
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46 &&
          charCode != 45
        ) {
          evt.preventDefault();
        } else {
          // dar fancy ashar gaboul nist pas az ashar jelogiri mikonim
          if (this.bet.betType == 2 && charCode == 46) evt.preventDefault();
          return true;
        }
      },
      placeBet() {
        if (!this.$store.getters["authModule/userinfo"]) {
          if (localStorage.getItem("accessToken")) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("expire_in");
            localStorage.removeItem("userinfo");
          }

          this.$store.dispatch("authModule/logout").then({}).catch();

          this.$router.push("/auth/login");
          return;
        }

        if (this.waiting == true) {
          return;
        }
        this.showConfirm = false;
        this.loading = true;
        this.isResponsed = false;
        this.waiting = true;

        /**
         * bet.betType = 0 => Match Odds
         * bet.betType = 1 => Bookmaker
         * bet.betType = 2 => Fancy
         */
        // type
        let typeBlackLay = 0;
        let fancyVal = 0;
        let rate = 0;
        let runnerId = 0;
        // fancy
        if (this.bet.betType == 2) {
          if (this.betRedOrBlue == "back") {
            typeBlackLay = 3;
            fancyVal = this.odds; //this.bet.backPrice;
            rate = parseFloat(this.bet.backSize);
          } else {
            typeBlackLay = 4;
            fancyVal = this.odds; // this.bet.layPrice;
            rate = parseFloat(this.bet.laySize);
          }
          runnerId = null;
        } // others
        else {
          if (this.betRedOrBlue == "back") typeBlackLay = 1;
          else typeBlackLay = 2;
          rate = parseFloat(this.odds);
          if (this.bet.id) runnerId = parseFloat(this.bet?.id);
        }
        if (!this.$route.params["eventid"]) return false;
        // if bet is locked return false and error message
        /*if (this.bet.limitObj) {
        if (this.bet.limitObj.limit.isBetLock == true) {
          this.toast.error("Bet Is Locked!");
          this.loading = false;
          this.waiting = false;
          return false;
        }
      }*/
        const data = {
          placeTime: null,
          type: typeBlackLay,
          rate: rate,
          stake: parseFloat(this.stacks),
          fancyValue: fancyVal,
          runnerId: runnerId,
          marketId: parseFloat(this.bet.marketId),
          eventId: parseInt(this.$route.params["eventid"]),
        };

        this.$store
          .dispatch("moduleMain/placeBet", data)
          .then((response) => {
            this.isResponsed = true;
            this.toast.success(response.data.result);
            this.closeBetSlip();
            // before set place bet load User Odds and Change events
            this.$store
              .dispatch("moduleMain/getUserOpenBets")
              .then(() => {})
              .catch();
            this.$store
              .dispatch("moduleMain/getUserExpectedProfitLoss") //changedProfitlossAction
              .then(() => {})
              .catch(() => {})
              .finally(() => {});
            /*this.$store
                    .dispatch("moduleMain/getUserOdds")
                    .then(() => {})
                    .catch();*/
            // end load userodds
          })
          .catch((error) => {
            this.isSuccessBetSlip = false;
            this.toast.error(error.data.error.message);
          })
          .finally(() => {
            this.isResponsed = true;
            this.loading = false;
            this.waiting = false;
          });
      },
      hasVal(val) {
        if (val) return val;
        else return 0;
      },

      updateConfirmBeforePlaceBet() {
        this.$store
          .dispatch(
            "moduleMain/updateConfirmBeforePlaceBet",
            this.confirmBeforePlacing
          )
          .then(() => {})
          .catch(() => {})
          .finally(() => {});
      },
    },
    mounted() {
      this.geBetSlipData();
      this.odds =
        this.betRedOrBlue == "back" ? this.bet.backPrice : this.bet.layPrice;
      this.odds = this.hasVal(this.odds);

      this.emitter.on("show-player-book-detail-modal", (result) => {
        this.closeBetSlip();
      });
    },
    computed: {
      timeLimit() {
        if (this.bet.limitObj && this.bet.limitObj.limit.delayTime) {
          if (this.bet.limitObj.limit.delayTime % 1000 == 0) {
            return this.bet.limitObj.limit.delayTime / 1000;
          } else {
            return Math.ceil(this.bet.limitObj.limit.delayTime / 1000).toFixed(
              0
            );
          }
        } else return 7;
      },

      isActiveButton() {
        /*if (this.betRedOrBlue == "back") {
        if (this.bet.backPrice != this.odds || (this.stacks != 0 && this.stacks != ""))
          return true;
        else return false;
      } else if (this.betRedOrBlue == "lay") {
        if (this.bet.layPrice != this.odds || (this.stacks != 0 && this.stacks != ""))
          return true;
        else return false;
      }*/

        if (
          this.stacks == 0 ||
          this.stacks == "" ||
          this.odds == 0 ||
          this.odds == ""
        )
          return false;
        return true;
      },
    },
    watch: {
      betRedOrBlue(val) {
        this.odds = val == "back" ? this.bet.backPrice : this.bet.layPrice;
        this.odds = this.hasVal(this.odds);
        this.stacks = 0;
      },
      "$store.state.configModule.BetSlipData"() {
        this.geBetSlipData();
      },
      odds() {
        let oddsStacks = {
          odds: this.odds,
          stacks: this.stacks,
          runner: this.bet,
          betRedOrBlue: this.betRedOrBlue,
        };
        this.emitter.emit("expected", oddsStacks);
      },
      stacks() {
        let oddsStacks = {
          odds: this.odds,
          stacks: this.stacks,
          runner: this.bet,
          betRedOrBlue: this.betRedOrBlue,
        };
        this.emitter.emit("expected", oddsStacks);
      },
    },
    components: {
      BaseTimer: defineAsyncComponent(() => import("./BaseTimer.vue")),
      Modal: defineAsyncComponent(() =>
        import("@/layouts/components/modal/Modal.vue")
      ),
    },
    unmounted() {
      let oddsStacks = {
        odds: 0,
        stacks: 0,
        runner: this.bet,
        betRedOrBlue: this.betRedOrBlue,
      };
      this.emitter.emit("expected", oddsStacks);
    },
  };
</script>

<style lang="scss" scoped>
  .value-button.clicked {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(33, 37, 41) !important;
  }

  .current-counter {
    position: absolute;
    top: 40%;
    right: 37%;
    font-size: 25px;
    text-align: center;

    .value-button.clicked {
      color: rgb(255, 255, 255) !important;
      background-color: rgb(33, 37, 41) !important;
    }
  }

  .current-counter {
    position: absolute;
    top: 40%;
    right: 37%;
    font-size: 25px;
    text-align: center;
    color: #36465a;
  }

  .vue3-circular-progressbar {
    margin: 20px auto;
  }

  .slip-minus-plus::before {
    color: white;
  }

  .btn-stak-market {
    @apply bg-primary border-none md:border-r md:border-b-2 border-cta-primary-darken text-sm text-gray-200 shadow-md h-7 rounded-sm px-2 py-1 text-center font-normal cursor-pointer;
  }

  .bet-place-btn {
    width: 95px;
    height: 38px;
    color: #fff;
    margin-right: 13px;
    background-color: #5c996f;
    box-shadow: inset -2px -2px 0 #497958;
    border-radius: 3px;
    border-bottom: 1px solid #497958;
    border-right: 1px solid #497958;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }
  .bottomBtns-remove {
    width: 81px;
    height: 38px;
    background: #b2493e;
    box-shadow: inset -2px -2px 0 #8d3a31;
    border-radius: 3px;
    margin-right: 13px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    color: #fff;
  }

  .custome-shadow {
    box-shadow: inset -2px -2px 0 0 var(--cta-primary-darken),
      1.5px 1.5px 0 0 var(--cta-primary-darken);
    background-color: var(--alt-secondary);
  }
</style>
