<!-- @format -->

<template>
  <!-- <div class="tennis-score-card">
    <div class="tennis-player">
      <span class="player-name">Lorenzo Sonego<span class="serve"></span></span>
      <span class="set current">0</span><span class="set current">4</span
      ><span class="set">1</span>
    </div>

    <div class="tennis-player">
      <span class="player-name">Casper Ruud</span>
      <span class="set current">0</span><span class="set current">6</span
      ><span class="set">6</span>
    </div>
    <div class="tennis-player">
      <span class="player-name set-title">Set 0 (Finished)</span>
      <span class="set set-count point-title">POINT</span>
    </div>
  </div>-->

  <div
    class="tenis-iframe font-cera-pro text-xs"
    v-if="
      inPlay &&
      scoreHtml != null &&
      scoreHtml != ' ' &&
      scoreHtml != '<div></div>'
    "
  >
    <div class="row tenis-iframe-conent m-0" style="height: 100%">
      <div class="col- tenis-match-info">
        <div v-html="scoreHtml"></div>
      </div>
    </div>
  </div>

  <!----------------------------------------------->

  <div class="tenis-iframe font-cera-pro text-xs" v-if="!inPlay">
    <div class="row tenis-iframe-conent m-0">
      <div class="col- tenis-match-info">
        <div>
          <div class="padding-5px">
            <div class="row tenis-match-head">
              <div class="col-12 p-l-0">
                <i class="far fa-tennis ml-1"></i>
                <span
                  class="txt-ellipsis tenis-teame-name tenis-teame-name-1"
                  >{{ teame1 }}</span
                >
                -
                <span
                  class="txt-ellipsis tenis-teame-name tenis-teame-name-2"
                  >{{ teame2 }}</span
                >
              </div>
            </div>

            <div class="row" style>
              <div class="w-100-in-countdown col-sm-12">
                <div class="row m-0">
                  <div class="col-12 p-4-0">
                    <span class="txt-ellipsis font-bold0">
                      <span class="tenis-half-time"></span>
                      <span></span>
                      <span class="tenis-ontime">SCHED</span>
                    </span>
                  </div>
                  <div
                    class="col-12 p-4-0 tenis-withouttimer"
                    style="display: none"
                  >
                    <div class="col-12 p-4-0 ellips">
                      <span
                        class="txt-ellipsis font-bold0 tenis-teame-name tenis-teame-name-1"
                        >{{ teame1 }}</span
                      >
                    </div>
                    <div class="col-12 p-4-0 ellips">
                      <span
                        class="txt-ellipsis font-bold0 tenis-teame-name tenis-teame-name-2"
                        >{{ teame2 }}</span
                      >
                    </div>
                  </div>
                  <div class="w-full flex">
                    <div
                      class="w-1/2 p-4-0 tenis-withtimer"
                      style="display: block"
                    >
                      <div class="col-12 p-4-0 ellips">
                        <span
                          class="txt-ellipsis font-bold0 tenis-teame-name tenis-teame-name-1"
                          >{{ teame1 }}</span
                        >
                      </div>
                      <div class="col-12 p-4-0 ellips">
                        <span
                          class="txt-ellipsis font-bold0 tenis-teame-name tenis-teame-name-2"
                          >{{ teame2 }}</span
                        >
                      </div>
                    </div>
                    <div
                      class="w-1/2 p-4-0 tenis-withtimer font-cera-pro text-xs"
                      style="display: block"
                    >
                      <div class="counter">
                        <div class="counter-header font-cera-pro">
                          Event will start in
                        </div>
                        <div
                          class="col-12 p-4-0"
                          style="width: 100%; flex-direction: column"
                        >
                          <div
                            class="tenis-countdown time-count-down-box font-cera-pro text-xs"
                          >
                            <countdown
                              :endDate="new Date(new Date(countdownTime))"
                            >
                              <template v-slot:day="{ day }">
                                <span
                                  class="time-count-down-span time-count-down-day text-xs"
                                  >{{ day }}</span
                                >
                                <hr class="hr-between-count-down-span" />
                              </template>

                              <template v-slot:hour="{ hour }">
                                <span
                                  class="time-count-down-span time-count-down-hour text-xs"
                                  >{{ hour }}</span
                                >
                                <hr class="hr-between-count-down-span" />
                              </template>

                              <template v-slot:min="{ min }">
                                <span
                                  class="time-count-down-span time-count-down-min text-xs"
                                  >{{ min }}</span
                                >
                                <hr class="hr-between-count-down-span" />
                              </template>

                              <template v-slot:sec="{ sec }">
                                <span
                                  class="time-count-down-span time-count-down-sec text-xs"
                                  >{{ sec }}</span
                                >
                              </template>
                            </countdown>
                          </div>
                          <div
                            id="counter"
                            class="counter-info-footer flex font-cera-pro text-[8px]"
                          >
                            <div class="counter-info-sign">days</div>
                            <div class="counter-info-sign">hours</div>
                            <div class="counter-info-sign">minutes</div>
                            <div class="counter-info-sign">seconds</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";

  //import Countdown from "../../../../../../components/countdown/countdown.vue";
  export default {
    components: {
      Countdown: defineAsyncComponent(() =>
        import("../../../../../../components/countdown/countdown.vue")
      ),
    },
    props: {
      scoreHtml: {
        type: String,
        default: "",
      },
      tenisTime: {
        type: String,
        default: "0",
      },
      teame1: {
        type: String,
        default: "",
      },
      teame2: {
        type: String,
        default: "",
      },
      gol1: {
        type: String,
        default: "",
      },
      gol2: {
        type: String,
        default: "",
      },
      inPlay: {
        type: Boolean,
        default: false,
      },
      startTime: {
        type: String,
        default: "",
      },
    },
    methods: {},
    mounted() {},
    computed: {
      playTime() {
        return this.tenisTime;
      },
      countdownTime() {
        if (this.startTime != "") {
          return this.startTime.replace("T", " ");
        } else return new Date().toString();
      },
    },
  };
</script>

<style lang="scss">
  .tennis-score-card .player-name:not(.set-title) {
    text-overflow: ellipsis;
    width: 120px;
    display: inline-block;
  }
  .tennis-score-card,
  .tennis-score-card .player-name {
    color: #d9d9d9;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.7em;
  }

  .set {
    height: 20px !important;
    line-height: 20px !important;
    width: auto !important;
    font-size: 13px !important;
    padding: 0 3px;
  }
  .player-name {
    font-size: 12px !important;
    line-height: 20px !important;
    max-width: 32% !important;
  }

  .tennis-score-card {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 7px;
    overflow: hidden;
    background-color: transparent !important;
  }

  .tenis-iframe-conent {
    background-image: url("@/assets/images/score-bg-tenis.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 7px;
    overflow: hidden;
  }

  .tennis-score-card {
    // background-color: #303030;
    padding: 5px 8px 4px;
    font-size: 15px;
    /**/
    // background-image: url("../../../../../../assets/img/score-bg-tenis.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 7px;
    overflow: hidden;
    //background-color: #303030 !important;
  }

  .tennis-score-card::before {
    background-color: #303030;
  }

  .tennis-player {
    height: 24px;
    padding: 14px;
  }

  .player-name {
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    font-size: 15px;
    line-height: 22px;
  }

  .set {
    height: 24px;
    line-height: 24px;
    width: 31px;
    font-size: 15px;
    float: right;
    text-align: center;
    color: #fff;
    background-color: #34343496 !important;
  }

  .serve {
    margin-bottom: 5px;
  }

  .tenis-iframe-conent {
    background-image: url("@/assets/images/score-bg-tenis.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 7px;
  }

  .tennis-score-card {
    // background-color: #303030;
    padding: 5px 8px 4px;
    font-size: 15px;
    /**/
    // background-image: url("../../../../../../assets/img/score-bg-tenis.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 7px;
    overflow: hidden;
  }

  .tennis-score-card::before {
    background-color: #303030;
  }

  .tennis-player {
    height: 24px;
    padding: 14px;
  }

  .player-name {
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    font-size: 15px;
    line-height: 22px;
  }

  .set {
    height: 24px;
    line-height: 24px;
    width: 31px;
    font-size: 15px;
    float: right;
    text-align: center;
    color: #fff;
    background-color: #34343496 !important;
  }

  .serve {
    margin-bottom: 5px;
    display: inline-block;
    border-radius: 6px;
    width: 6px;
    height: 6px;
    background-color: #0c0;
    margin-left: 8px;
  }

  .set-count {
    font-size: 9px;
    color: #9d9d9d;
    height: 24px;
  }

  .current {
    color: #0c0;
  }

  .set-title {
    font-size: 12px;
    text-align: center;
    color: #0c0;
  }

  .point-title {
    font-size: 8px;
    text-align: center;
    color: #fff;
  }

  /*******************************************/
  .tennis-score-card {
    // background-image: url("../../../../../../assets/img/score-bg-tenis.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 7px;
    overflow: hidden;
    background-color: transparent !important;
  }

  .tenis-match-info {
    background: #303030db;
    width: 100%;
    border-radius: 7px;
  }

  .tenis-iframe {
    // height: 112px;
    background-position: 50%;
    background-size: cover;
    position: relative;
    // margin: 10px 0;
    overflow: hidden;
    color: #cdcdcd;
  }

  .cricket-iframe-conent,
  .footbal-iframe-conent,
  .tenis-iframe-conent {
    width: 100%;
    margin: 0 auto;
  }

  .tenis-iframe-conent {
    background-image: url("@/assets/images/score-bg-tenis.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 7px;
  }

  .cricket-iframe-conent,
  .footbal-iframe-conent,
  .tenis-iframe-conent {
    font-size: 14px;
  }

  .tenis-match-info {
    background: rgba(48, 48, 48, 0.8588235294117647);
    width: 100%;
    border-radius: 7px;
  }

  .tennis-score-card {
    padding: 5px 8px 4px;
    font-size: 15px;
  }

  .tennis-score-card,
  .tennis-score-card .player-name {
    color: #d9d9d9;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.7em;
  }

  .tennis-score-card {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 7px;
    overflow: hidden;
    background-color: transparent !important;
  }

  /************************* */
  .d-block {
    display: block !important;
  }

  .mt-1,
  .my-1 {
    margin-top: 0.25rem !important;
  }

  /*************************/
  .padding-5px {
    padding: 5px;
  }

  .cricket-match-head,
  .foot-match-head,
  .tenis-match-head {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.7);
    margin: 0 0;
  }

  .p-l-0 {
    padding-left: 0;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .txt-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .p-4-0 {
    padding: 4px 0;
  }

  .counter {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 110px;
    padding: 0;
    border: 0 transparent;
    margin: auto 0;
    font-family: Alumni Sans;
  }

  @media screen and (max-width: 500px) {
    .counter {
      margin: auto !important;
    }
  }

  .counter-header {
    color: hsla(0, 0%, 100%, 0.89);
    text-align: center;
  }

  .time-count-down-box {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative;
    display: flex;
  }

  .counter-info-footer,
  .counter-info-sign {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative;
    // display: flex;
    text-align: center;
    margin: auto;
  }

  .counter-info-footer {
    font-size: 7px;
  }

  .time-count-down-span {
    // font-size: 21px;
    // line-height: 1.3rem;
    color: #fff;
    font-weight: 700;
    width: 20%;
    margin: auto;
    justify-content: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -webkit-justify-content: center;
    text-align: center;
  }

  .hr-between-count-down-span {
    border-left: 1px solid hsla(0, 0%, 100%, 0.8196078431372549);
    height: 12px;
    margin: 2px 0 0 0;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
</style>
