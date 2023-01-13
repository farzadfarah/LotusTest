<template>
  <div class="font-cera-pro">
    <p class="mb-3" v-if="!mobileStyle">Quick Stakes</p>
    <form class="w-full grid grid-cols-4 gap-1 text-center">
      <div>
        <input
          type="text"
          :class="
            mobileStyle == true ? 'border border-primary bg-transparent' : ''
          "
          class="input-stak"
          v-model="stack.stk1"
        />
      </div>
      <div class>
        <input
          type="text"
          :class="
            mobileStyle == true ? 'border border-primary bg-transparent' : ''
          "
          class="input-stak"
          v-model="stack.stk2"
        />
      </div>
      <div class>
        <input
          type="text"
          :class="
            mobileStyle == true ? 'border border-primary bg-transparent' : ''
          "
          class="input-stak"
          v-model="stack.stk3"
        />
      </div>
      <div class>
        <input
          type="text"
          :class="
            mobileStyle == true ? 'border border-primary bg-transparent' : ''
          "
          class="input-stak"
          v-model="stack.stk4"
        />
      </div>
      <div class>
        <input
          type="text"
          :class="
            mobileStyle == true ? 'border border-primary bg-transparent' : ''
          "
          class="input-stak"
          v-model="stack.stk5"
        />
      </div>
      <div class>
        <input
          type="text"
          :class="
            mobileStyle == true ? 'border border-primary bg-transparent' : ''
          "
          class="input-stak"
          v-model="stack.stk6"
        />
      </div>
      <div class>
        <input
          type="text"
          :class="
            mobileStyle == true ? 'border border-primary bg-transparent' : ''
          "
          class="input-stak"
          v-model="stack.stk7"
        />
      </div>
      <div class>
        <input
          type="text"
          :class="
            mobileStyle == true ? 'border border-primary bg-transparent' : ''
          "
          class="input-stak"
          v-model="stack.stk8"
        />
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      stackObj: {
        type: Object,
        default: () => ({}),
      },

      mobileStyle: {
        type: Boolean,
        default: () => false,
      },
    },
    data() {
      return {
        stack: this.stackObj,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
