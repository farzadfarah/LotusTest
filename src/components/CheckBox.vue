<template>
  <div
    class="CheckBox keep-data"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <input
      :name="name"
      :id="name"
      type="checkbox"
      :checked="inputValue"
      @input="handleChange"
      @blur="handleBlur"
    />
    <label :for="name">{{ label }}</label>

    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<script>
import { useField } from "vee-validate";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const {
      checkedValue: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>

<style lang="scss" scoped></style>
