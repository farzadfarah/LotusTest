<!-- @format -->

<template>
  <div class="block relative w-full font-cera-round-pro text-new-sky">
    <div class>
      <div class="block py-1">
        <div class="flex justify-between">
          <h5
            class="text-new-sky text-sm leading-6 font-medium flex w-full mb-1"
          >
            <div class="flex flex-col sm:flex-row w-2/3 md:w-1/2">
              <span class="ml-1 inline-block text-new-sky font-medium">{{
                marketName
              }}</span>
              <span
                v-if="hasData()"
                class="text-xs leading-6 text-new-sky ml-1"
              >
                <!-- <span class="ml-2 space-x-1">(</span> -->
                <span v-if="maxmin.min && maxmin.min != 0"
                  >Min: {{ maxmin.min }}</span
                >
                <span
                  v-if="
                    maxmin.min &&
                    maxmin.min != 0 &&
                    maxmin.max &&
                    maxmin.max != 0
                  "
                  class="ml-[2px] mr-[2px]"
                ></span>
                <span v-if="maxmin.max && maxmin.max != 0"
                  >Max: {{ maxmin.max }}</span
                >
                <!-- <span class="space-x-1">)</span> -->
              </span>
            </div>
            <div class="w-1/3 md:w-1/2 relative">
              <div
                v-if="currenBetObj && currenBetObj?.isFastBet == true"
                class="xs:px-1 px-2 py-1 rotating-border rotating-border--google heart"
              >
                <span class="xs:text-[9px] text-[10px]" style="display: flex"
                  >Fast Bet
                  <i
                    aria-hidden="true"
                    class="ui-icon theme-play-solid fastbet xs:ml-1 xs:mt-[1px] ml-1 mt-[3px]"
                  ></i
                ></span>
              </div>
            </div>
          </h5>
          <span class="flex min-w-[124px] mr-1 pt-2">
            <span class="text-xs text-center justify-center min-w-[62px]"
              >BACK</span
            >
            <span class="text-xs text-center justify-center min-w-[62px]"
              >LAY</span
            >
          </span>
        </div>
        <div>
          <div class="px-0 py-0 mt-2">
            <bets
              :bets="betList"
              :allEqual="hasData()"
              @change-all-baet-slip-status2="ChangeAllBaetSlipStatus"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--***********************************************************-->
</template>

<script>
  import { defineAsyncComponent } from "vue";
  //import Bets from "../Bets/Bets.vue";
  export default {
    name: "match-odds",
    components: {
      Bets: defineAsyncComponent(() => import("../Bets/Bets.vue")),
    },
    emits: ["ChangeAllBaetSlipStatus3"],
    props: {
      betList: {
        type: Array,
        required: true,
      },
      maxmin: {
        type: Object,
        default: () => {},
      },
      marketName: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        currenBetObj: null,
      };
    },
    methods: {
      ChangeAllBaetSlipStatus({ status, betId, betType, id, marketId }) {
        this.$emit("ChangeAllBaetSlipStatus3", {
          status: status,
          betId: betId,
          betType: betType,
          id,
          marketId,
        });
      },
      hasData() {
        if (this.maxmin?.max != null) {
          if (this.maxmin?.max == 0 && this.maxmin?.min == 0) return false;
          else return true;
        }
        return false;
      },
    },
    mounted() {
      this.currenBetObj = this.$store.getters["moduleMain/getEventById"](
        this.$route.params.eventid
      );
    },
  };
</script>

<style scoped>
  .market-type .select a {
    color: #1e1e1e;
    background-image: linear-gradient(-180deg, #ccc 15%, #e8e8e8 100%);
    border-color: rgba(51, 51, 51, 0.3);
  }

  .rotating-border {
    position: absolute;
    overflow: hidden;
    font-size: 9px;
    border-radius: var(--border-radius);
    /* right: 36px;
  top: 1px; */
  }

  .rotating-border:before {
    content: "";
    background: var(--border-bg);
    width: 100px;
    padding-bottom: 50%;
    position: absolute;
    left: -15px;
    top: -37px;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    z-index: -2;
    animation: spin 5s linear infinite;
    height: 100px;
  }

  .rotating-border:after {
    content: "";
    position: absolute;
    top: var(--border-size);
    right: var(--border-size);
    bottom: var(--border-size);
    left: var(--border-size);
    background: #fff;
    z-index: -1;
    border-radius: calc(var(--border-radius) - var(--border-size));
  }

  .rotating-border--google {
    --border-radius: 0.5rem;
    --border-size: 0.25rem;
    --border-bg: conic-gradient(
      #ea4335 0turn,
      #ea4335 0.125turn,
      #4285f4 0.125turn,
      #4285f4 0.25turn,
      #fbbc05 0.25turn,
      #fbbc05 0.375turn,
      #34a853 0.375turn,
      #34a853 0.5turn,
      #ea4335 0.5turn,
      #ea4335 0.625turn,
      #4285f4 0.625turn,
      #4285f4 0.75turn,
      #fbbc05 0.75turn,
      #fbbc05 0.875turn,
      #34a853 0.875turn,
      #34a853 1turn
    );
    --border-bg: conic-gradient(
      #ea4335 0turn 0.125turn,
      #4285f4 0.125turn 0.25turn,
      #fbbc05 0.25turn 0.375turn,
      #34a853 0.375turn 0.5turn,
      #ea4335 0.5turn 0.625turn,
      #4285f4 0.625turn 0.75turn,
      #fbbc05 0.75turn 0.875turn,
      #34a853 0.875turn 1turn
    );
    line-height: 2;
    color: #000;
    font-weight: 700;
  }

  .heart {
    animation: beat-2f27df1a 0.25s infinite alternate;
    transform-origin: center;
    margin-top: 0px;
  }

  @keyframes beat-2f27df1a {
    to {
      transform: scale(1.1);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .ui-icon.fastbet {
    --local-ui-icon-size: 1rem;
    font-size: 0.5rem;
    height: 1.25rem;
    line-height: 2.5;
    padding: 0;
  }
</style>
