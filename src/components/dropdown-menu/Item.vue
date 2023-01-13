<template>
  <div class="item" @click="doFunc" v-if="item.show">
    <slot name="icon"></slot>
    <span v-if="item.text != 'Bets'">&nbsp;</span>

    <span v-if="item.text == 'Bets'">
      <font-awesome-icon icon="exchange-alt" />&nbsp;
    </span>
    <slot name="default" />
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true,
    },
    closeDropdown: {
      type: Function,
      default: () => { },
    },
  },
  methods: {
    doFunc() {
      //console.log(this.item.link);
      if (this.item.link) this.$router.push(this.item.link);
      if (
        this.item.action &&
        this.item.action == "show-modal-changed-stack-edit"
      ) {
        this.emitter.emit("show-modal-changed-stack-edit", true);
      } else if (this.item.action && this.item.action == "logout") {
        this.emitter.emit("logout");
      }

      this.closeDropdown();
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: block;
  width: 100%;
  padding: 5px 10px;
  transition: 0.3s;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
}
/******************** */
.item {
  padding: 13px 15px !important;
  color: #fff !important;
  font-size: 13px !important;
  font-weight: 400 !important;
  /*display: grid;
  grid-template-columns: 17px auto;
  grid-column-gap: 10px;*/
  border-radius: 4px;
  vertical-align: baseline;
}
</style>
