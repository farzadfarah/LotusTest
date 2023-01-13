<template>
  <!-- <div class="bg-new-sky h-10 w-full mt-4"></div> -->
  <section
    class="h-full1 gradient-form md:h-screen1 font-cera-pro min-h-screen"
  >
    <div class="container000 h-full">
      <div
        class="md:flex justify-center items-center flex-wrap h-full g-3 text-gray-800"
      >
        <div class="md:w-full">
          <div class="block bg-white0 shadow-lg0 rounded-lg">
            <div class="lg:flex lg:flex-wrap g-0">
              <div class="w-full px-4 md:px-0">
                <div class="md:p-2 md:mx-10">
                  <div class="">
                    <h4 class="text-xl font-semibold mt-1 mb-1 pb-1">
                      Change Password
                    </h4>
                  </div>
                  <hr class="border-gray-500 my-3" />

                  <form @submit="onSubmit" class="form-change-pas md:w-96">
                    <!-- <img src="@/assets/images/password.png"> -->
                    <div class="mb-4">
                      <label for="cpass">Current Password</label>
                      <input
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="password"
                        v-model="oldpassword"
                      />
                    </div>
                    <div class="mb-4">
                      <label for="cpass">New Password</label>
                      <input
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="password"
                        v-model="password"
                      />
                    </div>
                    <div class="mb-4">
                      <label for="cpass">Confirm Password</label>
                      <input
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="password"
                        v-model="repassword"
                      />
                    </div>

                    <div
                      class="mt-4 ---flex items-center justify-between pb-6 text-sm text-right"
                    >
                      <button
                        class="press-effect-mini inline-block px-6 py-2.5 text-zinc-700 bg-[#77a37f] font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-[#638068] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ---w-full mb-3"
                        type="button"
                        @click="changePasswordRequest()"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  //import { Form } from "vee-validate";
  export default {
    data() {
      return {
        oldpassword: "",
        password: "",
        repassword: "",
      };
    },
    methods: {
      changePasswordRequest() {
        if (
          this.oldpassword == "" ||
          this.password == "" ||
          this.repassword == ""
        ) {
          this.toast.error("Please fill all fields");
          return false;
        }
        if (this.password != this.repassword) {
          this.toast.error("Passwords must match");
          return false;
        }
        let data = {
          currentPassword: this.oldpassword,
          newPassword: this.password,
        };
        this.$store
          .dispatch("moduleMain/changePassword", data)
          .then(() => {
            this.toast.success("Password Changed Successfully");
          })
          .catch((error) => {
            this.toast.error(error.data.error.message);
          });
      },
    },
    computed: {
      backgroundImg() {
        return `${"background-image:url(/src/assets/images/password.png);background-size: 100% 100%;min-height:150px;"}`;
      },
    },
  };
</script>
