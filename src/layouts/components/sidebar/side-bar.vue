<template>
  <div class="sidebar0">
    <!-- <collapse /> -->
    <div class="filter-of-sidebar" style="margin: 0 0 15px 0px">
      <div>
        <!-- <label style="padding: 5px; color: #939393;">Search</label> -->

        <input
          v-model="searchVal"
          type="text"
          class="search-input"
          placeholder="Search"
        />

        <i
          v-if="searchVal != '' && searchVal != null"
          @click="searchVal = ''"
          class="ui-icon ui-icon-size-lg theme-close"
          style="
            float: right;
            margin-top: -44px;
            margin-right: 5px;
            color: rgb(211 211 211);
          "
        ></i>

        <i
          v-if="searchVal == '' || searchVal == null"
          style="
            float: right;
            margin-top: -45px;
            margin-right: 5px;
            color: rgb(211 211 211);
          "
          class="ui-icon ui-icon-size-lg theme-search"
        ></i>
      </div>
    </div>

    <div
      v-if="dataForShow.length == 0 && dataObj.length != 0"
      class="filter-of-sidebar"
      style="margin: 20px"
    >
      <div>
        <p>Not Found.</p>
      </div>
    </div>

    <aside class="sidebar">
      <div id="accordion" class="nano">
        <ul class="nano-content">
          <li
            class="sub-menu"
            v-for="item in dataForShow"
            :key="item.id"
            :class="['active' ?? toggleId == item.id]"
          >
            <a @click="toggle(item.id)" class="sidebar-sport-tag">
              <i
                class="ui-icon ui-icon-size-lg sports-icon"
                :class="setIconBySportId(item.id)"
              ></i>
              <!-- <svg
                class="sport-svg-icon icon"
                style="vertical-align: bottom;"
                :class="setIconBySportId(item.id)"
              >
                <use :xlink:href="'#' + setIconBySportId(item.id)"></use>
              </svg> -->
              <span class="font-size-large"
                >{{ item.displayName
                }}<span>({{ item.events.length }})</span></span
              >
              <font-awesome-icon
                class="arrow"
                :icon="toggleId == item.id ? 'angle-down' : 'angle-right'"
              ></font-awesome-icon>
            </a>
            <!-- <transition name="slide"> -->

            <ul v-show="toggleId == item.id" class="sidebar-game-list-events">
              <li v-for="game in item.events" :key="game.id">
                <router-link
                  :to="'/Markets/' + game.id"
                  @click="
                    emitter.emit('active-menu-prop-changed', game.sportName)
                  "
                  :key="game.id"
                >
                  <i
                    class="ui-icon ui-icon-size-lg sports-icon event-ui-icon"
                    :class="setIconBySportId(item.id)"
                    style="font-size: 0.8rem"
                  ></i>
                  <!-- <svg
                      class="game-svg-icon icon"
                      :class="setIconBySportId(item.id)"
                    >
                      <use :xlink:href="'#' + setIconBySportId(item.id)"></use>
                    </svg> -->
                  <!-- <font-awesome-icon
                      :icon="setIconBySportId(item.id)"
                    ></font-awesome-icon
                    > -->
                  {{ game.title }}</router-link
                >
              </li>
            </ul>
            <!-- </transition> -->
          </li>
        </ul>
      </div>
    </aside>
  </div>
  <svg
    aria-hidden="true"
    style="position: absolute; width: 0; height: 0; overflow: hidden"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol id="icon-soccer" viewBox="0 0 32 32">
        <path
          d="M28.789 10.153c-0.006-0.015-0.014-0.030-0.021-0.046l0.029 0.005-0.008 0.041zM25.25 22.217l-4.668 0.194-2.438-4.285 2.523-4.556 4.887 0.162 2.086 4.259-2.39 4.226zM12.708 18.065l-2.449-4.431 2.56-4.271 5.221-0.080 2.564 4.253-2.52 4.547-5.376-0.018zM12.816 9.29l-1.93-3.323 2.564-3.128 4.475-0.143 2.385 2.954-2.283 3.56-5.211 0.080zM10.374 22.249l-4.135-0.404-1.992-3.983 1.738-4.038 4.205-0.161 2.45 4.433-2.266 4.153zM24.811 6.159l0.396-0.787c1.5 1.301 2.717 2.912 3.561 4.735l-1.482-0.236-2.475-3.712zM20.385 5.625l-2.389-2.957c0.059-0.072 0.377-0.459 0.383-0.465-2.141-0.358-4.094-0.175-5.381 0.127 0.009 0.006 0.319 0.398 0.383 0.479l-2.565 3.128-3.825 0.644-0.341-1.043-0.059 0.018c2.494-2.248 5.786-3.629 9.409-3.629 3.498 0 6.689 1.283 9.15 3.395l-0.404 0.804-4.361-0.501zM4.639 10.222l-1.608 0.379 0.018 0.070 1.58-0.372 1.3 3.472-1.744 4.053c-0.236-0.023-2.061-0.198-2.061-0.087 0.32 2.685 1.339 5.021 3.094 7.206l1.030-3.023 4.128 0.403 2.607 3.956-1.8 2.931c-5.395-1.971-9.256-7.133-9.256-13.21 0-4.146 1.803-7.86 4.655-10.436l0.346 1.062-2.289 3.596zM17.859 26.435l2.146 3.005 0.061-0.043-2.133-2.983 2.65-3.93 4.664-0.193c0.094 0.211 1.289 2.898 1.281 2.898 1.967-2.303 2.955-4.611 3.312-7.242-0.004 0-1.914 0.008-2.139 0.010l-2.088-4.268 1.684-3.741 1.486 0.237 0.004-0.031c0.816 1.782 1.283 3.758 1.283 5.847 0 7.772-6.301 14.073-14.072 14.073-1.669 0-3.262-0.306-4.747-0.839l1.797-2.925 4.811 0.125zM11.234 29.267l-0.062-0.038 0.012-0.020c0.023 0.009 0.047 0.017 0.070 0.025l-0.020 0.033zM6.581 5.56l0.011-0.004c-0.004 0.003-0.007 0.006-0.009 0.008l-0.002-0.004zM25.164 5.295l0.064 0.032-0.021 0.045c-0.020-0.017-0.037-0.034-0.057-0.051l0.014-0.026z"
        ></path>
      </symbol>
      <symbol id="icon-sports_tennis" viewBox="0 0 24 24">
        <path
          d="M18 15q1.641 0 2.813 1.172t1.172 2.813-1.172 2.836-2.813 1.195-2.813-1.172-1.172-2.859q0-1.641 1.172-2.813t2.813-1.172zM18 17.016q-0.844 0-1.406 0.563-0.609 0.609-0.609 1.406t0.609 1.406 1.406 0.609q0.844 0 1.406-0.563 0.609-0.609 0.609-1.43t-0.609-1.43q-0.563-0.563-1.406-0.563zM10.313 11.672q1.172 1.172 3.164 0.867t3.586-1.898 1.898-3.586-0.867-3.164-3.141-0.844-3.563 1.922-1.922 3.563 0.844 3.141zM19.5 2.484q1.734 1.781 1.453 4.57t-2.484 4.992q-1.172 1.172-2.695 1.852t-2.789 0.68h-1.523t-0.797 0.023-0.867 0.117-0.773 0.234-0.82 0.398-0.703 0.586l-4.219 4.219-1.453-1.406 4.266-4.219q0.328-0.328 0.586-0.703t0.398-0.82 0.234-0.797 0.117-0.891 0.023-0.797v-1.523q0-1.219 0.68-2.742t1.852-2.695q2.203-2.203 4.992-2.531t4.523 1.453z"
        ></path>
      </symbol>
      <symbol id="icon-sports_cricket" viewBox="0 0 24 24">
        <path
          d="M15 5.484q0-1.453 1.031-2.461t2.484-1.008 2.461 1.008 1.008 2.461-1.008 2.484-2.461 1.031-2.484-1.031-1.031-2.484zM14.344 17.766l1.406-1.406 4.266 4.219-1.453 1.406zM15.047 12.797q0.281 0.281 0.281 0.703t-0.281 0.703l-2.813 2.859q-0.281 0.281-0.703 0.281t-0.703-0.281l-8.531-8.484q-0.281-0.281-0.281-0.703t0.281-0.703l2.859-2.859q0.281-0.281 0.703-0.281t0.703 0.281z"
        ></path>
      </symbol>
    </defs>
  </svg>
</template>

<script>
  //import Collapse from "@/components/collapse/Collapse.vue";

  export default {
    name: "side-bar",
    props: {},
    components: {
      //Collapse,
    },
    data() {
      return {
        dataObj: [],
        spors: [],
        toggleId: 0,
        //
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
      //getData() {
      //  this.dataObj = [];
      //  if (this.$store.getters["moduleMain/getAllEvents"].length > 0) {
      //    this.dataObj = this.$store.getters["moduleMain/getAllEvents"];
      //  }
      //},
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
        }
      },
    },
  };
</script>

<style scoped>
  @media (max-width: 1199px) {
    .filter-of-sidebar {
      display: none;
    }
  }

  .search-input {
    padding: 8px 10px;
    background-color: #293949;
    width: 100%;
    color: #fff;
    font-weight: 400;
    outline: none;
    height: 50px;
    border: none;
    border-radius: 5px;
    transition: all 0.5s ease;
    box-shadow: 0 0 2px 1px #1a212a;
  }
  input::placeholder {
    color: #818181;
  }

  .sport-svg-icon {
    width: 18px;
    height: 18px;
    fill: #f0f8ffa6;
    margin: auto 5px;
  }

  .game-svg-icon {
    width: 12px;
    height: 12px;
    fill: #f0f8ffa6;
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
    background: #293949;
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
    color: #f7f7f7;
  }
  .sidebar #accordion ul li.active ul {
    display: block;
  }

  .sidebar-sport-tag {
    padding: 18px 20px 18px 10px !important;
  }

  .sidebar #accordion ul li a {
    color: #aeb2b7;
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
    color: #f5d965;
    background-color: #dfc68594;
    font-weight: bold;
  }

  .sidebar #accordion ul ul li a:hover .event-ui-icon::before {
    color: #f9f6a8;
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
    color: #aeb2b7;
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
    color: #bda871;
  }
</style>
