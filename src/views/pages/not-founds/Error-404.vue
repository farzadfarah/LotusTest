<!-- @format -->
<template>
  <section class="h-full1 gradient-form bg-new-gray md:h-screen1 font-cera-pro min-h-screen">
    <div class="py-12 px-1 sm:px-6 h-full">
      <div class="md:flex justify-center items-center flex-wrap h-full g-3 text-gray-800">
        <div class="xl:w-10/12">
          <div
            class="block bg-white shadow-lg rounded-lg"
            style="background: url(../../src/assets/images/white-abstract.jpg) no-repeat;height: 100vh;    background-size: 100% 100%;"
          >
            <div class="lg:flex lg:flex-wrap g-0">
              <div class="lg:w-full px-4 md:px-0">
                <div class="md:p-3 md:mx-6">
                  <div class="border-b border-gray-200 --dark:border-gray-700">
                    <div class="flex-root font-cera-pro" style="height: 100%;margin: 0;padding: 0;">
                      <div
                        class="flex h-screen flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed pt-5"
                      >
                        <div
                          class="text-center p-3 pt-10"
                          style="margin: auto;display: flex;width: 100%;flex-direction: column;height: 100%;align-items: center;justify-content: center;text-align: center;"
                        >
                          <h1 class="h1-title">We can't find that page</h1>
                          <div>
                            <h3 class="h3-body h-bg-gradient">
                              The page you are looking for does not exist. How you got here is a
                              mystery. But you can click the button below to go back to the
                              homepage.
                            </h3>
                          </div>
                          <div>
                            <img
                              src="../../../assets/images/404-error.png"
                              style="border-radius: 2%;max-width: 40%;margin: auto;"
                            />
                          </div>
                          <div class="text-center mt-6">
                            <router-link
                              class="block bg-new-sky hover:bg-sky-700 text-new-gray font-bold text-sm py-2 px-2 rounded items-center leading-7 m-1"
                              to="/inplay"
                            >Home Page</router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
export default {
  components: {},
};
</script>

<style scoped>
.img-404 {
  width: 30%;
  margin: 5% auto 0 auto;
}
.h1-title {
  font-size: 2.5vw;
  font-weight: bolder;
  color: #003140;
}

.h3-body {
  font-size: 1.5vw;
  font-weight: bolder;
  margin: 8px auto 40px auto;
  color: #003140;
}

@media screen and (max-width: 600px) {
  .h1-title {
    font-size: 4.5vw;
    font-weight: bolder;
  }

  .h3-body {
    font-size: 3.5vw;
    font-weight: bolder;
  }
}

.h-bg-gradient {
  background-image: linear-gradient(-180deg, #9eaeb9 0%, #6f9bb7 82%);
}
</style>
