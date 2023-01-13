<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <nav id="column_left">
        <ul class="nav nav-list">
          <!-- <li v-for="(item, index) in menu" :key="index"> -->
          <menu-item-vue
            v-for="(item, index) in menu"
            :key="index"
            :MenuItem="item"
          >
            <ul
              v-if="item.submenu.length > 0"
              class="nav nav-list collapse"
              :id="'submenu' + { index }"
            ></ul>
          </menu-item-vue>
          <!-- <ul
              v-if="item.submenu.length > 0"
              class="nav nav-list collapse"
              :id="'submenu1' + { index }"
            >
             <li>
                <a
                  class="accordion-heading"
                  data-toggle="collapse"
                  data-target="#submenu2"
                  >Sub Menu Link
                  <span class="float-right">
                    <font-awesome-icon icon="angle-down" /> </span
                ></a>
                <ul class="nav nav-list collapse" id="submenu2">
                  <li><a href="#" title="Title">Sub Sub Menu Link</a></li>
                  <li><a href="#" title="Title">Sub Sub Menu Link</a></li>
                  <a
                    class="accordion-heading"
                    data-toggle="collapse"
                    data-target="#submenu2"
                    >Sub Menu Link
                    <span class="float-right"
                      ><font-awesome-icon icon="angle-down"/></span
                  ></a>
                </ul>
              </li>
            </ul> -->
          <!-- </li> -->
          <!-- <li>
            <a
              class="accordion-heading"
              data-toggle="collapse"
              data-target="#submenu1"
            >
              <span class="nav-header-primary"
                >Menu Link
                <span class="float-right"
                  ><font-awesome-icon icon="angle-down"/></span
              ></span>
            </a>

            <ul class="nav nav-list collapse" id="submenu1">
              <li>
                <a
                  class="accordion-heading"
                  data-toggle="collapse"
                  data-target="#submenu2"
                  >Sub Menu Link
                  <span class="float-right">
                    <font-awesome-icon icon="angle-down" /> </span
                ></a>
                <ul class="nav nav-list collapse" id="submenu2">
                  <li><a href="#" title="Title">Sub Sub Menu Link</a></li>
                  <li><a href="#" title="Title">Sub Sub Menu Link</a></li>
                  <a
                    class="accordion-heading"
                    data-toggle="collapse"
                    data-target="#submenu2"
                    >Sub Menu Link
                    <span class="float-right"
                      ><font-awesome-icon icon="angle-down"/></span
                  ></a>
                </ul>
              </li>
            </ul>
          </li> -->
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import MenuItemVue from "./MenuItem.vue";

export default {
  components: { MenuItemVue },
  data() {
    return {
      menu: [
        {
          id: 0,
          text: "football",
          url: "",
          submenu: [
            {
              id: 1,
              text: "lig1",
              url: "",
              submenu: [
                {
                  id: 2,
                  text: "game1",
                  url: "",
                  submenu: [],
                },
                {
                  id: 3,
                  text: "game2",
                  url: "",
                  submenu: [],
                },
              ],
            },
            {
              id: 4,
              text: "lig2",
              url: "",
              submenu: [
                {
                  id: 5,
                  text: "game3",
                  url: "",
                  submenu: [],
                },
              ],
            },
          ],
        },
        {
          id: 6,
          text: "tenis",
          url: "",
          submenu: [
            {
              id: 7,
              text: "lig 3",
              url: "",
              submenu: [
                {
                  id: 7,
                  text: "game4",
                  url: "",
                  submenu: [],
                },
              ],
            },
          ],
        },
        {
          id: 8,
          text: "ccccc",
          url: "",
          submenu: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
.list-group-item-game {
  color: var(--primary-color);
}
.list-group-item-game:hover {
  color: var(--success-color);
}
.list-group {
  border-radius: 0;
}
.list-group-item {
  padding: 0.4rem 0.35rem;
}
#column_left {
  background-color: #515151;
}

.nav-list li {
  width: 100%;
}

.nav-list li a {
  text-decoration: none;
  display: block;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #515151 !important;
  color: #9d9d9d;
}

.nav-list > li > a {
  color: #c4c4c4;
  font-size: 14px;
  padding-left: 13px !important;
  border-bottom: 1px solid #585858;
}

.nav-list > li > a:hover {
  background-color: #444444;
}
</style>
