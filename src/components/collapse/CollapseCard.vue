<template>
  <div class="card">
    <div class="card-header" :id="'heading' + code">
      <h5 class="mb-0">
        <button
          class="btn btn-link w-100 menu-btn"
          :class="{ collapsed: collapsed != true }"
          data-toggle="collapse"
          :data-target="'#collapse' + collapseId"
          :aria-expanded="collapsed"
          :aria-controls="'collapse' + collapseId"
          @click="changeCollapsed"
        >
          {{ title }}
          <!-- <span v-if="collapsed" class="float-right"
            ><font-awesome-icon icon="angle-down"
          /></span>
          <span v-else class="float-right"
            ><font-awesome-icon icon="angle-up"
          /></span> -->
        </button>
      </h5>
    </div>

    <div
      :id="'collapse' + collapseId"
      class="collapse"
      :class="{ show: collapsed == true }"
      :aria-labelledby="'heading' + code"
      :data-parent="'#' + accordionId"
    >
      <div class="card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collapse-card",
  props: {
    title: { type: String, default: "" },
    accordionId: { type: String, default: "" },
    collapseId: { type: Number, default: 0 },
    code: { type: Number, default: 0 },
    collapsed: { type: Boolean, default: true },
  },
  data() {
    return {};
  },
  methods: {
    changeCollapsed() {
      this.$emit("changeCollapseStatus", this.collapsed);
    },
  },
};
</script>

<style lang="scss">
.card-body {
  padding: 0;
}
.card-header {
  padding: 0rem 0rem;
}
.btn-link {
  color: #f0f0f0;
  text-decoration: none;
  text-align: left;
}
.btn-link:hover {
  color: #fd923b;
  text-decoration: none;
}

.menu-lev-1 .card-header .menu-btn:not(.menu-lev-2 .card-header .menu-btn) {
  width: 100%;
  padding: 14px 22px;
  float: left;
  text-decoration: none;
  color: #f0f0f0;
  font-size: 13px;
  background: #414956;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  -o-transition: color 0.2s linear, background 0.2s linear;
  -moz-transition: color 0.2s linear, background 0.2s linear;
  -webkit-transition: color 0.2s linear, background 0.2s linear;
  transition: color 0.2s linear, background 0.2s linear;
}
.menu-lev-2 {
  background-color: transparent;
  border-radius: 0;
  // border-top: 1px solid #f0f0f0;
  // border-bottom: 1px solid #f0f0f0;
}
.card {
  border: none;
}
.card-header {
  // border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group:first {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item,
.menu-btn {
  width: 100%;
  float: left;
  font-size: 11px;
  background: #383838;
  border-top: none;
  position: relative;
  border-left: solid 6px transparent;
  -o-transition: border 0.2s linear;
  -moz-transition: border 0.2s linear;
  -webkit-transition: border 0.2s linear;
  transition: border 0.2s linear;
  border-radius: 0;
}
</style>
