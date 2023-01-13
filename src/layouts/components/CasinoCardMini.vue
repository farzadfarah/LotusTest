<template>
  <div class="px-[2px] py-3">
    <div class="cards-p">
      <div
        v-for="i in catGames"
        :key="i"
        @click="gotoLotus(i)"
        class="rounded h-16 overflow-hidden relative cursor-pointer"
      >
        <!-- :src="i.imageURL"  src="@/assets/images/Evolution-bg.png"-->
        <img
          class="card-img-top img-responsive casino-link-img"
          :src="i.imageURL"
          style="width: 100%; height: 100%; display: block; border-radius: 0px"
        />
        <!-- <h1 class="absolute top-[25%] left-5 font-bold text-white">
          {{ i.description }}
        </h1> -->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        casList: [],
        selected: null,
        catGames: [],
      };
    },
    methods: {
      getGames() {
        let payload = {};
        this.$store
          .dispatch("moduleMain/getGames", payload)
          .then((response) => {
            this.casList = response.data.result;

            this.casList.forEach((i, index) => {
              i.code = index;
              i.games.forEach((i2, index2) => {
                this.boxSize(i2, index2, index);
              });
            });

            if (this.selected == null)
              if (this.casList.length > 0) {
                this.casinoData(this.casList[0]);
              }
          })
          .catch();
      },

      gotoLotus(game) {
        localStorage.removeItem("lotus_url");
        localStorage.setItem("lotus_url", game.url);
        this.$router.push("/Lotus");
      },

      casinoData(category) {
        this.selected = category.code;
        this.catGames = category.games;
      },

      getImgUrl(img) {
        return img;
      },

      boxSize(item, index, catIndex) {
        const img = new Image();
        img.onload = function () {
          item.cssClass = this.width < 380 ? "" : "col-span-2";
        };

        img.src = this.getImgUrl(item.imageURL);
      },
    },

    async mounted() {
      this.getGames();
    },
  };
</script>

<style scoped>
  .cards-p {
    justify-content: space-between;
    width: auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: column;
    grid-auto-columns: 117px;
    overflow-x: auto;
    grid-row-gap: 2px;
    grid-column-gap: 2px;

    grid-template-columns: repeat(auto-fit, 117px);
  }
</style>
