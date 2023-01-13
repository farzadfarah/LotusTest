<!-- @format -->

<template>
  <div
    class="header-section resultapi cricket-box font-cera-pro text-sm"
    v-if="inPlay && hasHtml"
  >
    <div class="container-main">
      <div class="row-ctm">
        <div class="team">
          <div class="team_name">
            <span class="bold">{{ teame1 }}</span>
            <span>{{ gol1 }}</span>
            <span class="d-block mt-1">{{ parantez1 }}</span>
            <span class="d-block mt-1">{{ crr1 }}</span>
          </div>
        </div>
        <div class="match_status">
          <span class="status">{{ target }}</span>
          <span class="day">
            <span class="blue" v-for="(d, i) in day" :key="i">{{ d }}</span>
          </span>
        </div>
        <div class="team">
          <div class="team_name">
            <span class="bold">{{ teame2 }}</span>
            <span>{{ gol2 }}</span>
            <span class="d-block mt-1">{{ parantez2 }}</span>
            <span class="d-block mt-1">{{ crr2 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--------------------------------------------------------------->
  <div class="cricket-iframe font-cera-pro text-sm" v-if="!inPlay">
    <div class="row cricket-iframe-conent">
      <div class="col- cricket-match-info" style="width: 100%">
        <div>
          <div class="padding-5px">
            <div class="row cricket-match-head">
              <div class="w-full p-l-0">
                <i class="ui-icon sports-22 text-xs ml-1"></i>
                <span
                  class="txt-ellipsis cricket-teame-name cricket-teame-name-1"
                  >{{ teame1 }}</span
                >
                <span
                  class="txt-ellipsis cricket-teame-name cricket-teame-name-2"
                  >{{ teame2 }}</span
                >
              </div>
            </div>

            <div class="row" style>
              <div class="w-100-in-countdown w-full">
                <div class="row m-0">
                  <div class="w-full p-4-0">
                    <span class="txt-ellipsis font-bold0">
                      <span class="cricket-half-time"></span>
                      <span></span>
                      <span class="cricket-ontime">SCHED</span>
                    </span>
                  </div>
                  <div class="w-full flex">
                    <div
                      class="w-1/2 p-4-0 cricket-withtimer"
                      style="display: block"
                    >
                      <div class="w-full p-4-0 ellips">
                        <span
                          class="txt-ellipsis font-bold0 cricket-teame-name cricket-teame-name-1"
                          >{{ teame1 }}</span
                        >
                      </div>
                      <div class="w-full p-4-0 ellips">
                        <span
                          class="txt-ellipsis font-bold0 cricket-teame-name cricket-teame-name-2"
                          >{{ teame2 }}</span
                        >
                      </div>
                    </div>
                    <div
                      class="w-1/2 p-4-0 cricket-withtimer"
                      style="display: block"
                    >
                      <div class="counter">
                        <div class="counter-header font-cera-pro text-xs">
                          Event will start in
                        </div>
                        <div
                          class="w-full p-4-0"
                          style="width: 100%; flex-direction: column"
                        >
                          <div
                            class="cricket-countdown time-count-down-box text-xs font-cera-pro"
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
                            class="counter-info-footer grid grid-cols-4 gap-1"
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
              <div
                class="col-xs-4 col-sm-5 cricket-result-match"
                style="display: none"
              >
                <div class="col-12 row">
                  <div class="col-4 p-4-0">1</div>
                  <div class="col-4 p-4-0">2</div>
                  <div class="p-4-0 col-4">3</div>
                </div>
                <div class="col-12 row">
                  <div class="col-4 p-4-0">-</div>
                  <div class="col-4 p-4-0">-</div>
                  <div class="p-4-0 col-4">-</div>
                </div>
                <div class="col-12 row">
                  <div class="col-4 p-4-0">-</div>
                  <div class="col-4 p-4-0">-</div>
                  <div class="p-4-0 col-4">-</div>
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
      cricketTime: {
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
      hasHtml: {
        type: Boolean,
        default: true,
      },
      startTime: {
        type: String,
        default: "",
      },
      parantez1: {
        type: String,
        default: "",
      },
      parantez2: {
        type: String,
        default: "",
      },
      crr1: {
        type: String,
        default: "",
      },
      crr2: {
        type: String,
        default: "",
      },
      target: {
        type: String,
        default: "",
      },
      day: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      playTime() {
        return this.cricketTime;
      },
      countdownTime() {
        if (this.startTime != "") {
          return this.startTime.replace("T", " ");
        } else return new Date().toString();
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import url("cricketScoreCard.css");
  .cricket-box {
    // background-image: url(../../../../../../assets/images/score-bg-criket.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 7px;
    overflow: hidden;
    color: #cdcdcd;
  }
  .cricket-iframe {
    color: #cdcdcd;
  }
</style>
