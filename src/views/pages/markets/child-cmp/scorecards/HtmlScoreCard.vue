<template>
  <div
    v-if="scorecard_exists"
    class="mx-0"
    style="position: relative"
    :style="loading ? 'height:180px' : ''"
  >
    <div
      v-if="loading"
      style="
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: rgb(38 48 60 / 80%);
      "
    >
      <span id="btn-placebet-loader">
        <i class="fa fa-spinner fa-spin"></i>
      </span>
    </div>

    <iframe
      v-if="node"
      id="iframe1"
      :srcdoc="scoreHtml"
      style="position: unset"
      :height="iframeHeight"
      onresize="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"
    ></iframe>

    <iframe
      v-if="IframeScoreSRC != null"
      id="iframe2"
      :src="IframeScoreSRC"
      style="position: unset; border: 0px"
      :height="iframeHeight"
    ></iframe>
    <iframe
      v-if="live_score"
      id="iframe3"
      :src="live_score_source"
      style="position: unset"
      class="score-card-realtime"
      :height="iframeHeight"
    ></iframe>

    <!-- <iframe v-if="node" :srcdoc="scoreHtml" style="position: unset"
            onload="this.style.height=(this.contentWindow.document.body.scrollHeight+5s0)+'px';"
            onresize="this.style.height=(this.contentWindow.document.body.scrollHeight+50)+'px';"></iframe>

        <iframe v-if="live_score" :src="live_score_source" style="position: unset; width: 100%"
            class="score-card-realtime" :class="live_score_class" id="score-card-realtime"
            onload="this.style.height=(this.contentWindow.document.documentElement.scrollHeight+50)+'px';"
            onresize="this.style.height=(this.contentWindow.document.documentElement.scrollHeight+50)+'px';"></iframe> -->

    <!------------ Cricket ---------------->
    <Circket
      :cricketTime="cricketTime"
      :teame1="teame1"
      :teame2="teame2"
      :gol1="gol1"
      :gol2="gol2"
      :inPlay="inPlay"
      :startTime="startTime"
      v-if="showCricketScoreCard"
      :scoreHtml="scoreHtml"
      :parantez1="parantez1"
      :parantez2="parantez2"
      :crr1="crr1"
      :crr2="crr2"
      :target="target"
      :day="day"
      :hasHtml="hasHtml"
    ></Circket>

    <!------------ Tennis ---------------->
    <Tenis
      :tenisTime="tenisTime"
      :teame1="teame1"
      :teame2="teame2"
      :gol1="gol1"
      :gol2="gol2"
      :inPlay="inPlay"
      :startTime="startTime"
      v-if="showTenisScoreCard"
      :scoreHtml="scoreHtml"
    ></Tenis>

    <!------------ Football ---------------->
    <Football
      :footballTime="footballTime"
      :teame1="teame1"
      :teame2="teame2"
      :gol1="gol1"
      :gol2="gol2"
      :inPlay="inPlay"
      :startTime="startTime"
      v-if="showFootballScoreCard"
    ></Football>
  </div>
</template>

<script>
//  import Football from "./football/Football.vue";
//  import Tenis from "./tenis/Tenis.vue";
//  import Circket from "./cricket/Circket.vue";
import { defineAsyncComponent } from "vue";
// import $ from "jquery";
export default {
  props: {
    sportId: {
      type: Number,
      // default: "0",  // tenis=2
    },
    dreamEventId: {
      type: Number,
      require: true,
    },
    inPlay: {
      type: Boolean,
      default: false,
    },
    startTime: {
      type: String,
      default: "",
    },
    teameName1: {
      type: String,
      default: "",
    },
    teameName2: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      loading: false,
      scoreHtml: null,
      // football
      footballTime: 0,
      teame1: this.teameName1,
      teame2: this.teameName2,
      gol1: 0,
      gol2: 0,
      showFootballScoreCard: false,
      // tenis
      tenisTime: 0,
      showTenisScoreCard: false,
      // cricket
      cricketTime: 0,
      showCricketScoreCard: false,
      parantez1: "",
      parantez2: "",
      crr1: "",
      crr2: "",
      target: "",
      day: [],
      hasHtml: true,

      node: false,
      live_score: false,
      live_score_source: "",
      live_score_class: "",
      scorecard_exists: true,
    };
  },
  methods: {
    getScoreCard() {
      if (this.$store.getters["authModule/userinfo"]) {
        this.loading = true;
        let payload = {
          DreamEventId: this.dreamEventId,
        };
        this.$store
          .dispatch("moduleMain/getScoreCard", payload)
          .then((response) => {
            let result = response.data.result;
            if (
              result === null ||
              result === undefined ||
              result.trim().length <= 0
            ) {
              this.scorecard_exists = false;
              return;
            }

            if (
              result.startsWith("https://sc.teslaexch.com/") ||
              result.startsWith("https://xpert9.com/")
            ) {
              this.live_score_source = result;
              this.live_score = true;
              this.loading = false;

              if (result.startsWith("https://xpert9.com/")) {
                this.live_score_class = "score-card-realtime-2";
              }
              return;
            }

            let data = null;
            if (typeof result == "object") {
              data = JSON.parse(result);
              this.node = data.node;
            } else {
              data = result;
            }

            if (data !== null && data.node) {
              this.scoreHtml = data.date;
              setTimeout(() => {
                if (this.sportId == 1) this.footballMapper();
                else if (this.sportId == 2) this.tenisMapper();
                else if (this.sportId == 3) this.cricketMapper();
                this.loading = false;
              }, 1500);
            } else {
              this.live_score_source = result;
              this.live_score = true;
              this.loading = false;
            }
          })
          .catch((error) => {
            //console.log(error);
            this.loading = false;
          });
      }
    },
    //****************** football *********************** */

    footballMapper() {
      let elem = document.createElement("div");
      elem.innerHTML = this.scoreHtml;

      if (document.getElementsByClassName("football-score-card").length > 0) {
        let timeDiv = document.getElementsByClassName("football-time");
        if (timeDiv.length > 0) this.footballTime = timeDiv[0].innerHTML;

        let teamesBox = document.getElementsByClassName("football-stats");
        if (teamesBox.length > 0) {
          // teame 1
          /*this.teame1 = teamesBox[0].innerHTML
                      .substring(0, teamesBox[0].innerHTML.indexOf("<"))
                      .trim();
          
                    // teame 2
                    this.teame2 = teamesBox[0].innerHTML
                      .substring(
                        teamesBox[0].innerHTML.indexOf("</span>") + 7,
                        teamesBox[0].innerHTML.length
                      )
                      .trim();*/

          // Gols
          let gols = teamesBox[0].innerHTML
            .substring(
              teamesBox[0].innerHTML.indexOf(">") + 1,
              teamesBox[0].innerHTML.indexOf("</span>")
            )
            .trim();

          this.gol1 = gols.substring(0, gols.indexOf("-")).trim();
          this.gol2 = gols
            .substring(gols[0].indexOf("-") + 1, gols[0].length)
            .trim();
        }
        //this.showFootballScoreCard = true;
      } else {
        //this.showFootballScoreCard = false;
      }

      this.showFootballScoreCard = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    //********************* tenis ************************ */

    tenisMapper() {
      /*if (document.getElementsByClassName("tennis-score-card").length > 0) {
              ///*let timeDiv = document.getElementsByClassName("football-time");
              //if (timeDiv.length > 0) this.footballTime = timeDiv[0].innerHTML;
      
              //let teamesBox = document.getElementsByClassName("football-stats");
              //if (teamesBox.length > 0) {
              //  // teame 1
              //  this.teame1 = teamesBox[0].innerHTML
              //    .substring(0, teamesBox[0].innerHTML.indexOf("<"))
              //    .trim();
      //
              //  // teame 2
              //  this.teame2 = teamesBox[0].innerHTML
              //    .substring(
              //      teamesBox[0].innerHTML.indexOf("</span>") + 7,
              //      teamesBox[0].innerHTML.length
              //    )
              //    .trim();
      //
              //  // Gols
              //  let gols = teamesBox[0].innerHTML
              //    .substring(
              //      teamesBox[0].innerHTML.indexOf(">") + 1,
              //      teamesBox[0].innerHTML.indexOf("</span>")
              //    )
              //    .trim();
      //
              //  this.gol1 = gols.substring(0, gols.indexOf("-")).trim();
              //  this.gol2 = gols
              //    .substring(gols[0].indexOf("-") + 1, gols[0].length)
              //    .trim();
              //}
              this.showTenisScoreCard = true;
            } else {
              this.showTenisScoreCard = false;
            }*/
      this.showTenisScoreCard = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    //********************* tenis ************************ */

    cricketMapper() {
      let elem = document.createElement("div");
      elem.innerHTML = this.scoreHtml;

      if (document.getElementsByClassName("container-main").length > 0) {
        let teamesDiv = document.getElementsByClassName("team_name");
        if (teamesDiv.length > 0) {
          this.gol1 = document.getElementsByClassName("run")[0].innerHTML;
          this.gol2 = document.getElementsByClassName("run")[1].innerHTML;
          //
          this.parantez1 = document.getElementsByClassName("over")[0].innerHTML;
          this.parantez2 = document.getElementsByClassName("over")[2].innerHTML;
          //
          this.crr1 = document.getElementsByClassName("over")[1].innerHTML;
          this.crr2 = document.getElementsByClassName("over")[3].innerHTML;

          this.target = elem.getElementsByClassName("status")[0];
          if (elem.getElementsByClassName("day").length > 0) {
            this.day = [];
            let days = elem
              .getElementsByClassName("day")[0]
              .innerHTML.split(" ");
            days.forEach((d) => {
              if (d.trim() != "" && d.trim() != " " && d.trim() != undefined) {
                this.day.push(d.trim());
              }
            });
          }
        }
        /*if (document.getElementsByClassName("tennis-score-card").length > 0) {
                ///*let timeDiv = document.getElementsByClassName("football-time");
                //if (timeDiv.length > 0) this.footballTime = timeDiv[0].innerHTML;
        
                //let teamesBox = document.getElementsByClassName("football-stats");
                //if (teamesBox.length > 0) {
                //  // teame 1
                //  this.teame1 = teamesBox[0].innerHTML
                //    .substring(0, teamesBox[0].innerHTML.indexOf("<"))
                //    .trim();
        //
                //  // teame 2
                //  this.teame2 = teamesBox[0].innerHTML
                //    .substring(
                //      teamesBox[0].innerHTML.indexOf("</span>") + 7,
                //      teamesBox[0].innerHTML.length
                //    )
                //    .trim();
        //
                //  // Gols
                //  let gols = teamesBox[0].innerHTML
                //    .substring(
                //      teamesBox[0].innerHTML.indexOf(">") + 1,
                //      teamesBox[0].innerHTML.indexOf("</span>")
                //    )
                //    .trim();
        //
                //  this.gol1 = gols.substring(0, gols.indexOf("-")).trim();
                //  this.gol2 = gols
                //    .substring(gols[0].indexOf("-") + 1, gols[0].length)
                //    .trim();
                //}
                this.showTenisScoreCard = true;
              } else {
                this.showTenisScoreCard = false;
              }*/
        this.hasHtml = true;
      } else {
        this.hasHtml = false;
      }
      this.showCricketScoreCard = true;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    heightXpert(v) {
      console.log("IframeLoaded", v);
      let _this = this;
      setTimeout(() => {
        _this.loading = false;
        return _this.IframeScoreSRC.includes("xpert9.com")
          ? (_this.iframeHeight = "188px")
          : (_this.iframeHeight = "revert-layer");
      }, 2000);
    },
  },
  mounted() {
    this.getScoreCard();
    //this.changeScoreDataStyle();
    //this.setStyleLists();
  },
  components: {
    Football: defineAsyncComponent(() => import("./football/Football.vue")),
    Tenis: defineAsyncComponent(() => import("./tenis/Tenis.vue")),
    Circket: defineAsyncComponent(() => import("./cricket/Circket.vue")),
  },
};
</script>

<style lang="scss" scoped>
iframe {
  margin: 0 !important;
  height: 180px;
}
.score-card-realtime.score-card-realtime-2 {
  height: 202px !important;
  margin: 0 0 !important;
}
</style>
