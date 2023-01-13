<template>
  <div class="height-100vh d-xl-none">
    <button
      type="button"
      class="d-xl-none btn-menu-show-hide z-[11]"
      @click="emitter.emit('show-sidebar-menu-mobile', true)"
    >
      <i class="ui-icon theme-right sticky-left-menu"></i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-menu-show-hide {
  border: none;
  background: #163142;
  border-radius: 0 5px 5px 0;
  top: 230px;
  width: 20px;
  position: fixed;
  height: 80px;
  text-align: right;
  left: 0px;
  box-shadow: 0px 0px 2px 2px #71869366;
}

i.sticky-left-menu.ui-icon:before {
  font-size: 0.65em;
  display: inline-block;
  color: #eaeaea;
}

.btn-menu-show-hide:hover {
  background: #28536e;
}
</style>
