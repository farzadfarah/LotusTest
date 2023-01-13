<template>
  <header
    v-if="!$store.getters['moduleMain/getfilterbox']"
    class="w-full bg-primary fixed md:relative z-50 md:h-20 flex items-center justify-between"
  >
    <div class="inline-flex">
      <button
        type="button"
        class="md:hidden py-1 px-1 rounded items-center z-[11]"
        @click="emitter.emit('show-sidebar-menu-mobile', true)"
      >
        <i class="ui-icon theme-menu menu-top-white"></i>
      </button>

      <logo
        class="xs:w-32 w-52 py-2 px-4 xs:px-1 inline-block cursor-pointer"
        @click="$router.push('/inplay')"
      ></logo>

      <div class="hidden md:block mt-4">
        <span class="text-white text-[0.6rem]">{{
          new Date().toDateString()
        }}</span>
        <span class="text-white text-xs font-semibold ml-4">{{ time }}</span>
      </div>
    </div>

    <div class="hidden md:block search-md relative w-52">
      <div
        v-show="searchTextMd != ''"
        @click="(searchTextMd = ''), (searchList = [])"
        class="w-full h-screen overlay-box fixed top-0 left-0 bg-slate-500 z-[11] opacity-70"
      ></div>
      <div style="position: absolute; z-index: 100; left: 0; top: -18px">
        <div class="headerDesktop-content__search">
          <i class="ui-icon theme-search"></i>
          <div class="form-row">
            <input
              style="
                background: white;
                color: black;
                border: 1px solid rgb(221, 221, 221);
                border-radius: 3px;
              "
              type="text"
              id="form-email"
              class="form-textbox"
              required=""
              v-model="searchTextMd"
            />

            <label for="form-search" class="form-label">Search Events</label>
          </div>
        </div>
        <div v-if="searchList.length > 0" class="relative">
          <div class="absolute top-1 left-0">
            <div class="poligonSearch">
              <img src="@/assets/svg/arrow-top.svg" alt="" />
            </div>
            <div class="searchList">
              <div v-for="i in searchList" :key="i" class="searchList-text">
                <div style="display: flex">
                  <!-- <img
                  style="height: 19px"
                  src="./static/media/sideBarCricket.db454117.svg"
                  alt=""
                /> -->
                  <div
                    @click="
                      $router.push('/markets/' + i.id),
                        (searchTextMd = ''),
                        (searchList = [])
                    "
                    class="searchList-text-info"
                  >
                    <span>{{ i.title }}</span>
                    <div style="margin-top: 5px; font-size: 12px"></div>
                  </div>
                </div>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:flex gap-2 hidden">
      <router-link
        v-if="$store.getters['configModule/domainSettings']?.showDepositW"
        to="/depositw"
        class="press-effect bg-cta-primary-darken h-8 w-20 px-2 text-center border-r-2 border-b-2 border-[rgba(0,0,0,.25)] rounded font-bold text-xs py-2 text-white"
        >Deposit</router-link
      >
      <router-link
        v-if="$store.getters['configModule/domainSettings']?.showDepositW"
        to="/withdrawal"
        class="press-effect bg-cta-primary-darken h-8 w-20 px-2 text-center border-r-2 border-b-2 border-[rgba(0,0,0,.25)] rounded font-bold text-xs py-2 text-white"
        >Withdrawal</router-link
      >
    </div>

    <template v-if="$store.state.showNavBackToSports">
      <div class="float-right py-1 px-3 xs:px-1 inline-block">
        <router-link
          class="block bg-gray-50 hover:bg-gray-400 text-new-sky font-bold text-sm py-1 px-2 rounded items-center leading-7 w-25 m-1"
          to="/inplay"
        >
          <p class="block w-full font-cera-round-pro text-md text-center">
            Back To Sports
          </p>
        </router-link>
      </div>
    </template>

    <template v-else>
      <div
        v-if="!$store.getters['authModule/userinfo']"
        class="float-right py-1 px-3 xs:px-1 inline-block"
      >
        <router-link
          v-if="$store.getters['configModule/domainSettings']?.allowSignUp"
          class="inline-block bg-white md:bg-transparent text-slate-800 md:text-highlights font-normal text-xs md:text-sm py-1 px-1 sm:px-2 rounded-sm shadow-lg md:shadow-none items-center leading-7 w-14 sm:w-20 m-1"
          to="/auth/SignUp"
        >
          <p class="block w-full font-cera-round-pro text-md text-center">
            Sign Up
          </p>
        </router-link>
        <router-link
          class="inline-block bg-secondary md:bg-transparent text-slate-800 md:text-highlights font-normal text-xs md:text-sm py-1 px-1 sm:px-2 rounded-sm shadow-lg md:shadow-none items-center leading-7 w-14 sm:w-20 m-1"
          to="/auth/login"
        >
          <p class="block w-full font-cera-round-pro text-md text-center">
            Login
          </p>
        </router-link>
      </div>

      <div
        v-else-if="$store.getters['authModule/userinfo']"
        class="float-right py-1 px-3 xs:px-1 inline-flex"
      >
        <button
          @click="showSearchBox"
          class="md:hidden text-white text-sm py-1 px-2 rounded items-center leading-4 m-1"
        >
          <p class="block w-full font-cera-round-pro text-xs">
            <i class="ui-icon theme-search"></i>
          </p>
        </button>

        <router-link
          v-if="$store.getters['configModule/domainSettings']?.showDepositW"
          to="/depositw"
          class="md:hidden bg-secondary hover:text-primary text-black font-cera-round-pro text-xs flex justify-center align-middle py-1 px-2 rounded items-center leading-4 w-[65px] h-10 m-1"
        >
          Deposit
        </router-link>

        <button
          @click="toggleMenuInMobile"
          class="md:hidden bg-white hover:text-primary text-black font-cera-round-pro text-sm py-1 px-2 rounded items-center leading-4 min-w-[65px] h-10 m-1"
        >
          <p class="block w-full font-cera-round-pro text-xs">
            <i class="ui-icon theme-username text-[0.5rem]"></i>
          </p>
          <p class="block font-cera-round-pro text-xs">
            {{ $store.getters["moduleMain/getOpenBets"]?.balance || 0 }}
          </p>
        </button>

        <!-- <button
          @click="toggleMenu"
          class="hidden md:block bg-[#2c4f58] hover:text-orange-100 text-white font-cera-round-pro text-sm py-1 px-2 rounded items-center leading-4 w-20 xs:w-[75px] m-1"
        >
          <p class="block w-full font-cera-round-pro text-xs">
            <i class="ui-icon theme-username text-[0.5rem]"></i>
          </p>
          <p class="block font-cera-round-pro text-xs">
            {{ $store.getters["moduleMain/getOpenBets"]?.balance || 0 }}
          </p>
        </button> -->
        <button
          @click="toggleMenu"
          class="hidden md:flex gap-1 cursor-pointer text-highlights hover:text-orange-100 font-normal text-xs py-1 px-1 sm:px-2 rounded items-center leading-7 w-14 md:w-auto sm:w-20 m-1"
        >
          <svg
            class="text-img"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.73033 5.48626L7.90308 4.83938C7.91358 4.73962 7.92258 4.62301 7.92258 4.49963C7.92258 4.37625 7.91395 4.25964 7.90308 4.15988L8.73108 3.51264C8.88484 3.39114 8.92683 3.17551 8.82896 2.99589L7.9687 1.5075C7.87682 1.33951 7.67545 1.25325 7.47108 1.32862L6.49495 1.72049C6.30783 1.58549 6.1117 1.4715 5.90883 1.38038L5.76033 0.345006C5.73595 0.1485 5.56495 0 5.36283 0H3.63784C3.43571 0 3.2651 0.1485 3.24109 0.342L3.09222 1.38113C2.89571 1.46964 2.7026 1.58214 2.50722 1.72125L1.52847 1.32826C1.34507 1.25738 1.1257 1.33687 1.03457 1.50412L0.173211 2.99438C0.0715922 3.16614 0.113586 3.38926 0.270717 3.51376L1.09796 4.16064C1.08483 4.28701 1.07847 4.39689 1.07847 4.50002C1.07847 4.60315 1.08485 4.71301 1.09796 4.83977L0.269961 5.48701C0.116205 5.60888 0.0745805 5.82451 0.172455 6.00376L1.03271 7.49213C1.12459 7.65976 1.32409 7.74675 1.53033 7.67101L2.50646 7.27914C2.69321 7.41377 2.88933 7.52776 3.09222 7.61926L3.24072 8.65426C3.26508 8.8515 3.43571 9 3.63821 9H5.3632C5.56533 9 5.73633 8.8515 5.76033 8.658L5.9092 7.61926C6.1057 7.53038 6.29845 7.41825 6.4942 7.27875L7.47295 7.67174C7.5202 7.69011 7.56933 7.6995 7.61995 7.6995C7.76545 7.6995 7.89932 7.61999 7.96682 7.49624L8.83082 5.99999C8.92683 5.82449 8.88482 5.60888 8.73033 5.48626ZM4.50033 5.99999C3.67308 5.99999 3.00034 5.32724 3.00034 4.5C3.00034 3.67276 3.67308 3.00001 4.50033 3.00001C5.32757 3.00001 6.00032 3.67276 6.00032 4.5C6.00032 5.32724 5.32757 5.99999 4.50033 5.99999Z"
              fill="#FCEDCA"
            ></path>
          </svg>
          <span>Account</span>
        </button>
        <a
          @click="logout"
          class="hidden md:flex gap-1 cursor-pointer text-highlights hover:text-orange-100 font-normal text-xs py-1 px-1 sm:px-2 rounded items-center leading-7 w-14 md:w-auto sm:w-20 m-1"
        >
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.89798 9.06113C4.88265 9.02033 4.87737 8.98564 4.88257 8.95758C4.88774 8.9297 4.86992 8.9066 4.82904 8.8888C4.78816 8.871 4.76776 8.85687 4.76776 8.84679C4.76776 8.83661 4.73847 8.82891 4.67974 8.82387C4.62103 8.81876 4.59173 8.81615 4.59173 8.81615H4.49229H4.40812H2.20403C1.86731 8.81615 1.57902 8.69636 1.33919 8.4564C1.09942 8.2166 0.979543 7.92839 0.979543 7.59172V2.20392C0.979543 1.8672 1.09939 1.57901 1.33919 1.33922C1.57902 1.09939 1.86731 0.979436 2.20403 0.979436H4.65298C4.71933 0.979436 4.77149 0.962977 4.80985 0.929739C4.84805 0.896581 4.87351 0.846804 4.88632 0.780487C4.89908 0.714171 4.90678 0.654288 4.90935 0.600705C4.91187 0.547175 4.91064 0.479518 4.90549 0.397897C4.90042 0.316301 4.89788 0.265291 4.89788 0.244785C4.89788 0.178469 4.87362 0.121186 4.82518 0.0726153C4.77669 0.0242587 4.71933 0 4.65301 0H2.20403C1.59695 0 1.07778 0.215567 0.646622 0.646676C0.215568 1.07778 0 1.59687 0 2.20401V7.59169C0 8.19878 0.215568 8.71799 0.646622 9.14894C1.07778 9.58026 1.59695 9.79583 2.20403 9.79583H4.65309C4.71943 9.79583 4.77162 9.77916 4.80996 9.74613C4.84815 9.71292 4.87362 9.6632 4.88643 9.5968C4.89919 9.53057 4.90688 9.47039 4.90946 9.41702C4.91198 9.36344 4.91074 9.29591 4.9056 9.21429C4.90048 9.13259 4.89798 9.08161 4.89798 9.06113Z"
              fill="#FCEDCA"
            ></path>
            <path
              d="M11.8546 4.5535L7.69134 0.390142C7.59447 0.293322 7.47963 0.244751 7.34697 0.244751C7.21432 0.244751 7.09948 0.293322 7.0025 0.390142C6.90555 0.487097 6.85711 0.602011 6.85711 0.734589V2.93867H3.42856C3.29582 2.93867 3.18107 2.98725 3.08411 3.08407C2.98716 3.18102 2.93872 3.29585 2.93872 3.42851V6.36733C2.93872 6.49996 2.98716 6.6148 3.08411 6.7117C3.18117 6.80846 3.2959 6.85717 3.42856 6.85717H6.85714V9.06123C6.85714 9.19378 6.90557 9.30872 7.00253 9.40559C7.09948 9.50255 7.21431 9.55109 7.347 9.55109C7.47963 9.55109 7.59447 9.50255 7.69137 9.40559L11.8546 5.24242C11.9515 5.14539 12 5.03071 12 4.89803C12 4.7654 11.9515 4.65046 11.8546 4.5535Z"
              fill="#FCEDCA"
            ></path>
          </svg>
          <span>Logout</span>
        </a>

        <div
          v-show="showMenu"
          :class="{ hidden: !showMenu, block: showMenu }"
          class="z-[60] absolute right-4 mt-4 md:mt-10 w-40 text-base font-cera-round-pro list-none rounded divide-y divide-sky-900 shadow --dark:bg-gray-700"
        >
          <div class="poligonSearch">
            <img class="m-auto" src="/src/assets/svg/arrow-top.svg" />
          </div>
          <div
            class="bg-white rounded divide-y divide-sky-900 shadow --dark:bg-gray-700"
          >
            <ul
              class="py-1 divide-y divide-slate-300"
              aria-labelledby="dropdownBottomButton"
            >
              <li>
                <router-link
                  to="/open-bets"
                  @click="showMenu = false"
                  class="block py-1 px-4 text-sm text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                >
                  Open Bets</router-link
                >
              </li>
              <li>
                <router-link
                  to="/my-bets"
                  @click="showMenu = false"
                  class="block py-1 px-4 text-sm text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                >
                  My Bets</router-link
                >
              </li>
              <li>
                <router-link
                  to="/profitloss"
                  @click="showMenu = false"
                  class="block py-2 px-4 text-sm text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                >
                  Betting P&L</router-link
                >
              </li>
              <li>
                <router-link
                  to="/account-cash-statement"
                  @click="showMenu = false"
                  class="block py-2 px-4 text-sm text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                >
                  Transfer Statement</router-link
                >
              </li>
              <li>
                <router-link
                  to="/change-password"
                  @click="showMenu = false"
                  class="block py-2 px-4 text-sm text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                >
                  Change Password</router-link
                >
              </li>
              <li>
                <router-link
                  to="/rule-regulations"
                  @click="showMenu = false"
                  class="block py-2 px-4 text-sm text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                >
                  Rule & Regulations</router-link
                >
              </li>
              <li
                v-if="
                  $store.getters['configModule/domainSettings']?.showDepositW
                "
              >
                <router-link
                  to="/depositw"
                  @click="showMenu = false"
                  class="block py-2 px-4 text-sm text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                >
                  Deposit</router-link
                >
              </li>
              <li
                v-if="
                  $store.getters['configModule/domainSettings']?.showDepositW
                "
              >
                <router-link
                  to="/withdrawal"
                  @click="showMenu = false"
                  class="block py-2 px-4 text-sm text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                >
                  Withdrawal</router-link
                >
              </li>
              <li
                v-if="
                  $store.getters['configModule/domainSettings']?.showDWRequests
                "
              >
                <router-link
                  to="/dwrequests"
                  @click="showMenu = false"
                  class="block py-2 px-4 text-sm text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                >
                  DW Requests</router-link
                >
              </li>
              <li>
                <a
                  @click="openStackModal"
                  class="block py-2 px-4 text-sm text-new-sky cursor-pointer hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                  >Set Settings</a
                >
              </li>
              <!-- <li>
                <a
                  @click="logout"
                  class="block py-2 px-4 text-md text-new-sky hover:bg-gray-300 --dark:hover:bg-gray-600 --dark:text-gray-200 --dark:hover:text-white"
                  >Logout</a
                >
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </template>

    <div
      v-show="showMenu"
      @click="showMenu = false"
      class="w-full h-screen overlay-box fixed top-0 left-0 bg-slate-500 z-[11] opacity-70"
    ></div>
  </header>

  <header
    v-if="$store.getters['moduleMain/getfilterbox']"
    class="w-full bg-primary fixed md:relative z-50 py-3 px-4 xs:px-1"
  >
    <div class="flex w-full justify-between">
      <i class="ui-icon theme-arrow-left pt-2" @click="showSearchBox"></i>
      <input
        class="bg-transparent border-none outline-none text-white"
        v-model="searchText"
        placeholder="Search Events ..."
        autofocus
      />
      <button
        class="text-white text-sm py-1 px-2 float-right rounded items-center leading-4 m-1"
      >
        <p class="block w-full font-cera-round-pro text-xs">
          <i class="ui-icon theme-search"></i>
        </p>
      </button>
    </div>
  </header>
</template>

<script>
  import Logo from "../Logo.vue";
  import OpenBets from "@/views/pages/markets/child-cmp/betts/open-bets/OpenBets.vue";

  export default {
    components: {
      Logo,
      OpenBets,
    },
    mixins: [],
    data() {
      return {
        arrays: [],

        logined: false,
        showOpenBetDialog: false,
        openBetData: [],
        showMenu: false,
        interval: null,
        time: null,
        searchText: "",
        searchTextMd: "",
        searchList: [],
      };
    },
    methods: {
      refreshBalanceData() {
        if (localStorage.getItem("accessToken")) {
          this.$store
            .dispatch("moduleMain/getUserOpenBets")
            .then(() => {
              this.openBetData = this.$store.getters["moduleMain/getOpenBets"];
            })
            .catch();
        }
      },

      isAuthenticate() {
        if (this.$store.getters["authModule/userinfo"]) this.logined = true;
        else this.logined = false;
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
        this.showMenu = false;

        this.$router.push("/auth/login");
      },

      toggleMenu() {
        this.showMenu = !this.showMenu;
      },

      toggleMenuInMobile() {
        this.emitter.emit("show-right-menu", true);
      },

      openStackModal() {
        this.showMenu = false;

        this.emitter.emit("show-modal-changed-stack-edit", true);
      },

      openExposureModal() {
        this.showMenu = false;

        this.emitter.emit("show-modal-exposure", true);
      },

      showSearchBox() {
        this.searchText = "";
        this.$store
          .dispatch("moduleMain/updatefilterbox")
          .then(() => {})
          .catch();
      },

      setTextOfSearch() {
        this.$store
          .dispatch("moduleMain/updateSearchText", this.searchText)
          .then(() => {})
          .catch();
      },

      searchEventByName() {
        const data = this.$store.getters["moduleMain/getEventByTitle"](
          this.searchTextMd
        );

        this.searchList = data == null ? [] : data;
      },
    },
    mounted() {
      this.emitter.on("logout", () => {
        this.logout();
      });
    },
    created() {
      this.isAuthenticate();

      this.interval = setInterval(() => {
        this.time = Intl.DateTimeFormat(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format();
      }, 1000);
    },
    computed: {
      fontSizeUserName() {
        let fontsize = 100;
        let uNameLen =
          this.$store.getters["authModule/userinfo"]?.username.length;

        switch (true) {
          case uNameLen < 10:
            return fontsize + "%";
          case uNameLen < 13:
            return fontsize - 10 + "%";
          case uNameLen < 16:
            return fontsize - 20 + "%";
          case uNameLen < 20:
            return fontsize - 30 + "%";
          case uNameLen < 25:
            return fontsize - 40 + "%";
          case uNameLen < 30:
            return fontsize - 50 + "%";
          case uNameLen < 40:
            return fontsize - 60 + "%";
          case uNameLen < 60:
            return fontsize - 80 + "%";
          default:
            return fontsize + "%";
        }
      },

      getExposure() {
        return localStorage.getItem("exposure");
      },

      getBalance() {
        return localStorage.getItem("balance");
      },

      showSupport() {
        return this.$store.getters["configModule/domainSettings"]
          ?.showSupportLink;
      },

      showSignup() {
        return this.$store.getters["configModule/domainSettings"]?.allowSignUp;
      },

      paddingTop() {
        return this.logined == true ? "3px" : "6px";
      },

      openBetsData() {
        if (
          this.$store.getters["moduleMain/getOpenBets"] &&
          this.$store.getters["moduleMain/getOpenBets"].openBets
        )
          return this.$store.getters["moduleMain/getOpenBets"]?.openBets;
        else return [];
      },
    },

    beforeUnmount() {
      clearInterval(this.interval);
    },

    watch: {
      "$store.state.authModule.userinfo"() {
        this.isAuthenticate();
      },

      "$store.state.moduleMain.openbets"() {
        // this.getExposure();
        // this.getBalance();
      },
      searchText() {
        this.setTextOfSearch();
      },
      searchTextMd() {
        this.searchEventByName();
      },
    },
  };
</script>
<style lang="scss" scoped>
  .menu-top-white::before {
    color: rgb(211, 211, 211);
    padding-top: 8px;
  }

  .ui-icon.theme-search,
  .theme-arrow-left {
    font-size: small;
  }

  i.ui-icon.theme-search:before,
  i.ui-icon.theme-arrow-left:before,
  i.ui-icon.theme-username:before {
    color: rgb(192, 192, 192);
  }

  .xs-placeholder::placeholder {
    font-size: small;
  }

  .search-md {
    .headerDesktop-content__search {
      margin-top: -35px;
    }
    .search-event__img {
      position: relative;
      z-index: 3;
      top: 43px;
      left: 9px;
    }
    .form-row {
      position: relative;
      margin-top: 17px;
    }
    .form-submit,
    .form-textbox {
      width: 100%;
      max-width: 215px;
      padding: 5px 5px 5px 30px;
      outline: none;
      border: 0;
    }
    .form-label {
      position: absolute;
      font-size: 10px;
      top: 9px;
      left: 35px;
      color: #999;
      cursor: text;
      transition: all 0.15s ease-in-out 0s;
    }
    .form-textbox:focus ~ .form-label,
    .form-textbox:valid ~ .form-label {
      top: -1.5em;
      left: 0;
      font-size: 0.8em;
      color: inherit;
      cursor: pointer;
      color: #fff;
      border: 0;
    }

    .theme-search {
      position: relative;
      z-index: 3;
      top: 48px;
      left: 5px;
    }
    /******************** */
    .poligonSearch {
      padding: 0 0 0 25px;
    }
    .poligon {
      padding: 0 0 0 25px;
    }
    .poligon {
      margin-bottom: -6px;
    }
    .searchList {
      height: auto;
      width: 100%;

      z-index: 2;
      margin-top: 0;
      background: #fff;
      border: 1px solid #d5d6d8;
      border-radius: 5px;
      min-width: 300px;
      max-width: 350px;
      max-height: 500px;
      overflow-y: auto;
    }
    .searchList {
      height: 100%;
      position: relative;
      box-shadow: 0 4px 30px rgba(7, 26, 82, 0.14);
    }
    .searchList-text {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      display: flex;
      justify-content: space-between;
      color: #000;
      padding: 12px 12px 11px 6px;
      cursor: pointer;
    }

    #form-search {
      background: white;
      color: black;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 3px;
    }
  }
</style>
