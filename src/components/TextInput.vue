<template>
  <!-- <div class="TextInput input" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <i v-if="icon != ''" :class="icon"></i>
  <label :for="name">{{ label }}</label>-->
  <input
    :name="name"
    :id="name"
    :type="type"
    :value="inputValue"
    :placeholder="placeholder"
    @input="handleChange"
    @blur="handleBlur"
  />
  <!-- :autocomplete="autocomplete" -->

  <!-- <p class="help-message" v-show="errorMessage || meta.valid">{{ errorMessage || successMessage }}</p>
  </div>-->
</template>

<script>
  import { useField } from "vee-validate";

  export default {
    props: {
      type: {
        type: String,
        default: "text",
      },
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
      placeholder: {
        type: String,
        default: "",
      },
      icon: {
        type: String,
        default: "",
      },
      autocomplete: {
        type: String,
        default: "off",
      },
    },
    setup(props) {
      // we don't provide any rules here because we are using form-level validation
      // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
      const {
        value: inputValue,
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

<style lang="scss" scoped>
  .TextInput {
    position: relative;
    // margin-bottom: calc(1em * 0.5);
    width: 100%;
    margin-bottom: 1.5em;
    background-color: -internal-light-dark(
      rgb(232, 240, 254),
      rgba(70, 90, 126, 0.4)
    ) !important;
    color: -internal-light-dark(black, white) !important;
  }

  /* label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
}

input {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
} */

  .TextInput input:focus {
    background-color: -internal-light-dark(
      rgb(232, 240, 254),
      rgba(70, 90, 126, 0.4)
    ) !important;
    color: -internal-light-dark(black, white) !important;
  }

  .TextInput input:focus .TextInput i {
    background-color: -internal-light-dark(
      rgb(232, 240, 254),
      rgba(70, 90, 126, 0.4)
    ) !important;
    color: -internal-light-dark(black, white) !important;
  }

  .help-message {
    position: absolute;
    bottom: 3.6em;
    left: 0em;
    margin: 0;
    font-size: 16px;
    color: #f71616 !important;
    text-shadow: 0 0 13px #4f4d4d;
    font-weight: 500;
  }

  .TextInput.has-error input {
    color: red;
  }

  .TextInput.has-error {
    border-color: red !important;
  }

  .TextInput.has-error input:focus {
    border-color: gray;
  }

  .TextInput.has-error .help-message {
    color: blue;
  }

  .TextInput.success input {
    background-color: -internal-light-dark(
      rgb(232, 240, 254),
      rgba(70, 90, 126, 0.4)
    ) !important;
    color: -internal-light-dark(black, white) !important;
  }

  .TextInput.success input:focus {
    border-color: #dfdfdf;
  }

  .TextInput.success .help-message {
    color: var(--success-color);
  }

  input {
    background: none;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid var(--secondary);
    color: #dfdfdf;
  }
</style>
