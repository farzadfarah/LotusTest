<template>
  <div class="flex w-full relative">
    <a @click="pinUpdate" class="leading-10 contents">
      <img
        v-if="!pin"
        src="@/assets/svg/star-line-yellow.svg"
        class="w-4 h-4 mt-[12px] mr-2"
      />
      <img
        v-else
        src="@/assets/svg/star-svgrepo-com.svg"
        class="w-4 h-4 mt-[12px] mr-2"
      />
    </a>
    <router-link
      class="w-[calc(100%-1rem)]"
      v-if="gameStatus == 'IN_PLAY' || gameDate == 'In-Play'"
      :to="'/Markets/' + id"
      @click="emitter.emit('active-menu-prop-changed', sportName)"
    >
      <div class="flex justify-between">
        <div class="min-w-0 flex">
          <!-- <a @click="pinUpdate" class="leading-10 contents">
            <img v-if="!pin" src="../../assets/svg/star-line-yellow.svg" class="w-4 h-4 mt-[12px] mr-2" />
            <img v-else src="../../assets/svg/star-svgrepo-com.svg" class="w-4 h-4 mt-[12px] mr-2" />
          </a> -->
          <h4 class="leading-10 text-xs font-bold text-new-sky truncate">
            {{ gameNamesTitle }}
          </h4>
        </div>
        <a
          class="min-w-[2rem] min-h-[2.75rem] rounded-lg py-2 --px-2 text-xs font-bold leading-5"
        >
          <div class="m-auto flex">
            <div
              v-if="isFastBet"
              class="px-2 py-1 rotating-border rotating-border--google heart"
            >
              <span
                >Fast Bet <i aria-hidden="true" class="fa fa-play"></i
              ></span>
            </div>

            <span v-else class="flex">
              <span v-if="f == true" class="mt-[3px] text-[#504f4fdd]">F</span
              ><span v-if="bm == true" class="mt-[3px] text-[#504f4fdd] ml-1"
                >BM</span
              >
            </span>
            <i
              class="ui-icon theme-playbutton text-sm ml-3 -absolute inplay-icon"
            ></i>
          </div>
        </a>
      </div>
    </router-link>

    <router-link
      class="w-[calc(100%-1rem)]"
      v-else
      :to="'/Markets/' + id"
      @click="emitter.emit('active-menu-prop-changed', sportName)"
    >
      <div class="flex justify-between">
        <div class="min-w-0 flex">
          <h4 class="leading-10 text-xs font-bold text-new-sky truncate">
            {{ gameNamesTitle }}
          </h4>
        </div>

        <a
          class="flex min-w-[4.031rem] min-h-[2.75rem] rounded-lg py-1 px-1 text-xs font-bold text-new-sky leading-3"
        >
          <div class="leading-7 pr-1">
            <div
              v-if="isFastBet"
              class="px-2 py-1 rotating-border rotating-border--google heart"
            >
              <span
                >Fast Bet <i aria-hidden="true" class="fa fa-play"></i
              ></span>
            </div>

            <span v-else class="flex">
              <span v-if="f == true" class="mt-[3px]">F</span
              ><span v-if="bm == true" class="mt-[3px] ml-1">BM</span>
            </span>
          </div>

          <div class="border-l border-dashed pl-1">
            <div class="text-[0.65rem] text-center leading-5 font-normal">
              {{ gameDate }}
            </div>
            <div
              class="text-[0.65rem] md:text-xs00 whitespace-nowrap text-center leading-3 font-normal"
            >
              {{ gameTime }}
            </div>
          </div>
        </a>
      </div>
    </router-link>
  </div>
</template>

<script>
  //import Fa from "vue-fa";
  import { faStar } from "@fortawesome/free-solid-svg-icons";
  import { defineAsyncComponent } from "vue";
  export default {
    name: "game-item",
    components: {
      Fa: defineAsyncComponent(() => import("vue-fa")),
    },
    props: {
      id: { type: Number, default: 0 },
      dreamEventId: { type: Number, default: 0 },
      gameStatus: { type: String, default: "" },
      gameDate: { type: String, default: "" },
      gameTime: { type: String, default: "" },
      team1: { type: String, default: null },
      team2: { type: String, default: null },
      teamesName: { type: String, default: null },
      f: { type: Boolean, default: false },
      bm: { type: Boolean, default: false },
      sportName: { type: String, default: null },
      sportId: { type: Number },
      pin: { type: Boolean, default: false },
      isFastBet: { type: Boolean, default: false },
    },
    data() {
      return {
        faStar,
      };
    },
    computed: {
      gameStatusTitle() {
        if (this.gameStatus == "IN_PLAY") return "In Play";
        else if (this.gameStatus == "UPCOMING") return "Up Coming";
        else return "Tomorrow";
      },

      gameNamesTitle() {
        if (!this.team1 || !this.team2) {
          return this.teamesName;
        } else {
          return this.team1 + " v " + this.team2;
        }
      },
    },
    methods: {
      pinUpdate() {
        this.$store.dispatch("moduleMain/updatePin", this.id);
      },
    },
    mounted() {},
  };
</script>

<style scoped>
  .inplay-icon::before {
    color: rgb(32, 168, 32);
  }
  .ui-icon.inplay-icon {
    height: 1.25rem;
  }

  .rotating-border {
    position: absolute;
    overflow: hidden;
    font-size: 9px;
    border-radius: var(--border-radius);
    right: 40px;
    top: 1px;
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
    margin-top: 7px;
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
</style>
