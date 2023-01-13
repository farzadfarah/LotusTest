<template>
  <div class="block relative w-full m-auto font-cera-round-pro text-new-sky">
    <div v-for="item in matchBets" :key="item" class="mb-1 bg-white p-4">
      <h4 class="text-sm font-semibold" :class="color(item.betType)">{{ item.betType }} {{ item.runnerName }}
        {{ item.odds }} @ {{ item.stake }}
        <span v-if="fancyValue != null">liability</span>
        <span v-else>profit</span> {{ item.expectedProfit }}
      </h4>
      <p class="text-xs mt-1 font-semibold">{{ item.marketName }}</p>
      <p class="text-xs mt-1 font-semibold">Placed: <span class="font-normal">{{ item.placeTime }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    matchBets: [],
  },
  methods: {
    color(betType) {
      if (betType.toLowerCase() == "back" || betType.toLowerCase() == "yes")
        return "text-blue-400";
      else return "text-red-400";
    },
  },
};
</script>

<style scoped>
.setting-container .wrapper table tbody tr:hover td {
  background-color: transparent;
}
</style>
