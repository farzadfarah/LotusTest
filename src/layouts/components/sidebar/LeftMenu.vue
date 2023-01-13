<template>
  <aside
    class="w-56 max-w-[14rem] overflow-x-auto md:ml-0 lg:ml-16 bg-white min-h-screen text-sm"
    aria-label="Sidebar"
  >
    <div class="bg-white border border-gray-200">
      <ul v-if="level == 0" class="nano-content">
        <li class="sub-menu border-b">
          <router-link
            :to="'/favorites'"
            class="sidebar-sport-tag cursor-pointer flex items-center justify-center"
          >
            <Fa :icon="faStar" class="float-left inline-block mt-1 mr-1" />
            <span class>Favorites</span>
          </router-link>
        </li>
        <li class="sub-menu border-b">
          <router-link
            :to="'/inplay'"
            class="sidebar-sport-tag cursor-pointer flex items-center justify-center"
          >
            <i class="ui-icon ui-icon-size-lg theme-live"></i>
            <span class>In Play</span>
          </router-link>
        </li>
        <li
          class="sub-menu border-b"
          v-if="$store.getters['configModule/domainSettings']?.cricket"
        >
          <a
            @click="getDataByFilter(3)"
            class="sidebar-sport-tag cursor-pointer"
          >
            <i
              class="ui-icon ui-icon-size-lg sports-icon"
              :class="setIconBySportId(1)"
            ></i>
            <span class>Cricket</span>
          </a>
        </li>
        <li
          class="sub-menu border-b"
          v-if="$store.getters['configModule/domainSettings']?.football"
        >
          <a
            @click="getDataByFilter(1)"
            class="sidebar-sport-tag cursor-pointer"
          >
            <i
              class="ui-icon ui-icon-size-lg sports-icon"
              :class="setIconBySportId(2)"
            ></i>
            <span class>Football</span>
          </a>
        </li>
        <li
          class="sub-menu border-b"
          v-if="$store.getters['configModule/domainSettings']?.tennis"
        >
          <a
            @click="getDataByFilter(2)"
            class="sidebar-sport-tag cursor-pointer"
          >
            <i
              class="ui-icon ui-icon-size-lg sports-icon"
              :class="setIconBySportId(3)"
            ></i>
            <span class>Tennis</span>
          </a>
        </li>
        <li
          class="sub-menu border-b"
          v-if="$store.getters['configModule/domainSettings']?.kabaddi"
        >
          <a
            @click="getDataByFilter(27)"
            class="sidebar-sport-tag cursor-pointer"
          >
            <i class="d-icon icon-66 mr-1"></i>
            <span class>Kabaddi</span>
          </a>
        </li>
        <li v-if="$store.getters['configModule/domainSettings']?.casino">
          <a @click="gotoCasino" class="sidebar-sport-tag cursor-pointer">
            <i
              class="ui-icon ui-icon-size-lg sports-icon1 theme-livecasinoblackjack"
            ></i>
            <span class>Casino</span>
          </a>
        </li>
      </ul>

      <ul class="w-full text-sm events-ul" v-if="level != 0">
        <li class="border-b py-2 px-2 w-full">
          <a @click="level = 0" class="w-full cursor-pointer">
            <i class="ui-icon theme-home2"></i> Sports
          </a>
        </li>
        <li
          class="border-b py-2 px-2 text-white"
          :class="
            selectedId == 3
              ? 'bg-cricket'
              : selectedId == 2
              ? 'bg-tennis'
              : 'bg-black'
          "
        >
          <a>
            <i
              :class="spoertSportIco(selectedId)"
              class="ui-icon ui-icon-size-lg sports-icon selected"
            ></i>
            {{ selectedName }}
          </a>
        </li>
        <li
          :class="'text-' + getSportTxtColor()"
          class="border-b py-2 px-2 text-xs"
          v-for="item in dataForShow"
          :key="item"
        >
          <router-link
            :to="'/Markets/' + item.id"
            class="flex w-full justify-between"
          >
            <span>{{ item.title }}</span>
            <i class="ui-icon theme-right" :class="'arrow-r-' + selectedId"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import Fa from "vue-fa";
  import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        show: this.openMenu,

        // ul/li
        dataObj: [],
        spors: [],
        toggleId: 0,
        searchVal: "",
        typing: false,
        dataForShow: [],
        level: 0,
        selectedName: null,
        selectedId: 0,
        faStar,
        sportTxtColor: "text-red-700",
      };
    },
    methods: {
      getDataByFilter(idSport) {
        this.dataForShow = [];
        if (this.dataObj.length > 0) {
          let filteredData = [];
          filteredData = this.dataObj.filter((sport) => sport.id == idSport);

          if (filteredData.length > 0) {
            this.selectedName = filteredData[0].displayName;
            this.selectedId = filteredData[0].id;
            filteredData[0].events.map((evt) => {
              this.dataForShow.push(evt);
            });

            this.level = 1;
          } else {
            this.level = 0;
          }
        } else {
          this.level = 0;
        }
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
      spoertSportIco(id) {
        switch (id) {
          case 1:
            return "sports-4";
          case 2:
            return "sports-5";
          case 3:
            return "sports-22";
          default:
            break;
        }
      },
      gotoCasino() {
        this.show = false;
        this.$router.push("/casino");
      },
      getSportTxtColor() {
        if (this.selectedId == 2) return "tennis";
        else if (this.selectedId == 3) return "cricket";
        else return "black";
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
          this.emitter.emit("show-sidebar-menu-mobile", false);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .nano-content {
    list-style-type: none !important;
  }

  .nano-content li :hover {
    background-color: rgb(212, 212, 212);
    font-size: 1rem;

    .ui-icon,
    .theme-live {
      font-size: 1rem;
    }
  }

  @media screen and (max-height: 450px) {
    .berger-menu {
      padding-top: 15px;
    }

    .berger-menu a {
      font-size: 12px;
    }
  }

  .sidebar-sport-tag {
    padding: 20px 17px 20px 17px !important;
    display: block;

    .font-size-large {
      font-size: medium !important;
    }
  }

  .ui-icon.event-ui-icon {
    padding: 0.2rem;
  }

  i.ui-icon,
  .theme-live {
    padding: 0.2rem;
    font-size: 0.8rem;
    height: 1.25rem;
  }

  .sports-22::before,
  .arrow-r-3::before {
    color: #8c1000;
  }

  .sports-4::before,
  .arrow-r-1::before {
    color: #000;
  }

  .sports-5::before,
  .arrow-r-2::before {
    color: #80d237;
  }

  .ui-icon.theme-right.text-red-700 {
    font-size: 0.5rem;
  }

  .ui-icon.theme-right.text-red-700::before {
    color: brown;
  }

  .ui-icon.selected::before {
    color: white;
  }
</style>
