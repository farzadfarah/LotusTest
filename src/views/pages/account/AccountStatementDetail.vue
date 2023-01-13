<template>
    <div class="block relative px-2 w-full md:w-10/12 m-auto font-cera-round-pro">
        <h1 class="pt-2 text-lg font-semibold">Transfer Statement</h1>
        <div class="w-full pt-3 pb-3 ">
            <div v-if="rowDetail?.bets?.length > 0" class="row m-0" style="font-size: small">
                <div class="bg-[#0f2327] p-2">
                    <h5 class="text-xs text-white">{{ rowDetail.description }}</h5>
                </div>
                <div class="bg-white pt-2 pb-3 px-2 shadow">
                    <div class="flex justify-between">
                        <div class="text-[10px] font-semibold">Bet ID: <span class="font-medium">{{ $route.params.id
                        }}</span></div>
                        <div>
                            <div>Status: <span class="font-semibold"
                                    :class="isPositiveWithCssClass(rowDetail.totalWin)">
                                    <span v-if="isPositive(rowDetail.totalWin) > 0">WIN</span>
                                    <span v-else-if="isPositive(rowDetail.totalWin) < 0">LOST</span>
                                    <span v-else>TIE</span>
                                </span>
                            </div>
                            <div>Profit/Loss: <span class="font-semibold"
                                    :class="isPositiveWithCssClass(rowDetail.totalWin)">{{
                                            rowDetail.totalWin
                                    }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-4">
                        <table class="w-full text-left">
                            <thead>
                                <tr>
                                    <th>TYPE</th>
                                    <th>ODDS</th>
                                    <th>STAKE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in rowDetail.bets" :key="item.id">
                                    <td>{{ item.betType }}</td>
                                    <td>{{ item.rate }}</td>
                                    <td>{{ item.amount }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="w-full mt-5 bg-stone-100 py-5">
                    <div class="flex justify-between p-2 border-b border-t border-black">
                        <div>Net Market Total:</div>
                        <div>{{ rowDetail.totalWin }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "profit-detail",
    data() {
        return {
            rowDetail: {},
        };
    },
    methods: {
        getRowInfo(id) {
            if (id != null) {
                this.$store
                    .dispatch("moduleMain/getBetTransactionHistoryDetail", {
                        transactionId: id,
                    })
                    .then((response) => {

                        this.rowDetail = response.data.result;
                    })
                    .catch(() => {

                    });
            }
        },

        isPositive(val) {
            if (val) {
                if (parseFloat(val.replace(",", "")) > 0) return 1;
                else if (parseFloat(val.replace(",", "")) == 0) return 0;
                else return -1;
            }
            return 0;
        },

        isPositiveWithCssClass(val) {
            if (val) {
                if (parseFloat(val.replace(",", "")) > 0) return "text-green-500";
                else if (parseFloat(val.replace(",", "")) == 0) return "";
                else return "text-red-500";
            }
            return "text-red-500";
        },
    },

    computed: {
    },

    mounted() {
        if (this.$route.params.id)
            this.getRowInfo(this.$route.params.id);
    },
}
</script>

<style>
</style>