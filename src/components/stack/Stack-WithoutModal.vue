<template>
  <div class="bg-white p-2">
    <stack :stackObj="stackData" :mobileStyle="true"></stack>
    <div class="flex justify-between py-3 px-2">
      <slot name="btnCancel" />

      <button
        @click="saveStacks"
        @on-stack-change="stackchange"
        class="px-6 py-2 text-white bg-[#5c996f] font-medium text-xs rounded"
        type="button"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
  import store from "@/store/store";
  import Stack from "./Stack.vue";
  export default {
    components: { Stack },
    data() {
      return {
        stackData: {
          stk1: null,
          stk2: null,
          stk3: null,
          stk4: null,
          stk5: null,
          stk6: null,
          stk7: null,
          stk8: null,
          stkdefault: null,
        },
      };
    },
    methods: {
      saveStacks() {
        let dd = [
          { title: "a", value: this.stackData.stk1 },
          { title: "b", value: this.stackData.stk2 },
          { title: "c", value: this.stackData.stk3 },
          { title: "d", value: this.stackData.stk4 },
          { title: "e", value: this.stackData.stk5 },
          { title: "f", value: this.stackData.stk6 },
          { title: "g", value: this.stackData.stk7 },
          { title: "h", value: this.stackData.stk8 },
        ];

        store
          .dispatch("configModule/setUserBetSlip", dd)
          .then((response) => {
            this.toast.success(response.data.result);
            this.loadStacks();
            this.emitter.emit("show-modal-changed-stack-edit", false);
          })
          .catch((error) => {
            this.toast.error(error.data.error.message);
          });
      },

      loadStacks() {
        let rersult = this.$store.getters["configModule/BetSlipData"];
        if (rersult.length > 0) {
          rersult.forEach((el, index) => {
            this.stackData[`stk${index + 1}`] = el["value"];
          });
        }
      },
    },
    created() {
      this.loadStacks();
    },
    mounted() {},
    unmounted() {},
  };
</script>

<style></style>
