<!-- @format -->

<template>
  <div class="foot-iframe rounded-md font-cera-pro text-sm" v-if="inPlay">
    <div class="row footbal-iframe-conent m-0">
      <div
        class="col- foot-match-info rounded-md"
        style="width: 100%; background: #303030db"
      >
        <div>
          <div class="padding-5px">
            <div class="w-full m-0 foot-match-head">
              <div class="w-10/12 p-l-0">
                <i class="far fa-futbol ml-1"></i>
                <span class="txt-ellipsis foot-teame-name foot-teame-name-1">
                  {{ teame1 }}
                </span>
                -
                <span class="txt-ellipsis foot-teame-name foot-teame-name-2">
                  {{ teame2 }}
                </span>
              </div>
              <div class="w-2/12 text-right">
                <span class="txt-ellipsis foot-match-date"></span>
                <span class="txt-ellipsis foot-match-time"></span>
              </div>
            </div>

            <div class="row m-0 w-full flex" style>
              <div class="w-100-in-countdown p-0 w-8/12">
                <div class="row m-0">
                  <div class="col-12 p-4-0">
                    <span class="txt-ellipsis font-bold0">
                      <span class="foot-half-time"></span>
                      <span></span>
                      <span
                        class="color-green foot-ontime"
                        v-html="playTime"
                      ></span>
                    </span>
                  </div>
                  <div class="col-12 p-4-0 withouttimer">
                    <div class="col-12 p-4-0 ellips">
                      <span
                        class="txt-ellipsis font-bold0 foot-teame-name foot-teame-name-1"
                        >{{ teame1 }}</span
                      >
                    </div>
                    <div class="col-12 p-4-0 ellips">
                      <span
                        class="txt-ellipsis font-bold0 foot-teame-name foot-teame-name-2"
                        >{{ teame2 }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="p-0 d-sm-block00 col-sm-5 football-result-match w-4/12"
              >
                <div class="flex">
                  <div class="w-4/12 p-4-0">1</div>
                  <div class="w-4/12 p-4-0">2</div>
                  <div class="p-4-0 w-4/12">R</div>
                </div>
                <div class="flex">
                  <div class="w-4/12 p-4-0">-</div>
                  <div class="w-4/12 p-4-0">-</div>
                  <div class="p-4-0 w-4/12 color-green gol-t1">{{ gol1 }}</div>
                </div>
                <div class="flex">
                  <div class="w-4/12 p-4-0">-</div>
                  <div class="w-4/12 p-4-0">-</div>
                  <div class="p-4-0 w-4/12 color-green gol-t2">{{ gol2 }}</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12" style></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="foot-iframe mt-2 rounded-md w-full text-gray-300 font-cera-pro text-xs"
    v-if="!inPlay"
  >
    <div class="row footbal-iframe-conent">
      <div
        class="col- foot-match-info rounded-md"
        style="width: 100%; background: #303030db"
      >
        <div>
          <div class="padding-5px">
            <div class="row foot-match-head">
              <div class="w-10/12 p-l-0">
                <i class="far fa-futbol ml-1"></i>
                <span class="txt-ellipsis foot-teame-name foot-teame-name-1">
                  {{ teame1 }}
                </span>
                -
                <span class="txt-ellipsis foot-teame-name foot-teame-name-2">
                  {{ teame2 }}
                </span>
              </div>
              <div class="w-2/12 text-right">
                <span class="txt-ellipsis foot-match-date"></span>
                <span class="txt-ellipsis foot-match-time"></span>
              </div>
            </div>

            <div class="row" style>
              <div class="w-100-in-countdown w-full">
                <div class="row m-0">
                  <div class="col-12 p-4-0">
                    <span class="txt-ellipsis font-bold0">
                      <span class="foot-half-time"></span>
                      <span></span>
                      <span class="color-green foot-ontime">00:00</span>
                    </span>
                  </div>
                  <div class="col-12 p-4-0 withouttimer" style="display: none">
                    <div class="col-12 p-4-0 ellips">
                      <span
                        class="txt-ellipsis font-bold0 foot-teame-name foot-teame-name-1"
                        >{{ teame1 }}</span
                      >
                    </div>
                    <div class="col-12 p-4-0 ellips">
                      <span
                        class="txt-ellipsis font-bold0 foot-teame-name foot-teame-name-2"
                        >{{ teame2 }}</span
                      >
                    </div>
                  </div>
                  <div class="flex">
                    <div class="w-1/2 p-4-0 withtimer" style="display: block">
                      <div class="col-12 p-4-0 ellips">
                        <span
                          class="txt-ellipsis font-bold0 foot-teame-name foot-teame-name-1"
                          >{{ teame1 }}</span
                        >
                      </div>
                      <div class="col-12 p-4-0 ellips">
                        <span
                          class="txt-ellipsis font-bold0 foot-teame-name foot-teame-name-2"
                          >{{ teame2 }}</span
                        >
                      </div>
                    </div>
                    <div class="w-1/2 p-0-0 withtimer" style="display: block">
                      <div class="counter">
                        <div class="counter-header text-xs font-cera-pro">
                          Event will start in
                        </div>
                        <div
                          class="w-full p-4-0 font-cera-pro text-xs"
                          style="width: 100%; flex-direction: column"
                        >
                          <div
                            class="football-countdown time-count-down-box flex"
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
            <div class="row">
              <div class="col-12" style></div>
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
      footballTime: {
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
    computed: {
      playTime() {
        return this.footballTime;
      },
      countdownTime() {
        if (this.startTime != "") {
          return this.startTime.replace("T", " ");
        } else return new Date().toString();
      },
    },
  };
</script>

<style scoped>
  @import url("FootballScoreCard.css");
</style>
