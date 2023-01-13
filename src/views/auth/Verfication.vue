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

    <div class="px-7 md:px-12 md:pb-12">
      <div class="mb-4 mt-4">
        <TextInput
          name="otp"
          type="Number"
          label
          placeholder="Otp Code"
          success-message
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div style="text-align: center; margin: 35px auto; color: white">
        <countdown :endDate="endDate">
          <template v-slot:min="{ min }">
            <font-awesome-icon
              icon="clock"
              class="mr-2"
              :class="{ 'fa-spin': !showBtnAgainSendCode }"
            />
            <span>{{ (this.min = min) }}</span>
            <span>:</span>
          </template>

          <template v-slot:sec="{ sec }">
            <span>{{ (this.sec = sec) }}</span>
          </template>
        </countdown>
      </div>

      <button
        v-if="showBtnAgainSendCode == false"
        type="submit"
        class="inline-block px-6 py-2.5 text-btn-text-color bg-secondary font-medium text-sm leading-tight rounded shadow-2xl hover:bg-[#b4b63c] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#777] active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
      >
        Send
      </button>
      <button
        v-if="showBtnAgainSendCode == true"
        class="inline-block px-6 py-2.5 text-btn-text-color bg-secondary font-medium text-sm leading-tight rounded press-effect w-full mb-3"
        @click="sendVerificationAgain"
        type="button"
      >
        Send Again Code
      </button>
    </div>
  </Form>
</template>

<script>
  import router from "@/router/router";
  import { Form } from "vee-validate";
  import * as yup from "yup";
  import TextInput from "../../components/TextInput.vue";
  import store from "../../store/store";
  import Countdown from "@/components/countdown/countdown.vue";

  export default {
    components: {
      TextInput,
      Form,
      Countdown,
    },
    data() {
      const schema = yup.object({
        otp: yup.number().required().typeError("Please Enter Otp code"),
      });

      return {
        schema,
        endDate: new Date().setTime(new Date().getTime() + 2 * 60000),
        min: 2,
        sec: 0,
        showBtnAgainSendCode: false,
      };
    },
    computed: {},
    methods: {
      onSubmit(values) {
        const formdata = JSON.parse(JSON.stringify(values, null, 2));

        const firstStepData = this.$store.getters["authModule/registerInfo"];
        if (!firstStepData["username"] || !firstStepData["mobile"]) {
          router.push({ path: "/Auth/signup" });
          return;
        }
        const payload = {
          userName: firstStepData.username,
          mobile: firstStepData.mobile,
          domain: firstStepData.domain,
          otp: formdata["otp"],
        };

        store
          .dispatch("authModule/verificationUser", payload)
          .then(() => {
            //this.toast.success("Login Success");

            router.push({ path: "/inplay" });
          })
          .catch((err) => {
            this.toast.error(err.data.error.message);
          });
      },

      sendVerificationAgain() {
        const firstStepData = store.getters["authModule/registerInfo"];
        //console.log("firstStepData", firstStepData);
        if (!firstStepData["username"] || !firstStepData["mobile"]) {
          router.push({ path: "/Auth/signup" });
          return;
        }
        const payload = {
          userName: firstStepData.username,
          mobile: firstStepData.mobile,
          domain: firstStepData.domain,
          //otp: formdata["otp"],
        };

        store
          .dispatch("authModule/resendVerificationCode", payload)
          .then(() => {
            this.toast.success("OTP Code Send Again");
            this.endDate = new Date().setTime(new Date().getTime() + 2 * 60000);
          })
          .catch((err) => {
            this.toast.error(err.data.error.message);
          });
      },

      gotoLogin() {
        this.$router.push("/Auth/Login");
      },
    },
    watch: {
      sec() {
        if (this.sec == 0 && this.min == 0) {
          this.showBtnAgainSendCode = true;
        } else {
          this.showBtnAgainSendCode = false;
        }
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
