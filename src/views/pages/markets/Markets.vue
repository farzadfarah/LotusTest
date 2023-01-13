<template>
  <div class="w-full flex h-full relative text-text-body">
    <section
      class="w-full md:w-2/3 md:mt-1 h-full relative flex flex-col py-0 md:py-2 md:px-4"
    >
      <div
        class="w-full flex items-center font-cera-round-pro text-sm font-bold px-2 md:text-center bg-[#163439] md:bg-transparent md:text-black md:text-xl py-2 text-white"
        v-if="curentEvent && curentEvent?.title"
      >
        <i
          v-if="
            curentEvent.status == 'IN_PLAY' ||
            curentEvent.matchDate == 'In-Play'
          "
          class="ui-icon theme-playbutton text-sm inplay-icon md:hidden"
        ></i>
        <i
          v-if="
            curentEvent.status == 'IN_PLAY' ||
            curentEvent.matchDate == 'In-Play'
          "
          class="ui-icon theme-playbutton text-sm hidden md:block inplay-icon-green"
        ></i>
        <span class="mt-[2px]">{{ curentEvent?.title }}</span>
      </div>

      <hr class="w-full hidden md:block my-2 border-[#5a5a5a]" />

      <div
        class="w-full mb-0 border-t border-t-[#163439] justify-center text-center font-cera-round-pro sticky sm:relative top-[56px] sm:top-0 z-10"
      >
        <div class="w-full mb-[1px] bg-primary">
          <ul
            class="flex flex-wrap flex-row w-full -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2 flex-1 md:flex-none" role="presentation">
              <button
                @click.prevent="setActive('markets')"
                :class="
                  isActive('markets') == true
                    ? 'border-2-b border-secondary'
                    : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                "
                class="text-white inline-flex py-4 px-4 text-[0.65rem] font-normal text-center rounded-t-lg border-b-2 border-transparent group"
                type="button"
              >
                MARKETS
              </button>
            </li>
            <li class="mr-2 flex-1 md:flex-none" role="presentation">
              <button
                @click.prevent="setActive('live')"
                :class="
                  isActive('live') == true
                    ? 'border-2-b border-secondary'
                    : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                "
                class="text-white inline-flex py-4 px-4 text-[0.65rem] font-normal text-center rounded-t-lg border-b-2 border-transparent group"
                type="button"
              >
                LIVE
              </button>
            </li>
            <li class="mr-2 flex-1 md:flex-none" role="presentation">
              <button
                @click.prevent="setActive('openbets')"
                :class="
                  isActive('openbets') == true
                    ? 'border-2-b border-secondary'
                    : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                "
                class="text-white inline-flex py-4 px-4 text-[0.65rem] font-normal text-center rounded-t-lg border-b-2 border-transparent group"
                type="button"
              >
                OPEN BETS ({{ openBetData.length }})
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full mb-3" id="myTabContent">
        <div
          :class="isActive('markets') ? '' : 'hidden'"
          class="bg-white rounded-lg dark:bg-gray-800"
        ></div>
        <div :class="isActive('live') ? '' : 'hidden'" class="bg-black">
          <section class="w-full font-cera-round-pro">
            <div :class="videoTab == 1 ? '--min-h-[250px]' : 'hidden'">
              <!-- <video-play :videoUrl="curentEvent?.videoURL" v-if="showVideoBox" :showVideoOrIframe="showVideoTag()">
          </video-play> -->
              <!--<span class="text-white">
             curentEvent?.dreamEventId:{{ curentEvent?.dreamEventId }}</span> -->
              <video-play
                v-if="isActive('live') && videoTab == 1"
                :bet-fair-id="curentEvent?.dreamEventId"
                :videoUrl="curentEvent?.videoURL"
              >
              </video-play>
            </div>
            <div
              :class="
                videoTab == 2 && curentEvent && curentEvent.dreamEventId
                  ? '--min-h-[100px]'
                  : 'hidden'
              "
              v-if="isActive('live') && videoTab == 2"
            >
              <!-- <html-score-card v-if="curentEvent && curentEvent.dreamEventId" :dreamEventId="curentEvent?.dreamEventId"
            :inPlay="
              curentEvent.status == 'IN_PLAY' || curentEvent.matchDate == 'In-Play'
                ? true
                : false
            " :startTime="curentEvent.startTime" :sportId="curentEvent.sportId" :teameName1="curentEvent.team1"
            :teameName2="curentEvent.team2"></html-score-card> -->

              <html-score-card
                v-if="
                  curentEvent &&
                  curentEvent.dreamEventId &&
                  $store.getters['authModule/userinfo']
                "
                :dreamEventId="curentEvent?.dreamEventId"
                :inPlay="
                  curentEvent.status == 'IN_PLAY' ||
                  curentEvent.matchDate == 'In-Play'
                    ? true
                    : false
                "
                :startTime="curentEvent.startTime"
                :sportId="curentEvent.sportId"
                :teameName1="curentEvent.team1"
                :teameName2="curentEvent.team2"
              ></html-score-card>
            </div>
            <div
              v-if="
                curentEvent?.status == 'IN_PLAY' ||
                curentEvent?.matchDate == 'In-Play'
              "
              class="w-full mb-[1px] bg-primary"
            >
              <ul
                class="flex flex-wrap flex-row w-full -mb-px text-sm font-medium text-center"
              >
                <li class="mr-2 flex-1 w" role="presentation">
                  <button
                    @click.prevent="videoTab = 2"
                    :class="
                      videoTab == 2
                        ? 'border-2-b border-secondary'
                        : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                    "
                    class="text-white w-full py-4 px-4 text-[0.65rem] font-normal text-center rounded-t-lg border-b-2 border-transparent group"
                    type="button"
                  >
                    MATCH STATS
                  </button>
                </li>
                <li class="mr-2 flex-1" role="presentation">
                  <button
                    @click.prevent="videoTab = 1"
                    :class="
                      videoTab == 1
                        ? 'border-2-b border-secondary'
                        : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                    "
                    class="text-white w-full py-4 px-4 text-[0.65rem] font-normal text-center rounded-t-lg border-b-2 border-transparent group"
                    type="button"
                  >
                    WATCH LIVE
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div :class="isActive('openbets') ? '' : 'hidden'" class="py-1 px-1">
          <div class="bg-[#0f2327] w-full text-white py-1 px-3 text-sm">
            Matched Bets
          </div>
          <div class="">
            <!-- <open-bets v-if="openBetData.length > 0" :matchBets="openBetData"></open-bets> -->
            <open-bets-new
              v-if="openBetData.length > 0"
              :matchBets="openBetData"
            ></open-bets-new>
            <div v-else class="text-sm p-3 bg-white">
              You have no matched bets.
            </div>
          </div>
        </div>
      </div>

      <section v-if="!isActive('openbets')" class="w-full font-cera-round-pro">
        <div v-if="hasMarket">
          <div class="bets-wrap mt-2">
            <match-odds
              v-cloak
              v-if="betMatchOdds.length > 0"
              :betList="betMatchOdds"
              @change-all-baet-slip-status3="ChangeAllBaetSlipStatus"
              :maxmin="maxminMatchOdd"
              :market-name="marketNames.matchOdds"
            />

            <div class="mt-2"></div>

            <book-maker
              v-if="betBookmakers.length > 0"
              :betList="betBookmakers"
              @change-all-baet-slip-status3="ChangeAllBaetSlipStatus"
              :maxmin="maxminBookmaker"
              :market-name="marketNames.bookMaker"
            />
            <div class="mt-2"></div>

            <toss-maker
              v-if="betToss.length > 0"
              :betList="betToss"
              @change-all-baet-slip-status3="ChangeAllBaetSlipStatus"
              :maxmin="maxminToss"
              :market-name="marketNames.toss"
            />
            <div class="mt-2"></div>

            <fancy-list
              v-if="betFancy.length > 0"
              :betList="betFancy"
              @change-all-baet-slip-status3="ChangeAllBaetSlipStatus"
              :maxmin="maxminFancy"
              :market-name="marketNames.fancy"
            />

            <goals-maker
              v-if="betGoalsMaker.length > 0"
              :betList="betGoalsMaker"
              @change-all-baet-slip-status3="ChangeAllBaetSlipStatus"
              :maxmin="maxminGoalsMaker"
            />
          </div>
        </div>

        <div
          v-if="!hasMarket && isCallApi"
          class="m-auto p-4 rounded-sm text-sm font-cera-pro"
        >
          <p>No market available</p>
        </div>
      </section>
    </section>
    <div class="w-full md:w-1/3 hidden md:block h-full">
      <div
        class="block relative w-full m-auto font-cera-round-pro mt-2 px-1 h-full"
      >
        <h5 class="border-b border-[#777777] pb-2 mb-2">Betslip</h5>
        <div class="bg-bg-table h-full">
          <ul
            class="flex flex-wrap -mb-px relative"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li
              :class="activeTab == 'betslip' ? 'bg-gray-50 mb-[-1px]' : ''"
              role="presentation"
            >
              <a
                @click.prevent="activeTab = 'betslip'"
                :class="
                  activeTab == 'betslip'
                    ? 'border-gray-50 bg-gray-50'
                    : 'border-transparent bg-stone-300'
                "
                href="#betslip"
                class="inline-flex py-2 px-4 text-xs font-medium text-center border-b-2 border-transparent group"
              >
                Betslip
              </a>
            </li>
            <li
              class="mr-2 bg-gray-50"
              :class="activeTab == 'openbets' ? 'mb-[-1px]' : ''"
              role="presentation"
            >
              <a
                @click.prevent="activeTab = 'openbets'"
                :class="
                  activeTab == 'openbets'
                    ? 'border-gray-50 bg-gray-50'
                    : 'border-transparent bg-stone-300'
                "
                href="#openbets"
                class="inline-flex py-2 px-4 text-xs font-medium text-center border-b-2 border-transparent group"
              >
                Open Bets
              </a>
            </li>
            <li class="absolute right-0">
              <a
                class="press-effect-mini inline-flex py-[6px] cursor-pointer px-4 text-xs font-medium text-center border-b-2 border-transparent group bg-cta-primary-darken text-white rounded float-right"
                @click="stakWithoutModalShow = true"
              >
                Edit Stakes
              </a>
            </li>
          </ul>
          <div id="myTabContent" class="shadow-lg relative">
            <div
              :class="activeTab == 'betslip' ? '' : 'hidden'"
              class="p-3 bg-gray-50 border-new-gray"
            >
              <div class="block text-text-table">
                <div class="">
                  <div
                    v-if="
                      betSlipedData &&
                      betSlipedData.showBetSlip &&
                      slipState.showBetSlip
                    "
                  >
                    <div class="flex items-center justify-start">
                      <div
                        v-if="betSlipedData.br == 'back'"
                        class="w-3 h-3 bg-blue-300 mr-2"
                      ></div>
                      <div v-else class="w-3 h-3 bg-red-300 mr-2"></div>
                      <div>{{ betSlipedData.br }}</div>
                    </div>
                    <h6 class="text-xs m-1">{{ curentEvent?.title }}</h6>
                  </div>
                  <bet-slip
                    class="hidden md:block"
                    :bet="betSlipedData"
                    v-if="
                      betSlipedData &&
                      betSlipedData.showBetSlip &&
                      slipState.showBetSlip
                    "
                    :betRedOrBlue="betSlipedData.br"
                    @close="
                      ChangeAllBaetSlipStatus(
                        false,
                        betSlipedData.betId,
                        betSlipedData.betType,
                        betSlipedData?.id,
                        betSlipedData?.marketId
                      )
                    "
                  ></bet-slip>
                  <div v-else class="p-2 bold">
                    <p>Click on the odds to add selections to the betslip</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="activeTab == 'openbets' ? '' : 'hidden'"
              class="p-3 bg-gray-50 border-new-gray"
            >
              <div
                v-if="
                  openBetsMatchOdds.length > 0 ||
                  openBetsBookmaker.length > 0 ||
                  openBetsFancy.length > 0 ||
                  openBetsToss.length > 0 ||
                  openBetsGoalsmaker.length > 0
                "
                class="border-b border-bg-table-header p-1"
              >
                <div class="">
                  <h3 class="text-sm font-bold uppercase mb-1">My Bets</h3>
                </div>
                <accordion
                  :title="'Match Odds (' + openBetsMatchOdds.length + ')'"
                  open="true"
                  v-if="openBetsMatchOdds.length > 0"
                >
                  <open-bets :matchBets="openBetsMatchOdds"></open-bets>
                </accordion>
                <accordion
                  :title="'Bookmaker (' + openBetsBookmaker.length + ')'"
                  open="true"
                  v-if="openBetsBookmaker.length > 0"
                >
                  <open-bets :matchBets="openBetsBookmaker"></open-bets>
                </accordion>
                <accordion
                  :title="'Fancy (' + openBetsFancy.length + ')'"
                  open="true"
                  v-if="openBetsFancy.length > 0"
                >
                  <open-bets :matchBets="openBetsFancy"></open-bets>
                </accordion>
                <accordion
                  :title="'Toss (' + openBetsToss.length + ')'"
                  open="true"
                  v-if="openBetsToss.length > 0"
                >
                  <open-bets :matchBets="openBetsToss"></open-bets>
                </accordion>
                <accordion
                  :title="'Goalsmaker (' + openBetsGoalsmaker.length + ')'"
                  open="true"
                  v-if="openBetsGoalsmaker.length > 0"
                >
                  <open-bets :matchBets="openBetsGoalsmaker"></open-bets>
                </accordion>
              </div>
            </div>

            <div
              v-if="stakWithoutModalShow"
              class="absolute top-12 left-0 right-0 py-4 px-2 bg-[rgba(0,0,0,.7)]"
            >
              <StackWithoutModal>
                <template #btnCancel>
                  <button
                    @click="stakWithoutModalShow = false"
                    class="px-4 py-2 font-bold text-xs rounded"
                    type="button"
                  >
                    Cancel
                  </button>
                </template>
              </StackWithoutModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //import Bets from "./child-cmp/betts/Bets/Bets.vue";
  //import MatchOdds from "./child-cmp/betts/match-odds/MatchOdds.vue";
  //import BookMaker from "./child-cmp/betts/bookmaker/Book-Maker.vue";
  //import FancyList from "./child-cmp/betts/fancy-list/FancyList.vue";
  //import OpenBets from "./child-cmp/betts/open-bets/OpenBets.vue";
  //import VideoPlay from "./child-cmp/videos/VideoPlay.vue";
  //import HtmlScoreCard from "./child-cmp/scorecards/HtmlScoreCard.vue";
  //import OpenBetsNew from "./child-cmp/betts/open-bets/OpenBetsNew.vue";
  //import TossMaker from "./child-cmp/betts/toss-maker/TossMaker.vue";
  //import GoalsMaker from "./child-cmp/betts/goals-maker/GoalsMaker.vue";
  //import BetSlip from "./child-cmp/betts/Bets/BetSlip.vue";
  //import Accordion from "../../../components/accordion/accordion.vue";

  import { defineAsyncComponent } from "vue";

  //import StackWithoutModal from "@/components/stack/Stack-WithoutModal.vue";
  export default {
    name: "Markets",
    components: {
      //Football,
      //Circket,
      //Tenis,
      MatchOdds: defineAsyncComponent(() =>
        import("./child-cmp/betts/match-odds/MatchOdds.vue")
      ),
      BookMaker: defineAsyncComponent(() =>
        import("./child-cmp/betts/bookmaker/Book-Maker.vue")
      ),
      FancyList: defineAsyncComponent(() =>
        import("./child-cmp/betts/fancy-list/FancyList.vue")
      ),
      OpenBets: defineAsyncComponent(() =>
        import("./child-cmp/betts/open-bets/OpenBets.vue")
      ),
      VideoPlay: defineAsyncComponent(() =>
        import("./child-cmp/videos/VideoPlay.vue")
      ),
      HtmlScoreCard: defineAsyncComponent(() =>
        import("./child-cmp/scorecards/HtmlScoreCard.vue")
      ),
      OpenBetsNew: defineAsyncComponent(() =>
        import("./child-cmp/betts/open-bets/OpenBetsNew.vue")
      ),
      TossMaker: defineAsyncComponent(() =>
        import("./child-cmp/betts/toss-maker/TossMaker.vue")
      ),
      GoalsMaker: defineAsyncComponent(() =>
        import("./child-cmp/betts/goals-maker/GoalsMaker.vue")
      ),
      BetSlip: defineAsyncComponent(() =>
        import("./child-cmp/betts/Bets/BetSlip.vue")
      ),
      Accordion: defineAsyncComponent(() =>
        import("../../../components/accordion/accordion.vue")
      ),
      StackWithoutModal: defineAsyncComponent(() =>
        import("@/components/stack/Stack-WithoutModal.vue")
      ),
    },
    data() {
      return {
        betList: [
          /*{
                betId: 0,
                runnerName: "xyz",
                betName: "myname",
                suspended: false,
                betType: 0,
                showBetSlip: false,
                betBack: { price: 2.02, size: 1250 },
                betLay: { price: 7.24, size: 354 },
              }*/
        ],
        betMatchOdds: [],
        betBookmakers: [],
        betFancy: [],
        betToss: [],
        betGoalsMaker: [],
        slipState: {
          showBetSlip: false,
          betId: -1,
          betType: -1,
          id: -1,
          marketId: -1,
        },
        flag: 0,

        // Open Bets
        openBetData: [],
        showopenbet: false,
        profitlossData: [],
        curentEvent: {},
        showVideoBox: false,
        intervalUserExpectedProfitLoss: null,
        expectedRunner: null,
        expected: { profit: 0, loss: 0 },
        selectedSlipType: null,

        intervalLimits: null,
        limits: [],
        maxminMatchOdd: {},
        maxminBookmaker: {},
        maxminFancy: {},
        maxminToss: {},
        maxminGoalsMaker: {},
        isCallApi: false,
        userOddsResponseTime: 700,
        //
        timeoutUserLimit: 20000,
        timeoutUserExpectedProfitLoss: 60000,
        timeoutFlag: 1000,
        activeItem: "live",
        videoTab: 2,
        betSlipedData: null,
        marketNames: {
          matchOdds: "",
          bookMaker: "",
          fancy: "",
          toss: "",
        },
        activeTab: "betslip",
        stakWithoutModalShow: false,
      };
    },
    methods: {
      isActive(menuItem) {
        return this.activeItem === menuItem;
      },
      setActive(menuItem) {
        this.activeItem = menuItem;
      },

      ChangeAllBaetSlipStatus({ status, betId, betType, id, marketId }) {
        this.slipState = {
          showBetSlip: status,
          betId: betId,
          betType: betType,
          id: id,
          marketId: marketId,
        };

        if (betType == 0) {
          this.betMatchOdds.map((m) => {
            if (betId == m.betId) {
              m.showBetSlip = status;
              this.betSlipedData = m;
            } else m.showBetSlip = false;
          });

          this.betBookmakers.map((m) => (m.showBetSlip = false));
          this.betFancy.map((m) => (m.showBetSlip = false));
          this.betToss.map((m) => (m.showBetSlip = false));
        } else if (betType == 1) {
          this.betBookmakers.map((m) => {
            if (betId == m.betId) {
              m.showBetSlip = status;
              this.betSlipedData = m;
            } else m.showBetSlip = false;
          });

          this.betMatchOdds.map((m) => (m.showBetSlip = false));
          this.betFancy.map((m) => (m.showBetSlip = false));
          this.betToss.map((m) => (m.showBetSlip = false));
        } else if (betType == 2) {
          this.betFancy.forEach((m) => {
            if (betId == m.betId) {
              m.showBetSlip = status;
              this.betSlipedData = m;
            } else m.showBetSlip = false;
          });

          this.betBookmakers.map((m) => (m.showBetSlip = false));
          this.betMatchOdds.map((m) => (m.showBetSlip = false));
          this.betToss.map((m) => (m.showBetSlip = false));
        } else if (betType == 3) {
          this.betGoalsMaker.forEach((m) => {
            m.runners.forEach((e) => {
              if (e.marketId != marketId) {
                e.showBetSlip = false;
              } else {
                if (e.marketId == marketId && id == e.id) {
                  e.showBetSlip = status;
                  this.betSlipedData = e;
                } else e.showBetSlip = false;
              }
            });
          });

          this.betMatchOdds.map((m) => (m.showBetSlip = false));
          this.betBookmakers.map((m) => (m.showBetSlip = false));
          this.betFancy.map((m) => (m.showBetSlip = false));
          this.betToss.map((m) => (m.showBetSlip = false));
        } else if (betType == 4) {
          this.betToss.map((m) => {
            if (betId == m.betId) {
              m.showBetSlip = status;
              this.betSlipedData = m;
            } else m.showBetSlip = false;
          });

          this.betMatchOdds.map((m) => (m.showBetSlip = false));
          this.betBookmakers.map((m) => (m.showBetSlip = false));
          this.betFancy.map((m) => (m.showBetSlip = false));
          //this.betGoalsMaker.map((m) => (m.showBetSlip = false));
        }

        /*this.betList.map((m) => {
            if (betId == m.betId && betType == m.typeId) m.showBetSlip = status;
            else m.showBetSlip = false;
          });*/
      },

      getUserOdds(showloading) {
        if (showloading == true)
          document.getElementById("loading").style.display = "block";

        if (!this.$route.params.eventid) return false;

        let payload = {
          eventId: this.$route.params.eventid,
        };

        let allProfits = this.$store.getters["moduleMain/getProfitloss"];

        if (allProfits && allProfits.length > 0)
          this.profitlossData = allProfits.filter(
            (f) => f.eventId == this.$route.params.eventid
          );

        this.$store
          .dispatch("moduleMain/getUserOdds", payload)
          .then((response) => {
            this.betList = [];
            let stack = {
              showBetSlip: this.slipState.showBetSlip,
              betId: this.slipState.betId,
              betType: this.slipState.betType,
              id: this.slipState.id,
              marketId: this.slipState.marketId,
            };

            let allMarkets = response.data.result;

            this.marketNames.matchOdds = allMarkets.matchOdds?.marketName;
            this.marketNames.bookMaker = allMarkets.bookmaker?.marketName;
            this.marketNames.fancy = allMarkets.fancy?.marketName;
            this.marketNames.toss = allMarkets.toss?.marketName;

            /** ********* For Limit Max And Min ********* */

            console.log(allProfits);
            console.log(allMarkets);
            console.log(this.profitlossData);

            let matchOddsLimits = [];
            let bookmakerLimits = [];
            let fancyLimits = [];
            let goalsMakerLimits = [];
            let tossMakerLimits = [];

            this.limits.forEach((m) => {
              if (m.marketType == "match_odd") matchOddsLimits.push(m);
              else if (m.marketType == "bookmaker") bookmakerLimits.push(m);
              else if (m.marketType == "fancy2") fancyLimits.push(m);
              else if (m.marketType == "goalsmaker") goalsMakerLimits.push(m);
              else if (m.marketType == "toss") tossMakerLimits.push(m);
            });

            const isEqual = (objects, key) => {
              const max = objects[0].limit[key];
              return objects.every((obj) => obj.limit[key] === max);
            };

            //*************** Bookmaker **************** */

            if (bookmakerLimits.length > 0) {
              if (
                isEqual(bookmakerLimits, "maxStake") &&
                isEqual(bookmakerLimits, "minStake")
              ) {
                this.maxminBookmaker["max"] = bookmakerLimits[0].limit.maxStake;
                this.maxminBookmaker["min"] = bookmakerLimits[0].limit.minStake;
              }
            }

            if (matchOddsLimits.length > 0) {
              if (
                isEqual(matchOddsLimits, "maxStake") &&
                isEqual(matchOddsLimits, "minStake")
              ) {
                this.maxminMatchOdd["max"] = matchOddsLimits[0].limit.maxStake;
                this.maxminMatchOdd["min"] = matchOddsLimits[0].limit.minStake;
              }
            }

            if (fancyLimits.length > 0) {
              if (
                isEqual(fancyLimits, "maxStake") &&
                isEqual(fancyLimits, "minStake")
              ) {
                this.maxminFancy["max"] = fancyLimits[0].limit.maxStake;
                this.maxminFancy["min"] = fancyLimits[0].limit.minStake;
              }
            }

            if (goalsMakerLimits.length > 0) {
              if (
                isEqual(goalsMakerLimits, "maxStake") &&
                isEqual(goalsMakerLimits, "minStake")
              ) {
                this.maxminGoalsMaker["max"] =
                  goalsMakerLimits[0].limit.maxStake;
                this.maxminGoalsMaker["min"] =
                  goalsMakerLimits[0].limit.minStake;
              }
            }

            if (tossMakerLimits.length > 0) {
              if (
                isEqual(tossMakerLimits, "maxStake") &&
                isEqual(tossMakerLimits, "minStake")
              ) {
                this.maxminToss["max"] = tossMakerLimits[0].limit.maxStake;
                this.maxminToss["min"] = tossMakerLimits[0].limit.minStake;
              }
            }

            /****************************************** */

            allMarkets.matchOdds.runners.forEach((element, index) => {
              // ProfitLoss Added
              this.profitlossData.forEach((runnerEl) => {
                runnerEl.runners.forEach((run) => {
                  if (run.runnerId == element.id) {
                    element["profitloss"] = run.amount;
                  }
                });
              });

              //
              if (stack.betId == index && stack.betType == 0) {
                element["showBetSlip"] = stack.showBetSlip;
                element["betId"] = stack.betId;
                element["betType"] = stack.betType;
              } else {
                element["showBetSlip"] = false;
                element["betId"] = index;
                element["betType"] = 0;
              }

              //---------------- for odds limits -----------------
              if (matchOddsLimits.find((f) => f.runnnerId == element.id)) {
                let limitFind = matchOddsLimits.find(
                  (f) => f.runnnerId == element.id
                );

                element["limitObj"] = limitFind;

                //if (limitFind.limit.isSuspended == true) element.status = "SUSPENDED";
              }
            });

            allMarkets.bookmaker.runners.forEach((element, index) => {
              // ProfitLoss Added
              this.profitlossData.forEach((runnerEl) => {
                runnerEl.runners.forEach((run) => {
                  if (run.runnerId == element.id) {
                    element["profitloss"] = run.amount;
                  }
                });
              });

              if (stack.betId == index + 2000 && stack.betType == 1) {
                element["showBetSlip"] = stack.showBetSlip;
                element["betId"] = stack.betId;
                element["betType"] = stack.betType;
              } else {
                element["showBetSlip"] = false;
                element["betId"] = index + 2000;
                element["betType"] = 1;
              }

              //---------------- for odds limits -----------------
              if (bookmakerLimits.find((f) => f.runnnerId == element.id)) {
                let limitFind = bookmakerLimits.find(
                  (f) => f.runnnerId == element.id
                );

                element["limitObj"] = limitFind;

                //if (limitFind.limit.isSuspended == true) element.status = "SUSPENDED";
              }
            });

            allMarkets.fancy.runners.forEach((element, index) => {
              // ProfitLoss Added
              element["profitloss"] = [];
              this.profitlossData.forEach((runnerEl) => {
                if (runnerEl.marketId == element.marketId) {
                  element["profitloss"] = runnerEl.runners;
                }
              });

              if (stack.betId == index + 30000 && stack.betType == 2) {
                element["showBetSlip"] = stack.showBetSlip;
                element["betId"] = stack.betId;
                element["betType"] = stack.betType;
              } else {
                element["showBetSlip"] = false;
                element["betId"] = index + 30000;
                element["betType"] = 2;
              }
              //element["backSize"] = Math.floor(Math.random() * 100);
              //element["laySize"] = Math.floor(Math.random() * 100);

              //---------------- for odds limits -----------------
              if (fancyLimits.find((f) => f.runnnerId == element.id)) {
                let limitFind = fancyLimits.find(
                  (f) => f.runnnerId == element.id
                );

                element["limitObj"] = limitFind;

                //if (limitFind.limit.isSuspended == true) element.status = "SUSPENDED";
              }
            });

            allMarkets.toss.runners.forEach((element, index) => {
              // ProfitLoss Added
              this.profitlossData.forEach((runnerEl) => {
                runnerEl.runners.forEach((run) => {
                  if (run.runnerId == element.id) {
                    element["profitloss"] = run.amount;
                  }
                });
              });

              if (stack.betId == index + 5000 && stack.betType == 4) {
                element["showBetSlip"] = stack.showBetSlip;
                element["betId"] = stack.betId;
                element["betType"] = stack.betType;
              } else {
                element["showBetSlip"] = false;
                element["betId"] = index + 5000;
                element["betType"] = 4;
              }

              //---------------- for odds limits -----------------
              if (tossMakerLimits.find((f) => f.runnnerId == element.id)) {
                let limitFind = tossMakerLimits.find(
                  (f) => f.runnnerId == element.id
                );

                element["limitObj"] = limitFind;

                // if (limitFind.limit.isSuspended == true) element.status = "SUSPENDED";
              }
            });

            allMarkets.goalsmaker.forEach((market, i) => {
              market.runners.forEach((element, index) => {
                // ProfitLoss Added
                this.profitlossData.forEach((runnerEl) => {
                  runnerEl.runners.forEach((run) => {
                    if (run.runnerId == element.id) {
                      element["profitloss"] = run.amount;
                    }
                  });
                });

                //
                if (stack.id == element.id && stack.betType == 3) {
                  element["showBetSlip"] = stack.showBetSlip;
                  element["betId"] = stack.betId;
                  element["betType"] = stack.betType;
                } else {
                  element["showBetSlip"] = false;
                  element["betId"] = index;
                  element["betType"] = 3;
                }

                //---------------- for odds limits -----------------
                if (goalsMakerLimits.find((f) => f.runnnerId == element.id)) {
                  let limitFind = goalsMakerLimits.find(
                    (f) => f.runnnerId == element.id
                  );

                  element["limitObj"] = limitFind;

                  // if (limitFind.limit.isSuspended == true) element.status = "SUSPENDED";
                }
              });
            });

            this.betMatchOdds = allMarkets.matchOdds.runners;

            this.betBookmakers = allMarkets.bookmaker.runners;

            this.betFancy = allMarkets.fancy.runners;

            this.betToss = allMarkets.toss.runners;

            this.betGoalsMaker = allMarkets.goalsmaker; //.runners;

            //
            if (this.expectedRunner) {
              if (this.expectedRunner.betType == 0) {
                this.betMatchOdds.forEach((m) => {
                  if (this.selectedSlipType == "back") {
                    if (this.expectedRunner.id == m.id) {
                      m["expectedData"] = this.expected.profit;
                    } else {
                      m["expectedData"] = this.expected.loss * -1;
                    }
                    m["br"] = "back";
                  } else {
                    if (this.expectedRunner.id == m.id) {
                      m["expectedData"] = this.expected.loss * -1;
                    } else {
                      m["expectedData"] = this.expected.profit;
                    }
                    m["br"] = "lay";
                  }
                });
              } else if (this.expectedRunner.betType == 1) {
                this.betBookmakers.forEach((m) => {
                  if (this.selectedSlipType == "back") {
                    if (this.expectedRunner.id == m.id) {
                      m["expectedData"] = this.expected.profit;
                    } else {
                      m["expectedData"] = this.expected.loss * -1;
                    }
                    m["br"] = "back";
                  } else {
                    if (this.expectedRunner.id == m.id) {
                      m["expectedData"] = this.expected.loss * -1;
                    } else {
                      m["expectedData"] = this.expected.profit;
                    }
                    m["br"] = "lay";
                  }
                  //if (this.expectedRunner.id == m.id) {
                  //  m["expectedData"] = this.expected.profit;
                  //} else {
                  //  m["expectedData"] = this.expected.loss;
                  //}
                });
              } else if (this.expectedRunner.betType == 3) {
                this.betGoalsMaker.forEach((m) => {
                  if (this.selectedSlipType == "back") {
                    if (this.expectedRunner.id == m.id) {
                      m["expectedData"] = this.expected.profit;
                    } else {
                      m["expectedData"] = this.expected.loss * -1;
                    }
                    m["br"] = "back";
                  } else {
                    if (this.expectedRunner.id == m.id) {
                      m["expectedData"] = this.expected.loss * -1;
                    } else {
                      m["expectedData"] = this.expected.profit;
                    }
                    m["br"] = "lay";
                  }
                });
              } else if (this.expectedRunner.betType == 4) {
                this.betToss.forEach((m) => {
                  if (this.selectedSlipType == "back") {
                    if (this.expectedRunner.id == m.id) {
                      m["expectedData"] = this.expected.profit;
                    } else {
                      m["expectedData"] = this.expected.loss * -1;
                    }
                    m["br"] = "back";
                  } else {
                    if (this.expectedRunner.id == m.id) {
                      m["expectedData"] = this.expected.loss * -1;
                    } else {
                      m["expectedData"] = this.expected.profit;
                    }
                    m["br"] = "lay";
                  }
                });
              }
            }

            //console.log(`Execution time for: ${new Date().getTime() - sendtime} ms`)

            //setTimeout(() => {
            //  this.getUserOdds();
            //  return;
            //}, 10000);
            this.flag++;

            this.getCurrentEvent();

            document.getElementById("loading").style.display = "none";
          })
          .catch((error) => {
            document.getElementById("loading").style.display = "none";
            console.log(error);
          })
          .finally(() => {
            document.getElementById("loading").style.display = "none";
            this.isCallApi = true;
          });
      },

      getOpenBets() {
        if (this.$store.getters["authModule/userinfo"]) {
          this.$store
            .dispatch("moduleMain/getUserOpenBets")
            .then(() => {
              this.openBetData = this.$store.getters[
                "moduleMain/getOpenBetsByEventId"
              ](this.$route.params.eventid);
            })
            .catch();
        }
      },

      getProfitlossByEventId() {
        this.profitlossData = this.$store.getters[
          "moduleMain/getProfitlossByEventId"
        ](this.$route.params.eventid);
      },

      getCurrentEvent() {
        this.curentEvent = this.$store.getters["moduleMain/getEventById"](
          this.$route.params.eventid
        );
      },

      getExpected(_odds, _stacks, _market, _type) {
        let st = 0;
        let expected = { profit: 0, loss: 0 };
        this.selectedSlipType = _type;

        _odds = parseFloat(_odds);
        _stacks = parseFloat(_stacks);

        if (_market == 0) {
          st = _odds;
          if (_type == "back") {
            expected.profit = _stacks * (st - 1);
            expected.loss = _stacks * -1;
          } else {
            expected.loss = _stacks * (st - 1) * -1;
            expected.profit = _stacks;
          }
        } else if (_market == 1) {
          st = (_odds + 100) / 100;
          if (_type == "back") {
            expected.profit = _stacks * (st - 1);
            expected.loss = _stacks * -1;
          } else {
            expected.loss = _stacks * (st - 1) * -1;
            expected.profit = _stacks;
          }
        } else if (_market == 4) {
          st = (_odds + 100) / 100;
          if (_type == "back") {
            expected.profit = _stacks * (st - 1);
            expected.loss = _stacks * -1;
          } else {
            expected.loss = _stacks * (st - 1) * -1;
            expected.profit = _stacks;
          }
        }

        // rounded numbers
        expected.profit = Math.round(expected.profit);
        expected.loss = Math.round(expected.loss) * -1;

        this.expected = expected;

        return expected;
      },

      getUserLimits() {
        let payload = {
          eventId: this.$route.params.eventid,
        };

        this.$store
          .dispatch("moduleMain/GetUserLimits", payload)
          .then((response) => {
            // console.log(response);
            this.limits = response.data.result;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      pinUpdate() {
        this.$store.dispatch(
          "moduleMain/updatePin",
          this.$route.params.eventid
        );
      },

      showVideoTag() {
        if (
          this.curentEvent.videoURL.startsWith("https://live.dreamipl.com") ==
          true
        ) {
          return false;
        } else return true;
      },
    },

    computed: {
      hasMarket() {
        if (
          this.betMatchOdds.length == 0 &&
          this.betBookmakers.length == 0 &&
          this.betFancy.length == 0 &&
          this.betGoalsMaker.length == 0 &&
          this.betToss.length == 0
        )
          return false;
        else return true;
      },
      openBetsMatchOdds() {
        return this.openBetData.filter((f) => f.marketTypeName == "match_odd");
      },
      openBetsBookmaker() {
        return this.openBetData.filter((f) => f.marketTypeName == "bookmaker");
      },
      openBetsFancy() {
        return this.openBetData.filter(
          (f) => f.marketTypeName == "fancy" || f.marketTypeName == "fancy2"
        );
      },
      openBetsToss() {
        return this.openBetData.filter((f) => f.marketTypeName == "toss");
      },
      openBetsGoalsmaker() {
        return this.openBetData.filter((f) => f.marketTypeName == "goalsmaker");
      },
    },

    created() {
      if (import.meta.env.MODE == "development") {
        this.timeoutFlag = 99910000;
        this.timeoutUserExpectedProfitLoss = 99960000;
        this.timeoutUserLimit = 99920000;
      }

      this.getUserLimits();
    },

    mounted() {
      this.emitter.on("videoBoxToggle", () => {
        this.showVideoBox = !this.showVideoBox;
      });

      this.intervalLimits = setInterval(() => {
        this.getUserLimits();
      }, this.timeoutUserLimit);

      this.getUserOdds(true);

      this.getOpenBets();

      this.intervalUserExpectedProfitLoss = setInterval(() => {
        if (this.$store.getters["authModule/userinfo"]) {
          this.$store
            .dispatch("moduleMain/getUserExpectedProfitLoss")
            .then(() => {})
            .catch(() => {})
            .finally(() => {});
        }
      }, this.timeoutUserExpectedProfitLoss);

      this.emitter.on("expected", (st) => {
        let expectedData = this.getExpected(
          st.odds,
          st.stacks,
          st.runner.betType,
          st.betRedOrBlue
        );

        this.expectedRunner = st.runner;

        if (st.runner.betType == 0) {
          this.betMatchOdds.forEach((m) => {
            if (st.betRedOrBlue == "back") {
              if (st.runner.id == m.id) {
                m["expectedData"] = expectedData.profit;
              } else {
                m["expectedData"] = expectedData.loss * -1;
              }
              m["br"] = "back";
            } else {
              if (st.runner.id == m.id) {
                m["expectedData"] = expectedData.loss * -1;
              } else {
                m["expectedData"] = expectedData.profit;
              }
              m["br"] = "lay";
            }
          });
        } else if (st.runner.betType == 1) {
          this.betBookmakers.forEach((m) => {
            if (st.betRedOrBlue == "back") {
              if (st.runner.id == m.id) {
                m["expectedData"] = expectedData.profit;
              } else {
                m["expectedData"] = expectedData.loss * -1;
              }
              m["br"] = "back";
            } else {
              if (st.runner.id == m.id) {
                m["expectedData"] = expectedData.loss * -1;
              } else {
                m["expectedData"] = expectedData.profit;
              }
              m["br"] = "lay";
            }
            //if (st.runner.id == m.id) {
            //  m["expectedData"] = expectedData.profit;
            //} else {
            //  m["expectedData"] = expectedData.loss;
            //}
          });
        } else if (st.runner.betType == 4) {
          this.betToss.forEach((m) => {
            if (st.betRedOrBlue == "back") {
              if (st.runner.id == m.id) {
                m["expectedData"] = expectedData.profit;
              } else {
                m["expectedData"] = expectedData.loss * -1;
              }
              m["br"] = "back";
            } else {
              if (st.runner.id == m.id) {
                m["expectedData"] = expectedData.loss * -1;
              } else {
                m["expectedData"] = expectedData.profit;
              }
              m["br"] = "lay";
            }
          });
        }
      });
    },

    unmounted() {
      clearInterval(this.intervalUserExpectedProfitLoss);
      clearInterval(this.intervalLimits);
    },

    watch: {
      flag() {
        setTimeout(() => {
          this.getUserOdds(false);
        }, this.timeoutFlag);
      },

      "$store.state.moduleMain.profitloss"() {
        this.getUserOdds(false);
        this.getOpenBets();
      },

      limits() {
        this.getUserOdds(false);
      },

      /*betList: {
      handler(val, oldVal) {
        console.log('book list changed')
      },
      deep: true
    },*/
    },
  };
</script>

<style lang="scss" scoped>
  @import url("mmarkets.css");

  .inplay-icon {
    height: 1.5rem;
  }

  .inplay-icon::before {
    color: white;
  }

  .inplay-icon-green {
    height: 20px;
  }

  .inplay-icon-green::before {
    color: rgb(2, 121, 8) !important;
  }
</style>
