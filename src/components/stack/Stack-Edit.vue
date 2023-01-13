<template>
  <modal
    v-if="showModal"
    name="show-modal-changed-stack-edit"
    :modal-size="'small'"
  >
    <template v-slot:header>Set Button Value</template>
    <template v-slot:close
      ><a
        class="close"
        data-dismiss="modal"
        @click="emitter.emit('show-modal-changed-stack-edit', false)"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </a></template
    >
    <template v-slot:default><stack :stackObj="stackData"></stack></template>
    <template v-slot:footer>
      <button
        @click="saveStacks"
        @on-stack-change="stackchange"
        class="press-effect-mini px-4 py-2 text-white bg-primary font-medium text-sm hover:bg-secondary rounded-md"
        type="button"
      >
        Ok
      </button>
    </template>
  </modal>
</template>

<script>
  import Modal from "../../layouts/components/modal/Modal.vue";
  import store from "../../store/store";
  import Stack from "./Stack.vue";
  export default {
    components: { Stack, Modal },
    data() {
      return {
        showModal: false,
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

        //store.commit("configModule/SET_BETSLIP_DATA", dd);

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
    mounted() {
      this.emitter.on("show-modal-changed-stack-edit", (result) => {
        if (result) {
          this.showModal = result;
        } else {
          this.showModal = false;
        }
      });
    },
    unmounted() {
      this.emitter.emit("show-modal-changed-stack-edit", false);
    },
  };
</script>

<style></style>
