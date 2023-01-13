<template>
  <div v-show="show" class="sidebar-overlay" @click="show = false"></div>
  <div
    v-show="show"
    :style="show == true ? 'width: 270px' : 'width: 0px'"
    class="right-menu font-cera-pro font-medium"
  >
    <div class="logo-details border-b">
      <div class="text-center w-full">
        <h3 class="font-bold">
          {{ $store.getters["authModule/userinfo"]?.username }}
        </h3>
      </div>
      <a class="closebtn" @click="show = false">&times;</a>
    </div>
    <div class="text-slate-800 font-normal text-sm mt-1 ml-3 mr-2 border-b">
      <h5 class="flex text-sm font-bold text-center">
        <!-- <i class="ui-icon theme-my-balance"></i> -->
        <Fa
          :icon="faBuildingColumns"
          class="float-left inline-block mt-[6px] mr-1 text-primary"
        />
        <span class="leading-8 ml-2">Balance Information</span>
      </h5>
      <div class="flex justify-between">
        <div>Available Credit:</div>
        <div>{{ $store.getters["moduleMain/getOpenBets"]?.balance || 0 }}</div>
      </div>
      <div class="flex justify-between mt-2 mb-2">
        <div>Net Exposure:</div>
        <div>{{ $store.getters["moduleMain/getOpenBets"]?.exposure || 0 }}</div>
      </div>
      <div class="flex justify-between gap-2 mt-3 mb-2">
        <router-link
          v-if="$store.getters['configModule/domainSettings']?.showDepositW"
          to="/depositw"
          class="bg-primary h-8 w-1/2 px-2 text-center rounded text-xs py-2"
          style="color: #fff"
          >Deposit</router-link
        >
        <router-link
          v-if="$store.getters['configModule/domainSettings']?.showDepositW"
          to="/withdrawal"
          class="bg-primary h-8 w-1/2 px-2 text-center rounded text-xs py-2"
          style="color: #fff"
          >Withdrawal</router-link
        >
      </div>
    </div>

    <ul class="nano-content font-semibold">
      <li>
        <router-link
          to="/open-bets"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faList"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Open Bets
        </router-link>
      </li>
      <li>
        <router-link
          to="/profitloss"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faMoneyBill"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Betting P&L
        </router-link>
      </li>
      <li>
        <router-link
          to="/account-cash-statement"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faBook"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Transfer Statement
        </router-link>
      </li>
      <li>
        <router-link
          to="/change-password"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faLock"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Change Password
        </router-link>
      </li>
      <li>
        <router-link
          to="/rule-regulations"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faRuler"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Rule & Regulations
        </router-link>
      </li>
      <li>
        <router-link
          to="/exclusion-policy"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faBan"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Exclusion Policy
        </router-link>
      </li>
      <li>
        <router-link
          to="/responsible-gaming"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faHand"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Responsible Gaming
        </router-link>
      </li>
      <li v-if="$store.getters['configModule/domainSettings']?.showDepositW">
        <router-link
          to="/depositw"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faMoneyBill"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Deposit
        </router-link>
      </li>
      <li v-if="$store.getters['configModule/domainSettings']?.showDepositW">
        <router-link
          to="/withdrawal"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faCreditCard"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Withdrawal
        </router-link>
      </li>
      <li v-if="$store.getters['configModule/domainSettings']?.showDWRequests">
        <router-link
          to="/dwrequests"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faCreditCard"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          DW Requests
        </router-link>
      </li>
      <li class="border-t border-gray-500">
        <router-link
          to="/settings-stake"
          @click="show = false"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faCog"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Settings
        </router-link>
      </li>
      <!-- <li>
                <router-link to="/open-bets" @click="show = false"
                    class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white">
                    My Bets</router-link>
            </li>
            <li>
                <router-link to="/bet-history" @click="show = false"
                    class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white">
                    Bet History</router-link>
            </li> -->

      <li class="border-t border-gray-500">
        <a
          @click="logout"
          class="block py-2 px-4 text-base text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
        >
          <Fa
            :icon="faSignOut"
            class="float-left inline-block mt-[6px] mr-2 text-primary"
          />
          Sign Out
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import Fa from "vue-fa";
  import {
    faSignOut,
    faRuler,
    faLock,
    faBook,
    faMoneyBill,
    faCreditCard,
    faList,
    faBuildingColumns,
    faCog,
    faHand,
    faBan,
  } from "@fortawesome/free-solid-svg-icons";
  import Logo from "../Logo.vue";
  export default {
    components: { Logo, Fa },
    props: {
      openMenu: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        faSignOut,
        faRuler,
        faLock,
        faBook,
        faMoneyBill,
        faCreditCard,
        faList,
        faBuildingColumns,
        faCog,
        faBan,
        faHand,
        show: this.openMenu,

        // ul/li
        dataObj: [],
        spors: [],
        toggleId: 0,
        searchVal: "",
        typing: false,
        dataForShow: [],
      };
    },
    methods: {
      getDataByFilter() {
        this.typing = true;
        this.dataForShow = [];
        if (this.dataObj.length > 0) {
          if (this.searchVal) {
            let filteredData = [];
            this.dataObj.map((sport) => {
              let eventsOfSport = [];
              sport.events.map((game) => {
                if (
                  game.title
                    ?.toLowerCase()
                    .includes(this.searchVal.toLowerCase())
                ) {
                  eventsOfSport.push(game);
                }
              });

              if (eventsOfSport.length > 0) {
                let e = JSON.parse(JSON.stringify(sport));
                e["events"] = [];
                e["events"] = eventsOfSport;

                filteredData.push(e);
              }
            });

            //=====================================================

            filteredData.forEach((value) => {
              if (value.name == "tennis") {
                if (this.$store.getters["configModule/domainSettings"]?.tennis)
                  this.dataForShow.push(value);
              } else if (value.name == "cricket") {
                if (this.$store.getters["configModule/domainSettings"]?.cricket)
                  this.dataForShow.push(value);
              } else if (value.name == "football") {
                if (
                  this.$store.getters["configModule/domainSettings"]?.football
                )
                  this.dataForShow.push(value);
              } else if (value.name == "kabaddi") {
                if (this.$store.getters["configModule/domainSettings"]?.kabaddi)
                  this.dataForShow.push(value);
              }
            });

            //=====================================================

            // this.dataForShow = filteredData;
          } else {
            this.dataForShow = JSON.parse(JSON.stringify(this.dataObj));
          }
        }
        this.typing = false;
      },
      getData() {
        this.dataObj = [];
        if (this.$store.getters["moduleMain/getAllEvents"].length > 0) {
          let sports = this.$store.getters["moduleMain/getAllEvents"];

          sports.forEach((value) => {
            if (value.name == "tennis") {
              if (this.$store.getters["configModule/domainSettings"]?.tennis)
                this.dataObj.push(value);
            } else if (value.name == "cricket") {
              if (this.$store.getters["configModule/domainSettings"]?.cricket)
                this.dataObj.push(value);
            } else if (value.name == "football") {
              if (this.$store.getters["configModule/domainSettings"]?.football)
                this.dataObj.push(value);
            } else if (value.name == "kabaddi") {
              if (this.$store.getters["configModule/domainSettings"]?.kabaddi)
                this.dataObj.push(value);
            }
          });
          //this.dataObj = this.$store.getters["moduleMain/getAllEvents"];
        }
      },
      toggle(id) {
        if (this.toggleId == id) {
          this.toggleId = null;
        } else {
          this.toggleId = id;
        }
      },
      setIconBySportId(id) {
        switch (id) {
          case 2:
            return "sports-4";
          case 3:
            return "sports-5";
          case 1:
            return "sports-22";
          default:
            break;
        }
      },
      gotoCasino() {
        this.show = false;
        this.$router.push("/casino");
      },
      openStackModal() {
        this.show = false;

        this.emitter.emit("show-modal-changed-stack-edit", true);
      },

      openExposureModal() {
        this.show = false;

        this.emitter.emit("show-modal-exposure", true);
      },
      logout() {
        if (localStorage.getItem("accessToken")) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("expire_in");
          localStorage.removeItem("userinfo");
        }

        this.$store.dispatch("authModule/logout").then({}).catch();
        //this.$store.dispatch("setOverlay", false).then({}).catch();
        this.show = false;

        this.$router.push("/auth/login");
      },
    },
    created() {
      this.getData();
    },
    computed: {},
    watch: {
      "$store.state.moduleMain.events"() {
        this.getData();
      },

      dataObj() {
        this.getDataByFilter();
      },

      searchVal() {
        this.getDataByFilter();
      },

      openMenu(val) {
        this.show = val;
      },

      show(val) {
        if (!val) {
          this.searchVal = "";
          this.toggleId = 0;
          this.emitter.emit("show-right-menu", false);
        }
      },
    },
  };
</script>

<style scoped>
  .nano-content {
    margin: 3px 8px !important;
    list-style-type: none !important;
  }

  .nano-content li:not(.nano-content li:last-child) {
    border-bottom: 1px solid #e2e2e2;
  }

  .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .search-input {
    padding: 8px 16px;
    background-color: #5a6e7b;
    width: 100%;
    color: #b8c0c6;
    font-weight: 400;
    outline: none;
    height: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
  }

  input::placeholder {
    color: #a0a7ad;
  }

  .right-menu {
    height: 100%;
    /* width: 0; */
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    background-color: #ffffff;
    overflow-x: hidden;
    transition: 0.5s;
    padding: 6px 10px;
    /* padding-top: 60px; */
  }

  .right-menu a {
    padding: 8px 10px;
    text-decoration: none;
    font-size: 13px;
    color: #2c2c2c;
    display: block;
    transition: 0.3s;
  }

  .right-menu a:hover {
    color: #262533;
  }

  .right-menu .closebtn {
    position: absolute;
    top: 0;
    right: 15px;
    font-size: 36px;
    margin-left: 50px;
  }

  .sidebar-game-list-events {
    background: #223e4e;
    border-radius: 0 0 12px 12px;
    list-style-type: none;
  }

  @media screen and (max-height: 450px) {
    .right-menu {
      padding-top: 15px;
    }

    .right-menu a {
      font-size: 12px;
    }
  }

  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #b5bdc273;
    z-index: 999;
  }

  /********************************************* */
  .sport-svg-icon {
    width: 18px;
    height: 18px;
    fill: #b8c0c6;
    margin: auto 5px;
  }

  .game-svg-icon {
    width: 12px;
    height: 12px;
    fill: #b8c0c6;
    margin: auto 5px;
  }

  .arrow {
    float: right;
    margin-top: 4px;
  }

  .font-size-large {
    font-size: large;
  }

  .sidebar0 {
    position: relative;
    /*height: 95%;*/
  }

  .sidebar {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    /* position: absolute; */
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    z-index: 100;
    box-shadow: 0 0 2px 1px #1a212a;
    border-radius: 5px;
  }

  .sidebar #accordion ul,
  .sidebar #accordion ul ul {
    margin: -2px 0 0;
    padding: 0;
  }

  .sidebar #accordion ul li {
    list-style-type: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .sidebar #accordion ul li.active > a {
    color: #262633;
  }

  .sidebar #accordion ul li.active ul {
    display: block;
  }

  .sidebar-sport-tag {
    padding: 18px 20px 18px 10px !important;
    border-radius: 12px 12px;
  }

  .sidebar-sport-tag.active {
    color: #2e2741;
    background: #f1f1f1;
    border-radius: 12px 12px 0 0;
  }

  .sidebar #accordion ul li a {
    color: #20262b;
    text-decoration: none;
    display: block;
    padding: 18px 10px 18px 10px;
    font-size: 12px;
    outline: 0;
    -webkit-transition: all 200ms ease-in;
    -moz-transition: all 200ms ease-in;
    -o-transition: all 200ms ease-in;
    -ms-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
  }

  .sidebar #accordion ul ul li a:hover {
    color: #252c31;
    background-color: #7091aa;
    font-weight: bold;
  }

  .sidebar #accordion ul ul li a:hover .event-ui-icon::before {
    color: #b8c0c6;
  }

  /* .sidebar #accordion ul li a:hover {
  color: #1abc9c;
  background-color: #35516c;
  font-weight: bold;
} */
  .sidebar #accordion ul li a span {
    display: inline-block;
  }

  .sidebar #accordion ul li a i {
    width: 20px;
  }

  .sidebar #accordion ul li a i .fa-angle-left,
  .sidebar #accordion ul li a i .fa-angle-right {
    padding-top: 3px;
  }

  .sidebar #accordion ul ul {
    display: none;
  }

  .sidebar #accordion ul ul li {
    background: #23313f;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    border-bottom: none;
  }

  .sidebar #accordion ul ul li a {
    font-size: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: #26313a;
  }

  /** */
  .slide-enter-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  .slide-leave-active {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to,
  .slide-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter,
  .slide-leave-to {
    overflow: hidden;
    max-height: 0;
  }

  .ui-icon.event-ui-icon {
    padding: 0.2rem;
  }

  .event-ui-icon::before {
    font-size: 0.822em;
    color: #b8c0c6;
  }

  .right-menu i.ui-icon:before {
    color: #2d3e4a;
  }
</style>
