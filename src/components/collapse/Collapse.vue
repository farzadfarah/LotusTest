<template>
  <div class="sidebar">
    <div id="accordion">
      <collapse-card
        class="menu-lev-1"
        :accordionId="'accordion'"
        v-for="(item, index) in dataObj"
        :key="item.id"
        :code="item.id"
        :collapseId="item.id"
        :title="item.displayName"
        :collapsed="index == 0 ? true : false"
      >
        <!-- <div :id="'accordion_' + item.id">
          <collapse-card
            class="menu-lev-2"
            :accordionId="'accordion_' + item.id"
            v-for="(item2, index2) in item.events"
            :key="item2.ligaId"
            :code="'_' + item2.ligaId"
            :collapseId="'_' + item2.ligaId"
            :title="item2.liga"
            :collapsed="index2 == 0 ? true : false"
          > -->
        <ul class="list-group">
          <li
            v-for="(spData, i) in item.events"
            :key="i"
            class="list-group-item"
            v-cloak
          >
            <router-link
              v-cloak
              :to="'/Markets/' + spData.id"
              class="list-group-item-game"
              >{{ spData.title }}</router-link
            >
          </li>
        </ul>
        <!-- </collapse-card> 
        </div>-->
      </collapse-card>
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";
  //import CollapseCard from "./CollapseCard.vue";

  export default {
    components: {
      CollapseCard: defineAsyncComponent(() => import("./CollapseCard.vue")),
    },
    data() {
      return {
        dataObj: [],
        spors: [],
      };
    },
    methods: {
      getData() {
        this.dataObj = [];

        /*this.$store
        .dispatch("moduleMain/getSportWithEventTree", {})
        .then((response) => {
          this.dataObj = response.data.result;
        })
        .catch((err) => {
          console.log(err);
        });*/

        if (this.$store.getters["moduleMain/getAllEvents"].length > 0) {
          this.dataObj = this.$store.getters["moduleMain/getAllEvents"];
        }
      },
    },
    created() {
      this.getData();
    },
    watch: {
      "$store.state.moduleMain.events"() {
        this.getData();
      },
    },
  };
</script>

<style lang="scss" scoped>
  // .list-group-item-game {
  //   color: var(--primary-color);
  // }
  // .list-group-item-game:hover {
  //   color: var(--success-color);
  // }
  // .list-group {
  //   border-radius: 0;
  // }
  // .list-group-item {
  //   padding: 0.4rem 0.35rem;
  // }

  .sidebar {
    width: 240px;
    height: 100%;
    background: #293949;
    position: absolute;
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
    color: #1abc9c;
  }
  .sidebar #accordion ul li.active ul {
    display: block;
  }
  .sidebar #accordion ul li a {
    color: #aeb2b7;
    text-decoration: none;
    display: block;
    padding: 18px 25px 18px 0;
    font-size: 12px;
    outline: 0;
    -webkit-transition: all 200ms ease-in;
    -moz-transition: all 200ms ease-in;
    -o-transition: all 200ms ease-in;
    -ms-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
  }
  .sidebar #accordion ul li a:hover {
    color: #1abc9c;
  }
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
    padding-top: 13px;
    padding-bottom: 13px;
    color: #aeb2b7;
  }
</style>
