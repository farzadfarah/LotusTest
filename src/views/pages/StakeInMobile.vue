<template>
  <div class="w-full p-3">
    <h3 class="text-lg font-semibold">Settings</h3>

    <div class>
      <p class="text-sm mt-3">Edit Stakes</p>

      <div class="mt-3">
        <stack :stackObj="stackData" :mobileStyle="true"></stack>
        <button
          @click="saveStacks"
          class="mt-4 px-10 py-2 bg-primary text-white font-medium text-sm rounded-sm float-right"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Stack from "@/components/stack/Stack.vue";
  export default {
    name: "StakeInMobile",
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
    props: {},
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

        //store.commit("configModule/SET_BETSLIP_DATA", dd);

        this.$store
          .dispatch("configModule/setUserBetSlip", dd)
          .then((response) => {
            this.toast.success(response.data.result);
            this.loadStacks();
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
    components: { Stack },
  };
</script>

<style lang="scss" scoped></style>
