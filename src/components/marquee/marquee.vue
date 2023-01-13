<template>
  <div>
    <div>
      <VueSlickCarousel ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true">
        <div v-for="(item, index) in items" :key="index">
          <h1>{{ item }}</h1>
        </div>
      </VueSlickCarousel>
    </div>
    <div>
      <VueSlickCarousel ref="c2" :asNavFor="$refs.c1" :focusOnSelect="true">
        <div v-for="(item, index) in items" :key="index">
          <h1>{{ item }}</h1>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
  //import VueSlickCarousel from "vue-slick-carousel";
  import { defineAsyncComponent } from "vue";
  import "vue-slick-carousel/dist/vue-slick-carousel.css";

  export default {
    data: () => ({
      items: [1, 2, 3, 4, 5],
    }),
    components: {
      VueSlickCarousel: defineAsyncComponent(() =>
        import("vue-slick-carousel")
      ),
    },
  };
</script>
