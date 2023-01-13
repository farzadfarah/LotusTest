<template>
  <div
    class="bg-main-background min-h-screen bg-[length:50%] md:bg-[length:20%]"
  >
    <!-- :style="{ backgroundImage: `url(${backgroundUrl})` }" -->

    <!-- <sticky-left-menu v-if="$store.state.showImageSliderHeader"></sticky-left-menu> -->

    <the-navbar-horizontal
      v-if="$store.state.allTopHeader == true"
      :showNavbarHeader="showNavbarHeader"
      :showNavbarScrollabel="showNavbarScrollabel"
      :showNewsBoxMarquee="showNewsBoxMarquee"
    >
      <div
        class="fixed left-0 z-[11] w-full bg-white"
        v-if="$store.getters['moduleMain/getfilterbox']"
      >
        <div
          class="block w-full font-cera-round-pro absolute top-16 left-0 z-10"
        >
          <div
            class="bg-white p-2"
            v-for="item in $store.getters['moduleMain/getEventsByFilterBox']"
            :key="item"
          >
            <router-link :to="'/Markets/' + item.id" @click="closeSearchBox">
              <i
                class="ui-icon ui-icon-size-lg sports-icon"
                :class="iconBySportId(item.sportId)"
              ></i>
              <span>{{ item.title }}</span>
            </router-link>
          </div>
        </div>
      </div></the-navbar-horizontal
    >

    <berger-menu :openMenu="showMobileBergerMenu"></berger-menu>

    <right-menu :openMenu="showRightMenu"></right-menu>

    <!--:style="mainWrapPadding"-->
    <div class="w-full pt-[3.50rem] md:pt-0 pb-[20px] md:mt-auto">
      <!-- <div :style="paddingImgSlider">
        <image-slider-vue v-if="$store.state.showImageSliderHeader" />
      </div> -->

      <horizontal-nav-menu
        v-if="
          $store.state.showNavbarScrollabel &&
          !$store.getters['moduleMain/getfilterbox']
        "
      >
      </horizontal-nav-menu>

      <!-- <div v-if="!$store.getters['moduleMain/getfilterbox']" class="flex"> -->

      <div class="flex w-full">
        <div
          v-show="$store.getters['moduleMain/getfilterbox']"
          @click="closeSearchBox()"
          class="w-full overlay-box fixed top-14 left-0 bottom-0 bg-slate-700 z-[9] opacity-70"
        ></div>

        <!-- w-56 max-w-[14rem] -->
        <left-menu class="w-56 max-w-[14rem] hidden md:block"></left-menu>
        <div
          class="block relative w-full md:w-[calc(100%-14rem)] font-cera-round-pro pt-2"
        >
          <router-view :key="$route.fullPath" />
        </div>
        <router-link
          to="/my-markets"
          class="bg-primary z-10 md:hidden rounded-full fixed bottom-4 right-4 p-3 h-12"
        >
          <Fa
            :icon="faEye"
            size="lg"
            class="float-left inline-block m-auto text-white"
            style="margin-top: 2px"
          />
        </router-link>
        <!-- <FloatingMenuButton
          :setting="$store.getters['configModule/domainSettings']"
          :userStatus="$store.getters['authModule/userinfo']"
          depositURL="/depositw"
          withdrawalURL="/withdrawal"
        ></FloatingMenuButton> -->

        <a
          v-if="$store.getters['configModule/domainSettings']?.showSupportLink"
          :href="$store.getters['configModule/domainSettings']?.supportLink"
          target="_blank"
          class="--md:hidden rounded-full fixed z-10 bottom-4 left-[20px] md:left-[16px] --p-3 h-12"
        >
          <!-- <img src="/assets/images/newwhatsApp.svg" class="m-auto h-12 w-12" /> -->
          <svg
            class="m-auto h-16 w-16"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="79.715"
            height="79.932"
            viewBox="0 0 79.715 79.932"
          >
            <defs>
              <filter
                id="Path_44094"
                x="0"
                y="0"
                width="79.715"
                height="79.932"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g id="icons8-whatsapp" transform="translate(14.364 11.365)">
              <path
                id="Path_44093"
                data-name="Path 44093"
                d="M4.868,53.662,8.291,41.167a24.122,24.122,0,1,1,20.9,12.077h-.01a24.094,24.094,0,0,1-11.527-2.936Z"
                transform="translate(-3.597 -3.73)"
                fill="#fff"
                fill-rule="evenodd"
              />
              <g
                transform="matrix(1, 0, 0, 1, -14.36, -11.36)"
                filter="url(#Path_44094)"
              >
                <path
                  id="Path_44094-2"
                  data-name="Path 44094"
                  d="M5,54.432a.635.635,0,0,1-.612-.8L7.743,41.389a24.754,24.754,0,1,1,9.967,9.733L5.164,54.411A.581.581,0,0,1,5,54.432Z"
                  transform="translate(10.63 7.5)"
                  fill="#fff"
                  fill-rule="evenodd"
                />
              </g>
              <path
                id="Path_44095"
                data-name="Path 44095"
                d="M29.463,5.27a24.122,24.122,0,0,1,0,48.244h-.01a24.094,24.094,0,0,1-11.527-2.936L5.139,53.932,8.561,41.438A24.125,24.125,0,0,1,29.463,5.27m0,48.244h0m0,0h0M29.463,4h0A25.4,25.4,0,0,0,7.2,41.607L3.913,53.6a1.27,1.27,0,0,0,1.549,1.564l12.307-3.227A25.394,25.394,0,1,0,29.463,4Z"
                transform="translate(-3.868 -4)"
                fill="none"
                fill-rule="evenodd"
              />
              <path
                id="Path_44096"
                data-name="Path 44096"
                d="M42.463,14.083A20.05,20.05,0,0,0,11.3,38.913l.478.758-2.026,7.4,7.588-1.99.733.434a20.01,20.01,0,0,0,10.2,2.794h.008A20.05,20.05,0,0,0,42.463,14.083Z"
                transform="translate(-2.687 -2.862)"
                fill="#40c351"
                fill-rule="evenodd"
              />
              <path
                id="Path_44097"
                data-name="Path 44097"
                d="M20.594,16.27c-.451-1-.926-1.024-1.357-1.042-.352-.015-.753-.014-1.155-.014a2.215,2.215,0,0,0-1.607.755,6.755,6.755,0,0,0-2.11,5.026c0,2.965,2.16,5.831,2.461,6.233s4.17,6.681,10.3,9.1c5.091,2.007,6.127,1.608,7.233,1.508s3.566-1.457,4.068-2.865a5.047,5.047,0,0,0,.352-2.865c-.151-.252-.553-.4-1.155-.7s-3.566-1.76-4.119-1.96-.954-.3-1.357.3S30.587,31.7,30.235,32.1s-.7.454-1.306.151a16.5,16.5,0,0,1-4.847-2.991A18.158,18.158,0,0,1,20.73,25.09c-.352-.6-.038-.929.264-1.23.271-.271.6-.7.9-1.056a4.122,4.122,0,0,0,.6-1,1.108,1.108,0,0,0-.051-1.056C22.3,20.442,21.13,17.461,20.594,16.27Z"
                transform="translate(-1.029 -0.967)"
                fill="#fff"
                fill-rule="evenodd"
              />
            </g>
          </svg>
        </a>
      </div>
      <!------------ Search Box Started ------------>

      <stack-edit></stack-edit>

      <exposure-modal></exposure-modal>

      <div
        v-show="$store.state.overlay == true"
        @click="overlayClose"
        class="w-full overlay-box fixed top-0 left-0 bg-slate-700 z-[11] opacity-70"
      ></div>

      <div v-if="showInactiveModal">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">InActive?</h5>
                  </div>
                  <div class="modal-body">
                    <p>you are inactive for longetime (inactive timeout).</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="gotLogin"
                    >
                      Yes, Logout
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="
                        idleTime = 0;
                        showInactiveModal = false;
                      "
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <footer-horizontal-nav v-if="showFooter"></footer-horizontal-nav>
  </div>
</template>

<script>
  //import Fa from "vue-fa";
  import { faEye } from "@fortawesome/free-solid-svg-icons";
  import backgroundUrl from "@/assets/images/lotus-bg.jpg";
  //import TheNavbarHorizontal from "../components/navbar/TheNavbarHorizontal.vue";
  //import SideBar from "../components/sidebar/side-bar.vue";

  //import FooterHorizontalNav from "../components/horizontal-nav-menu/FooterHorizontalNav.vue";
  //import StackEdit from "../../components/stack/Stack-Edit.vue";
  //import ExposureModal from "../components/horizontal-nav-menu/ExposureModal.vue";
  //import BergerMenu from "../components/sidebar/BergerMenu.vue";
  //import StickyLeftMenu from "../components/sidebar/StickyLeftMenu.vue";
  //import ImageSliderVue from "../components/sliders/image-slider/ImageSlider.vue";
  //
  //import HorizontalNavMenu from "../components/horizontal-nav-menu/HorizontalNavMenu.vue";
  //import RightMenu from "../components/sidebar/RightMenu.vue";
  //import LeftMenu from "../components/sidebar/LeftMenu.vue";
  import mixinGlobal from "@/mixins/mixinGlobal";
  import { defineAsyncComponent } from "vue";

  export default {
    name: "main-layout",
    mixins: [mixinGlobal],
    components: {
      TheNavbarHorizontal: defineAsyncComponent(() =>
        import("../components/navbar/TheNavbarHorizontal.vue")
      ),
      SideBar: defineAsyncComponent(() =>
        import("../components/sidebar/side-bar.vue")
      ),
      //TheFooter,
      //Modal,
      FooterHorizontalNav: defineAsyncComponent(() =>
        import("../components/horizontal-nav-menu/FooterHorizontalNav.vue")
      ),
      StackEdit: defineAsyncComponent(() =>
        import("../../components/stack/Stack-Edit.vue")
      ),
      ExposureModal: defineAsyncComponent(() =>
        import("../components/horizontal-nav-menu/ExposureModal.vue")
      ),
      BergerMenu: defineAsyncComponent(() =>
        import("../components/sidebar/BergerMenu.vue")
      ),
      StickyLeftMenu: defineAsyncComponent(() =>
        import("../components/sidebar/StickyLeftMenu.vue")
      ),
      ImageSliderVue: defineAsyncComponent(() =>
        import("../components/sliders/image-slider/ImageSlider.vue")
      ),
      HorizontalNavMenu: defineAsyncComponent(() =>
        import("../components/horizontal-nav-menu/HorizontalNavMenu.vue")
      ),
      RightMenu: defineAsyncComponent(() =>
        import("../components/sidebar/RightMenu.vue")
      ),
      LeftMenu: defineAsyncComponent(() =>
        import("../components/sidebar/LeftMenu.vue")
      ),
      Fa: defineAsyncComponent(() => import("vue-fa")),
    },
    props: {
      theme: String,
      // showSidebar: { type: Boolean, default: true },
    },
    data() {
      return {
        backgroundUrl,
        showAccountModal: false,
        showMobileBergerMenu: false,
        showRightMenu: false,
        showHeader: true,
        //showFooter: true,
        showNavbarHeader: true,
        showNavbarScrollabel: true,
        showSidebar: this.$store.state.sidebarShow,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        showNewsBoxMarquee: true,
        flag: 0,
        interVal: null,
        userStatusInterval: null,
        idleTime: 0,
        showInactiveModal: false,
        expTime: 0, // minute of user token expire date
        interValTokenExpire: null,
        timeOutSecond: 0,
        showTimeOutNotificationSecond: 0,
        window: {
          width: 0,
          height: 0,
        },
        testHtml: "",
        faEye,
      };
    },
    created() {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    },
    mounted() {
      //this.displayHtml();
      this.getAllEvents(true);

      this.interVal = setInterval(() => {
        this.getAllOpenBets(true);
        this.getProfits();
      }, 60000);

      this.emitter.on("show-sidebar-menu-mobile", (result) => {
        if (result) {
          this.showMobileBergerMenu = result;
        } else {
          this.showMobileBergerMenu = false;
        }
      });

      this.emitter.on("show-right-menu", (result) => {
        if (result) {
          this.showRightMenu = result;
        } else {
          this.showRightMenu = false;
        }
      });

      this.emitter.on("show-account-modal", (result) => {
        if (result) {
          this.showAccountModal = result;
        } else {
          this.showAccountModal = false;
        }
      });

      if (this.$store.getters["authModule/userinfo"]) {
        document.addEventListener("mousedown", () => {
          if (this.showInactiveModal != true) this.idleTime = 0;
        });
        document.addEventListener("mousemove", () => {
          if (this.showInactiveModal != true) this.idleTime = 0;
        });
        document.addEventListener("mouseup", () => {
          if (this.showInactiveModal != true) this.idleTime = 0;
        });

        // *******************************************//

        this.$store
          .dispatch("authModule/getSettingExpiry")
          .then((response) => {
            //console.log(response);
            this.userStatusInterval = setInterval(() => {
              this.showTimeOutNotificationSecond =
                response.data.result.showTimeOutNotificationSecond;
              this.timeOutSecond = response.data.result.timeOutSecond;

              this.idleTime = this.idleTime + 1;
              if (this.idleTime > this.timeOutSecond) {
                this.showInactiveModal = true;
                setTimeout(() => {
                  if (
                    this.idleTime >
                    this.timeOutSecond + this.showTimeOutNotificationSecond
                  ) {
                    this.gotLogin();
                  } else {
                    this.idleTime = 0;
                  }
                }, this.showTimeOutNotificationSecond * 1000);
              }
            }, 1000);
          })
          .catch(() => {})
          .finally(() => {});

        /**************************************** */

        this.$store
          .dispatch("authModule/getAccessTokenValidateTime", {
            accessToken: localStorage.getItem("accessToken"),
          })
          .then((response) => {
            this.expTime = parseInt(response.data.result);

            if (this.expTime > 0) {
              this.interValTokenExpire = setInterval(() => {
                this.expTime = this.expTime - 1 < 0 ? 0 : this.expTime - 1;
                if (this.expTime <= 0 && this.idleTime < this.timeOutSecond) {
                  if (localStorage.getItem("accessToken")) {
                    this.$store
                      .dispatch("authModule/refreshToken", {
                        refreshToken: localStorage.getItem("refresh_token"),
                      })
                      .then(() => {
                        this.getExpireDateToken();
                      })
                      .catch(() => {
                        this.emitter.emit("logout");
                      });
                  } else {
                    this.emitter.emit("logout");
                  }
                }
              }, 60000);
            } else {
              this.emitter.emit("logout");
            }
          })
          .catch();
      }
    },
    unmounted() {
      clearInterval(this.interVal);
      clearInterval(this.userStatusInterval);
      clearInterval(this.interValTokenExpire);
    },
    methods: {
      /*loadHtml(path, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", path, true);
      xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        callback(this.responseText);
      };
      xhr.send();
    },

    async displayHtml(file) {
      file =
        "https://www.cricketexchange.in/scoreboard/9JL/LI/1st-TEST/S/V/wi-vs-eng-1st-test-england-tour-of-west-indies-2022/live";
      this.loadHtml(file, async function (html) {
        let stHtml = await html;
        let parser = new DOMParser();
        const doc = parser.parseFromString(stHtml, "text/html");
        let card = await doc.getElementsByClassName("live-score-header-card");
        if (card != undefined) {
          const boxes = doc.querySelectorAll("div");

          console.log(boxes);

          boxes.forEach((box, index) => {
            if (!box.getElementsByClassName("live-score-header-card"))
              box.setAttribute("style", `display:none`);
          });

          document.querySelector(".page_content_wrapper").innerHTML =
            card[0].innerHTML || "";
        }

        //console.log(card);
        //document.querySelector(".page_content_wrapper").innerHTML = await card[0];
      });
      return false;
    },*/

      changeTheme() {
        let theme = this.$store.getters.theme;
        if (theme == "" || theme == "light") {
          this.$store.commit("setTheme", "dark");

          document.documentElement.setAttribute(
            "theme",
            this.$store.getters.theme
          );
          document.body.setAttribute("theme", this.$store.getters.theme);
        } else {
          this.$store.commit("setTheme", "light");

          document.documentElement.setAttribute(
            "theme",
            this.$store.getters.theme
          );
          document.body.setAttribute("theme", this.$store.getters.theme);
        }
      },

      getAllEvents(showloading) {
        if (showloading) {
          document.getElementById("loading").style.display = "block";
        }

        /// Get All Profit In Get Events
        /*if (this.$store.getters["authModule/userinfo"]) {
        this.$store
          .dispatch("moduleMain/getUserExpectedProfitLoss")
          .then(() => {})
          .catch(() => {})
          .finally(() => {});
      }*/

        // Get All Events
        this.$store
          .dispatch("moduleMain/getSportWithEventTree")
          .then(() => {
            this.flag++;
          })
          .catch(() => {
            this.flag++;
          })
          .finally(() => {
            document.getElementById("loading").style.display = "none";
          });
      },

      getAllOpenBets(showloading) {
        if (showloading) {
          document.getElementById("loading").style.display = "block";
        }

        if (
          this.$store.getters["authModule/userinfo"] &&
          localStorage.getItem("accessToken")
        ) {
          this.$store
            .dispatch("moduleMain/getUserOpenBets")
            .then(() => {})
            .catch(() => {})
            .finally(() => {
              document.getElementById("loading").style.display = "none";
            });
        } else {
          document.getElementById("loading").style.display = "none";
        }
      },

      getProfits() {
        if (this.$store.getters["authModule/userinfo"]) {
          document.getElementById("loading").style.display = "none";
          this.$store.dispatch("moduleMain/getUserExpectedProfitLoss");
        }
      },

      gotLogin() {
        this.showInactiveModal = false;
        this.emitter.emit("logout");
      },

      getExpireDateToken() {
        this.$store
          .dispatch("authModule/getAccessTokenValidateTime")
          .then((response) => {
            this.expTime = parseInt(response.data.result);
            if (this.expTime == 0) this.emitter.emit("logout");
          });
      },

      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },

      overlayClose() {
        //this.$store.dispatch("setOverlay", false)
      },

      closeSearchBox() {
        this.$store
          .dispatch("moduleMain/updatefilterbox", false)
          .then(() => {})
          .catch();
      },
    },
    computed: {
      paddingImgSlider() {
        if (
          this.$store.state.showImageSliderHeader == true &&
          this.window.width <= 767
        )
          return "padding:32px 15px !important;";
        else return "padding:0px !important;";
      },

      showFooter() {
        console.log(this.$route.name);
        if (this.$route.name == "inplay") return true;
        else {
          if (this.window.width <= 767) return false;
          else return true;
        }
      },

      /*mainWrapPadding() {
      if (this.$route.name.toLowerCase().includes("markets")) {
        if (this.$store.state.moduleMain.showVideoBox == true) {
          return 'padding: 81.6667vw 0px 17.6vw'
        } else {
          return 'padding: 21.66667vw 0 17.6vw'
        }
      }
      else if (this.$route.name.toLowerCase().includes("index")) {
        return 'padding: 22.66667vw 0 17.6vw'
      }
      else if (this.$route.name.toLowerCase().includes("inplay")) {
        return 'padding: 20.66667vw 0 17.6vw'
      }
      else if (this.$route.name.toLowerCase().includes("multimarket")) {
        return 'padding: 20.66667vw 0 17.6vw'
      }
      else if (this.$route.name.toLowerCase().includes("casino")) {
        return 'padding: 19.66667vw 0 0.6vw'
      }
      else if (this.$route.name.toLowerCase().includes("lotus")) {
        return 'padding: 0 0 0'
      }
      return 'padding: 20.66667vw 0 17.6vw';
    },*/

      walletState() {
        return this.$store.getters["moduleMain/getWalletBoxStatus"];
      },
    },
    watch: {
      "$store.state.sidebarShow"(val) {
        this.showSidebar = val;
      },
      flag() {
        setTimeout(() => {
          this.getAllEvents(false);
        }, 600000);
      },
    },
  };
</script>
<style scoped>
  .overlay-box {
    height: calc(100vh - 64px);
  }
</style>
<style>
  .border-l-4-border-blue-600 {
    border-left: 2px solid #6767eb !important;
  }

  .border-l-4-border-red-600 {
    border-left: 2px solid #ff5151 !important;
  }
</style>
