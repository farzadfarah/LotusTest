<template>
  <transition name="modal">
    <div
      class="font-cera-round-pro overflow-x-hidden overflow-y-auto fixed inset-000 top-0 left-0 z-50 outline-none focus:outline-none justify-center items-start flex"
    >
      <div
        class="relative1 w-auto my-6 px-2 mx-auto max-w-sm fixed inset-000 top-0 left-0 right-0 z-50"
        @click="closeOnOutside"
        :class="modalSize"
      >
        <!--content-->
        <div
          @click.stop
          class="max-h-[80vh] overflow-hidden border-0 rounded-lg shadow-lg relative flex flex-col w-full custome-modal outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-2 border-b border-solid border-blueGray-200 rounded-t"
          >
            <h5 class="text-lg font-semibold">
              <slot name="header"></slot>
            </h5>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-new-gray float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="closeOnOutside"
            >
              <span
                class="bg-transparent text-new-gray h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                <i class="ui-icon theme-close text-new-gray"></i>
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto overflow-auto mb-3">
            <slot name="default"></slot>
          </div>
          <!--footer-->
          <div
            v-if="hasFooterSlot()"
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <div v-on:click="closeOnOutside" class="fixed inset-0 z-40 bg-[#14314373]"></div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    modalSize: { typr: String, default: "md:max-w-6xl" },
    name: { typr: String, default: "" },
  },
  mounted() { },
  methods: {
    closeOnOutside() {
      if (this.name) this.emitter.emit(this.name, false);
    },

    hasFooterSlot() {
      return this.$slots.footer;
    },
  },
};
</script>

<style scoped>
/*  */
.custome-modal {
  background-color: #ffffff;
  color: #2c4f58;
}

i.ui-icon.theme-close:before {
  color: #2c4f58;
}
</style>
