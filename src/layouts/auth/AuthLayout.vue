<template>
  <section
    class="h-full1 bg-main-background gradient-form md:h-screen1 font-cera-pro min-h-screen bg-[length:10%] md:bg-[length:8%]"
  >
    <!--  :style="{ backgroundImage: `url(${backgroundUrl})` }" -->
    <div class="container000 py-12 px-4 h-screen">
      <div
        class="w-full flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
      >
        <div class="w-full md:w-5/12">
          <div class="block rounded-lg">
            <div class="lg:flex lg:flex-wrap g-0 relative">
              <router-link
                to="/Inplay"
                class="absolute right-0 -top-8 md:top-0 bg-secondary rounded-full w-7 h-7 text-center font-bold cursor-pointer"
                >X</router-link
              >
              <div class="lg:w-full md:px-0">
                <div
                  class="---md:p-12 md:mx-12 bg-primary rounded-lg overflow-hidden"
                >
                  <router-view :key="$route.path"></router-view>
                  <!-- <FloatingMenuButton
                    :setting="$store.getters['configModule/domainSettings']"
                    :userStatus="$store.getters['authModule/userinfo']"
                    depositURL="/depositw"
                    withdrawalURL="/withdrawal"
                  ></FloatingMenuButton> -->
                  <!-- <a
                    v-if="$store.getters['configModule/domainSettings']?.showSupportLink"
                    :href="$store.getters['configModule/domainSettings']?.supportLink"
                    target="_blank"
                    class="--md:hidden rounded-full fixed bottom-4 right-4 md:right-[16px] --p-3 h-12"
                  >
                    <img
                      src="@/assets/images/whatsapp_icon.png"
                      class="m-auto h-12 w-12"
                    />
                  </a> -->
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
  import backgroundUrl from "@/assets/images/lotus-bg-auth.jpg";
  import auth from "../../http/request/auth";

  export default {
    name: "auth-layout",
    data() {
      return {
        backgroundUrl,
      };
    },
    created() {
      auth.init();
    },
    computed: {
      setAuthBackgrounImage() {
        return ""; // `background-image:url(${'../../../../assets/images/lotus-bg-auth.jpg'});`;
      },
      /*setAuthLogoImage() {
      return this.$store.getters["configModule/domainSettings"]?.authLogoImage;

      //require(`${ this.$store.getters["configModule/domainSettings"].images.authLogoImage } `);
    },*/
    },
    mounted() {},
  };
</script>

<style scoped></style>
