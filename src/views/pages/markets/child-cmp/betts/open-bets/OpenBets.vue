<template>
  <div class="block relative w-full m-auto font-cera-round-pro text-new-sky">
    <div class="w-full  py-3 rounded-lg font-cera-pro">
      <h5 class="text-new-sky text-sm leading-6 font-medium flex">
        <span class="ml-1 inline-block text-new-sky font-medium">Open Bets (Matched)</span>
      </h5>
      <div class="scrolbar">
        <div class="flex flex-col mt-2">
          <div class="overflow-x-auto shadow-md sm:rounded-lg">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 table-fixed">
                  <thead class="bg-gray-300 --dark:bg-gray-700">
                    <tr>
                      <th scope="col"
                        class="py-3 px-6 rounded-tl text-xs font-bold tracking-wider text-left text-gray-700 uppercase --dark:text-gray-400">
                        Matched Bet</th>
                      <th scope="col"
                        class="py-3 px-2 text-xs font-bold tracking-wider text-right text-gray-700 uppercase --dark:text-gray-400">
                        Odds</th>
                      <th scope="col"
                        class="py-3 px-3 rounded-tr text-xs font-bold tracking-wider text-right text-gray-700 uppercase --dark:text-gray-400">
                        Stake</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 --dark:bg-gray-800 --dark:divide-gray-700">
                    <tr v-for="item in matchBets" :key="item" :class="color(item.betType)">
                      <td class="py-2 px-2 text-sm font-medium text-gray-900 whitespace-nowrap --dark:text-white">{{
                        item.runnerName
                      }} - {{ item.marketName }}</td>
                      <td class="py-2 px-2 text-sm font-medium text-gray-900 whitespace-nowrap text-right">{{
                        item.odds
                      }}</td>
                      <td class="py-2 px-3 text-sm font-medium text-gray-900 whitespace-nowrap text-right">{{
                        item.stake
                      }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        return "rowBorderBack";
      else return "rowBorderLay";
    },
  },
};
</script>

<style scoped>
.rowBorderBack {
  background-color: #94dfff;
}

.rowBorderLay {
  background-color: #f9c8d3;
}

.setting-container .wrapper table tbody tr:hover td {
  background-color: transparent;
}
</style>
