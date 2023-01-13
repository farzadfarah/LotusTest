<!-- @format -->

<template>
  <div class="block relative w-full font-cera-round-pro text-new-sky">
    <div class>
      <div class="block py-1">
        <div class="flex justify-between">
          <h5 class="text-new-sky text-sm leading-6 font-medium flex">
            <span class="ml-1 inline-block text-new-sky font-medium">{{
              marketName
            }}</span>
            <span v-if="hasData()" class="text-xs leading-6 text-new-sky">
              <span class="ml-2 space-x-1">(</span>
              <span v-if="maxmin.min && maxmin.min != 0"
                >Min: {{ maxmin.min }}</span
              >
              <span
                v-if="
                  maxmin.min && maxmin.min != 0 && maxmin.max && maxmin.max != 0
                "
                class="space-x-1"
              ></span>
              <span v-if="maxmin.max && maxmin.max != 0"
                >Max: {{ maxmin.max }}</span
              >
              <span class="space-x-1">)</span>
            </span>
          </h5>
          <span class="flex min-w-[124px] mr-1 pt-2">
            <span class="text-xs text-center justify-center min-w-[62px]"
              >BACK</span
            >
            <span class="text-xs text-center justify-center min-w-[62px]"
              >LAY</span
            >
          </span>
        </div>
        <div>
          <div class="px-0 py-0 mt-2">
            <bets
              :bets="betList"
              :allEqual="hasData()"
              @change-all-baet-slip-status2="ChangeAllBaetSlipStatus"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineAsyncComponent } from "vue";
  //import Bets from "../Bets/Bets.vue";
  export default {
    name: "toss-market",
    components: {
      Bets: defineAsyncComponent(() => import("../Bets/Bets.vue")),
    },
    emits: ["ChangeAllBaetSlipStatus3"],
    props: {
      betList: {
        type: Array,
        required: true,
      },
      maxmin: {
        type: Object,
        default: () => {},
      },
      marketName: {
        type: String,
        default: "",
      },
    },
    data() {
      return {};
    },
    methods: {
      ChangeAllBaetSlipStatus({ status, betId, betType, id, marketId }) {
        this.$emit("ChangeAllBaetSlipStatus3", {
          status: status,
          betId: betId,
          betType: betType,
          id,
          marketId,
        });
      },

      hasData() {
        if (this.maxmin?.max != null) {
          if (this.maxmin?.max == 0 && this.maxmin?.min == 0) return false;
          else return true;
        }
        return false;
      },
    },
  };
</script>

<style></style>
