<template>
  <template v-if="getSliderImages.length > 0">
    <carousel
      v-if="getSliderImages.length > 0"
      :settings="settings"
      :breakpoints="breakpoints"
      :autoplay="autoplayValue()"
      :wrap-around="wrapAround()"
      class="mb-3"
    >
      <slide v-for="(slide, index) in getSliderImages" :key="index">
        <div
          class="carousel__item items"
          :style="`background-image:url(${slide.url});background-size:100% 100%`"
        >
          <!-- {{ slide }} -->
        </div>
      </slide>
    </carousel>

    <MiniCard />
    <CasinoCard />
  </template>
</template>

<script>
  //import { defineComponent } from "vue";
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import "vue3-carousel/dist/carousel.css";
  import { defineAsyncComponent } from "vue";
  import { Carousel, Slide /*, Pagination, Navigation*/ } from "vue3-carousel";

  export default {
    name: "carsoul",
    components: {
      Carousel, //: defineAsyncComponent(() => import("vue3-carousel")),
      Slide, //: defineAsyncComponent(() => import("vue3-carousel")),
      MiniCard: defineAsyncComponent(() => import("../../MiniCard.vue")), // () => import("../../MiniCard.vue"),
      CasinoCard: defineAsyncComponent(() => import("../../CasinoCard.vue")), // () => import("../../CasinoCard.vue"),
    },
    data: () => ({
      slideImages: [],
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        //autoplay: 5000,
        //wrapAround: "true",
      },

      breakpoints: {
        0: {
          itemsToShow: 1,
          snapAlign: "start",
        },
        600: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: "center",
        },
      },
    }),
    created() {},
    methods: {
      autoplayValue() {
        if (this.getSliderImages.length == 1 && window.innerWidth < 595) {
          return 0;
        } else {
          return 5000;
        }
      },
      wrapAround() {
        if (this.getSliderImages.length == 1 && window.innerWidth < 595) {
          return false;
        } else {
          return true;
        }
      },
    },

    unmounted() {},

    computed: {
      getSliderImages() {
        let images = [];
        try {
          images =
            this.$store.getters["configModule/domainSettings"]?.imageSliders;
          if (images !== undefined && images !== null && images.length > 0) {
            images = images.sort((a, b) => (a.order > b.order ? 1 : -1));
          } else {
            images = [];
          }
        } catch (err) {
          images = [];
          console.error("Error ", err);
        }
        return images;
      },
    },
  };
</script>

<style>
  @media (min-width: 1200px) {
    .carousel {
      margin: 1px auto 3px auto !important;
      width: 100%;
    }
  }

  .carousel {
    /* margin: 54px auto 2px auto; */
    width: 100%;
  }
  .carousel__viewport {
    height: 154px;
    width: 100%;
  }
  .carousel__track {
    height: 100%;
    width: 100%;
  }
  .carousel__item {
    min-height: 150px;
    border-radius: 10px;
    width: 100%;
    /*background-color: #642afb;
  color: white;
  font-size: 20px;
  border-radius: 8px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel__slide {
    padding: 3px;

    /* margin: 3px; */
    display: block;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
</style>
