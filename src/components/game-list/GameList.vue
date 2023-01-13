<template>
  <li
    class="px-2 py-1 w-full border border-slate-200 bg-white hover:bg-[#f7f7f7]"
    v-for="item in gamesList"
    :key="item.id"
    :id="item.id"
  >
    <game-item
      :key="item.id"
      :id="item.id"
      :dreamEventId="item.dreamEventId"
      :gameStatus="item.status"
      :teamesName="item.title"
      :team1="item.team1"
      :team2="item.team2"
      :gameTime="item.time"
      :gameDate="item.matchDate"
      :f="item.isFancy"
      :bm="item.isBookMaker"
      :sportName="item.sportName"
      :sportId="item.sportId"
      :pin="item.pin"
      :isFastBet="item?.isFastBet"
    />
  </li>
</template>

<script>
  //import GameItem from "./GameItem.vue";

  import { defineAsyncComponent } from "vue";

  export default {
    components: {
      GameItem: defineAsyncComponent(() => import("./GameItem.vue")),
    },
    props: {
      gamesList: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style></style>
