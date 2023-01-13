<template>
  <div class="bg-new-gray min-h-screen">
    <the-navbar-horizontal
      v-if="$store.state.allTopHeader == true"
      :showNavbarHeader="showNavbarHeader"
      :showNavbarScrollabel="showNavbarScrollabel"
      :showNewsBoxMarquee="showNewsBoxMarquee"
    />

    <div class="w-full pt-[3.0rem] md:pt-0 md:mt-auto">
      <router-view :key="$route.fullPath" />

      <!-- <footer-horizontal-nav v-if="showFooter"></footer-horizontal-nav> -->

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
                    <button type="button" class="btn btn-primary" @click="gotLogin">Yes, Logout</button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="
  idleTime = 0;
showInactiveModal = false;
                      "
                      data-dismiss="modal"
                    >Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbarHorizontal from "../components/navbar/TheNavbarHorizontal.vue";
import FooterHorizontalNav from "../components/horizontal-nav-menu/FooterHorizontalNav.vue";

export default {
  name: "main-layout",
  components: {
    TheNavbarHorizontal,
    FooterHorizontalNav,
  },
  props: {
    theme: String,
  },
  data() {
    return {
      showFooter: true,
      showNavbarHeader: true,
      showNavbarScrollabel: true,
      showSidebar: this.$store.state.sidebarShow,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      showNewsBoxMarquee: true,
      interVal: null,
      userStatusInterval: null,
      idleTime: 0,
      showInactiveModal: false,
      expTime: 0,
      interValTokenExpire: null,
      timeOutSecond: 0,
      showTimeOutNotificationSecond: 0,
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  mounted() {
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
        .catch(() => { })
        .finally(() => { });

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
    clearInterval(this.userStatusInterval);
    clearInterval(this.interValTokenExpire);
  },
  methods: {
    gotLogin() {
      this.showInactiveModal = false;
      this.emitter.emit("logout");
    },

    getExpireDateToken() {
      this.$store.dispatch("authModule/getAccessTokenValidateTime").then((response) => {
        this.expTime = parseInt(response.data.result);
        if (this.expTime == 0) this.emitter.emit("logout");
      });
    },

    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
  computed: {
    paddingImgSlider() {
      if (this.$store.state.showImageSliderHeader == true && this.window.width <= 767)
        return "padding:32px 15px !important;";
      else return "padding:0px !important;";
    },
  },
  watch: {},
};
</script>
<style scoped>
.overlay-box {
  height: calc(100vh - 64px);
}
</style>
