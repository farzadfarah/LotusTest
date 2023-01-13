<template>
  <table>
    <v-thead>
      <th v-for="(item, index) in heads" :key="index">{{ item }}</th>
    </v-thead>
    <v-tbody :rows="rows">
      <slot name="tr">
        <tr v-for="(tr, tr_index) in rows" :key="tr_index">
          <slot name="td">
            <td v-for="(td, td_index) in columns" :key="td_index">{{ tr[td] }}</td>
          </slot>
        </tr>
      </slot>
    </v-tbody>
  </table>
</template>

<script>
import VThead from "./V-Thead.vue";
import VTbody from "./V-Tbody.vue";

export default {
  components: { VThead, VTbody },
  props: {
    heads: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  background-color: #fff;
  border-collapse: collapse;
  border-bottom: 1px solid #7e97a7;
  // margin-bottom: 15px;
}

table th {
  color: #243a48;
  background-color: #e4e4e4;
  border: 1px solid #7e97a7;
  border-width: 1px 0 1px 0;
  padding: 8px 10px;
}

table td {
  border-top: 1px solid #eee;
  padding: 8px 10px;
  vertical-align: middle;
}

table tbody tr:hover td {
  background-color: #dee2e6;
  color: #333;
}
.setting-container .wrapper table th {
  white-space: nowrap;
}
</style>
