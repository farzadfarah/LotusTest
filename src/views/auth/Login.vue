<!-- @format -->

<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <div
      v-if="$store.getters['configModule/domainSettings']?.allowSignUp"
      class="flex items-start justify-end"
    >
      <div class="flex w-full h-16 text-xl cursor-pointer">
        <div
          @click="$router.push('/auth/SignUp')"
          class="bg-secondary shadow-lg w-1/2 flex items-center justify-center"
          style="box-shadow: inset -2px -4px 7px rgba(0, 0, 0, 0.25)"
        >
          Sign up
        </div>
        <div
          @click="$router.push('/auth/login')"
          class="w-1/2 flex items-center justify-center text-white"
        >
          Log in
        </div>
      </div>
    </div>
    <div
      class="text-center pt-10 pb-1"
      :class="
        !$store.getters['configModule/domainSettings']?.allowSignUp
          ? 'mt-10'
          : ''
      "
    >
      <img
        class="mx-auto w-48 mb-5"
        @click="$router.push('/inplay')"
        :src="$store.getters['configModule/domainSettings']?.mainLogo"
        alt="logo"
      />
    </div>
    <div class="w-full px-7 md:px-12 md:pb-12">
      <!-- <p class="mb-4 text-new-gray">Please login to your account</p> -->
      <div class="mb-4 mt-4">
        <TextInput
          name="username"
          type="text"
          label
          placeholder="Your Username"
          :icon="'fi-sr-user'"
          success-message
          autocomplete="on"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="mb-4">
        <TextInput
          name="password"
          type="password"
          label
          placeholder="Your Password"
          :icon="'fi-sr-key'"
          success-message
          autocomplete="on"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="text-center pt-1 mb-4 pb-1">
        <router-link to="/forget-password">Forgot Password?</router-link>
      </div>
      <div class="text-center pt-1 mb-4 pb-1 flex flex-col gap-2">
        <button
          class="press-effect inline-block px-6 py-2.5 text-btn-text-color bg-secondary font-medium text-sm leading-tight rounded hover:bg-[#b4b63c] w-full mb-2"
          type="submit"
        >
          Log in
        </button>
        <button
          class="press-effect inline-block px-6 py-2.5 text-btn-text-color bg-secondary font-medium text-sm leading-tight rounded hover:bg-[#b4b63c] w-full mb-2"
          type="button"
          @click="demoLogin()"
        >
          Login as demo user
        </button>
        <!-- <router-link class="text-gray-500" to="/auth/forget-password">Forgot password?</router-link> -->
      </div>
    </div>
  </Form>
</template>

<script>
  import router from "@/router/router";
  import { Form } from "vee-validate";
  import * as yup from "yup";
  import TextInput from "../../components/TextInput.vue";
  import CheckBox from "../../components/CheckBox.vue";
  import store from "../../store/store";

  export default {
    components: {
      TextInput,
      CheckBox,
      Form,
    },
    data() {
      const schema = yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
      });

      return {
        loading: false,
        schema,
      };
    },
    computed: {
      allowSignUp() {
        return this.$store.getters["configModule/domainSettings"]?.allowSignUp;
      },
    },
    methods: {
      demoLogin() {
        store
          .dispatch("authModule/loginAsDemoUser", {})
          .then(() => {
            router.push(router.currentRoute._value.query.to || "/");
          })
          .catch((err) => {
            this.toast.error(err.data.error.message);
          });
      },

      onSubmit(values) {
        // this.$notify("Hello user!");
        const formdata = JSON.parse(JSON.stringify(values, null, 2));
        const payload = {
          userNameOrEmailAddress: formdata["username"],
          password: formdata["password"],
          //twoFactorVerificationCode: "string",
          rememberClient: formdata["rememberMe"] == "" ? false : true,
          //twoFactorRememberClientToken: "string",
          //singleSignIn: true,
          //returnUrl: "string",
          //captchaResponse: "string",
        };
        this.loading = true;
        store
          .dispatch("authModule/login", payload)
          .then(() => {
            //this.toast.success("Login Success");
            //router.push({ path: "/home" });
            let url = router.currentRoute._value.query?.to || "/inplay";
            router.push(url);
          })
          .catch((err) => {
            this.toast.error(err.data.error.message);
            //router.push({ path: "/home" });
          })
          .finally(() => {
            this.loading = false;
          });
      },
    },
    mounted() {},
  };
</script>
