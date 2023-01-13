<template>
  <div :id="id" class="dropdown">
    <button
      @click="isOpen = !isOpen"
      :class="{ isActive: isOpen }"
      style="padding: 7px 5px"
    >
      <slot />
    </button>
    <div class="dropdown-list" v-if="isOpen">
      <Item
        v-for="(item, index) in arrays"
        :key="index"
        :item="item"
        :closeDropdown="callToClose"
      >
        <template v-slot:icon><span v-html="item.icon"></span></template>
        <template v-slot:default>{{ item.text }}</template>
      </Item>
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";
  //import Item from "./Item.vue";
  export default {
    name: "DropdownMenu",
    components: {
      Item: defineAsyncComponent(() => import("./Item.vue")),
    },
    data() {
      return {
        isOpen: false,
      };
    },
    created() {
      window.addEventListener("click", this.checkClickOn);
    },
    beforeUnmount() {
      window.removeEventListener("click", this.checkClickOn);
    },
    props: {
      arrays: {
        type: Array,
        default: () => [],
      },
      id: {
        type: String,
        required: true,
      },
    },
    methods: {
      callToClose() {
        this.isOpen = false;
      },
      checkClickOn(event) {
        if (!document.getElementById(this.id).contains(event.target)) {
          this.isOpen = false;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  button {
    position: relative;
    padding: 7px 10px;
    background-color: #bda871;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
    font-size: 0.8rem;
    &:focus {
      outline: 0px;
    }
    &:hover {
      background: #ebce84;
      color: #7c5a00;
    }
    &.isActive {
      background: #ebce84;
      color: #7c5a00;
    }
  }
  .dropdown {
    position: relative;
    width: fit-content;
    &-list {
      background: white;
      margin-top: 5px;
      position: absolute;
      z-index: 10;
      width: 100%;
      border: 1px solid black;
      border-radius: 4px;
      right: 0;
    }
  }

  /********************** */
  .dropdown-list {
    background-color: #495057;
    list-style: none;
    padding: 15px 10px;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 3px 23px rgb(0 0 0 / 23%);
    width: 195px;
  }
</style>
