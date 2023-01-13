<template>
  <li>
    <a
      v-if="MenuItem.submenu.length > 0"
      :class="{
        'accordion-heading': MenuItem.submenu.length > 0,
      }"
      :data-toggle="'collapse'"
      :data-target="'#submenu' + MenuItem.id"
    >
      <span class="nav-header-primary"
        >{{ MenuItem.text }}
        <span class="float-right"
          ><font-awesome-icon icon="angle-down"/></span></span
    ></a>
    <a v-else>{{ MenuItem.text }}</a>
    <ul
      v-if="MenuItem.submenu.length > 0"
      class="nav nav-list collapse"
      :id="'submenu' + MenuItem.id"
    >
      <template>
        <menu-item></menu-item>
      </template>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    MenuItem: {},
  },
  data() {
    return {};
  },
};
</script>

<style></style>
