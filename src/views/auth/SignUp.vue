<!-- @format -->

<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <div class="flex items-start justify-end">
      <div class="flex w-full h-16 text-xl cursor-pointer">
        <div
          @click="$router.push('/auth/SignUp')"
          class="w-1/2 flex items-center justify-center text-white"
        >
          Sign up
        </div>
        <div
          @click="$router.push('/auth/login')"
          class="bg-secondary shadow-lg w-1/2 flex items-center justify-center"
          style="box-shadow: inset -2px -4px 7px rgba(0, 0, 0, 0.25)"
        >
          Log in
        </div>
      </div>
    </div>

    <div class="text-center pt-10 pb-1">
      <img
        class="mx-auto w-48"
        @click="$router.push('/inplay')"
        :src="$store.getters['configModule/domainSettings']?.mainLogo"
        alt="logo"
      />
    </div>

    <!-- v-slot="{ errors }" -->
    <!--autocomplete="off"-->
    <div class="px-7 md:px-12 md:pb-12">
      <div class="mb-4 mt-4">
        <TextInput
          name="username"
          type="text"
          label
          placeholder="Your Username"
          :icon="'fi-sr-user'"
          success-message
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <!-- <span>{{ errors.username }}</span> -->
      <div class="mb-4">
        <TextInput
          name="password"
          type="password"
          label
          placeholder="Your Password"
          :icon="'fi-sr-key'"
          success-message
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="mb-4">
        <TextInput
          name="confirmpassword"
          type="password"
          label
          placeholder="Confirm Password"
          :icon="'fi-sr-key'"
          success-message
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="mb-4">
        <TextInput
          name="mobile"
          type="text"
          label
          placeholder="Your Mobile"
          :icon="'fi-sr-mobile'"
          autocomplete="true"
          success-message
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="mb-4">
        <button
          class="inline-block px-6 py-2.5 text-btn-text-color bg-secondary font-medium text-sm leading-tight rounded hover:bg-[#b4b63c] press-effect w-full mb-3"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </div>
  </Form>
</template>

<script>
  import router from "@/router/router";
  import { Form } from "vee-validate";
  import * as yup from "yup";
  import TextInput from "../../components/TextInput.vue";
  import store from "../../store/store";

  export default {
    components: {
      TextInput,
      Form,
    },
    data() {
      const mobileRegex = /^((0091)|(\+91)|0?)[789]{1}\d{9}$/;
      const schema = yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
        confirmpassword: yup
          .string()
          .oneOf([yup.ref("password"), null], "Passwords must match"),
        mobile: yup.string().matches(mobileRegex, "mobile number is not valid"),
      });

      return {
        schema,
      };
    },
    computed: {},
    methods: {
      onSubmit(values) {
        // this.$notify("Hello user!");
        const formdata = JSON.parse(JSON.stringify(values, null, 2));

        const payload = {
          userName: formdata["username"],
          password: formdata["password"],
          confirmPassword: formdata["confirmpassword"],
          mobile: formdata["mobile"],
        };
        store
          .dispatch("authModule/register", payload)
          .then(() => {
            //this.toast.success("Login Success");

            router.push({ path: "/auth/verfication" });
          })
          .catch((error) => {
            this.toast.error(error.data.error.message);
          });
      },
      gotoLogin() {
        this.$router.push("/Auth/Login");
      },
    },
  };
</script>

<style>
  .login-container .form-wrapper .logo {
    height: 8vh !important;
  }

  .login-container .form-wrapper .logo img {
    top: calc(100% - 33px) !important;
  }
</style>
