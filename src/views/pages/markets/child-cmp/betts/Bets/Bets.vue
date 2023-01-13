<!-- @format -->

<template>
  <bet-item
    v-for="(bet, index) in bets"
    :key="index"
    :class="{
      'bet-item-first': index == 0 && bets.length != 1,
      'bet-item-last': index == bets.length - 1 && bets.length != 1,
      'bet-item-once': bets.length == 1,
    }"
    :betdata="bet"
    :allEqual="allEqual"
    @change-all-baet-slip-status="ChangeAllBaetSlipStatus"
  />
</template>

<script>
  import { defineAsyncComponent } from "vue";

  //import BetItem from "./BetItem.vue";
  export default {
    components: {
      BetItem: defineAsyncComponent(() => import("./BetItem.vue")),
    },
    emits: ["ChangeAllBaetSlipStatus2"],
    props: {
      bets: {
        type: Array,
        default: () => [],
      },
      allEqual: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      ChangeAllBaetSlipStatus({ status, betId, betType, id, marketId }) {
        this.$emit("ChangeAllBaetSlipStatus2", {
          status: status,
          betId: betId,
          betType: betType,
          id: id,
          marketId: marketId,
        });
      },
    },
  };
</script>

<style lang="scss">
  .bet-item-first {
    border-radius: 5px 5px 0px 0px;
  }

  .bet-item-last {
    border-radius: 0 0 5px 5px;
  }

  .bet-item-once {
    border-radius: 5px 5px 5px 5px;
  }

  .bet-item:last-child,
  .bet-item:last-of-type {
    border: none !important;
  }
</style>
