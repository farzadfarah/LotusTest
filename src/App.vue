<script>
  //import { defineComponent } from "vue";
  import { defineAsyncComponent } from "vue";
  //import LoadingVue from "./components/Loading.vue";
  import main from "./http/request/main";
  export default {
    inheritAttrs: false,
    name: "App",
    components: {
      LoadingVue: defineAsyncComponent(() =>
        import("./components/Loading.vue")
      ),
    },
    watch: {
      $route: {
        immediate: true,
        handler(to, from) {
          if (from && from.length > 0) {
            if (from.fullPath.toLowerCase() == "/lotus") {
              if (localStorage.getItem("accessToken")) {
                this.$store
                  .dispatch("moduleMain/getUserOpenBets")
                  .then(() => {
                    this.openBetData =
                      this.$store.getters["moduleMain/getOpenBets"];
                  })
                  .catch();
              }
            }
          }
          let domain = "";
          if (
            this.$store.getters["configModule/domainSettings"] &&
            this.$store.getters["configModule/domainSettings"].domainTitle
          )
            domain =
              this.$store.getters["configModule/domainSettings"].domainTitle;

          document.title = to.meta.title
            ? `${domain != "" ? domain + " | " : ""}` + to.meta?.title
            : `${domain != "" ? domain + " | " : ""}`;

          document
            .querySelector('meta[name="description"]')
            .setAttribute(
              "content",
              this.$store.getters["configModule/domainSettings"]?.description
            );

          // if(to.hash=='#search'){
          //   this.showSearchBox=true;
          // }else{
          //   this.showSearchBox=false
          // }
        },
      },
    },
    created() {
      this.$store
        .dispatch("configModule/getDomainSetting")
        .then((res) => {
          if (res.data.success == true) {
            if (res.data.result.siteSuspended == true) {
              localStorage.setItem("siteSuspended", true);
              this.$router.push("/under-maintenance");
            } else {
              //console.log(res);
              document
                .getElementById("_favicon")
                .setAttribute(
                  "href",
                  this.$store.getters["configModule/domainSettings"]?.favicon
                );
            }
          }
        })
        .catch((error) => {
          if (error.data) this.toast.error(error.data?.error.message);
        });

      try {
        document.documentElement.setAttribute(
          "theme",
          this.$store.getters.theme
        );
        document.body.setAttribute("theme", this.$store.getters.theme);
        //auth.init();
        this.$store.dispatch("authModule/updateInReload").then().catch();
        main.init();
      } catch (e) {
        //console.log(e);
      }
      //alert(JSON.stringify(import.meta.env.VITE_APP_BASEURL))
    },
    beforeCreate() {},
  };
</script>

<template>
  <router-view
    :key="$route.fullPath + Math.floor(Math.random() * 10000) + 1"
  ></router-view>
  <loading-vue id="loading"></loading-vue>
</template>

<style></style>
