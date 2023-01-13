<template>
  <div class="flex justify-between">
    <ul class="pagination-tbl flex mb-28">
      <li class="pagination-item-tbl">
        <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage" aria-label="Go to previous page"
          class="pg-button">
          <i class="ui-icon theme-left pg-i"></i>
        </button>
      </li>

      <li v-for="page in pages" class="pagination-item-tbl" :key="page">
        <button type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled"
          :class="{ 'active-tbl': isPageActive(page.name) }" :aria-label="`Go to page number ${page.name}`">
          {{ page.name }}
        </button>
      </li>

      <li class="pagination-item-tbl">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage" aria-label="Go to next page"
          class="pg-button">
          <i class="ui-icon theme-right pg-i"></i>
        </button>
      </li>

      <li class="pagination-item-tbl float-right">

      </li>
    </ul>
    <select v-model="countPerPage" class="mt-2 h-6" menuPlacement="top"
      style=" background: rgb(211 211 211); border-radius: 3px">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      countPerPage: this.perPage,
    };
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },

  watch: {
    countPerPage() {
      this.$emit("pagechanged", -1, this.countPerPage);
    },
  },
};
</script>

<style>
.pg-i {
  font-size: 0.7rem;
}

.pg-i::before {
  padding-top: 4px;
}

button.pg-button:disabled {
  border-color: #bebebe;
}

button.pg-button:disabled .pg-i::before {
  color: #bebebe;
}

.pagination-tbl {
  list-style-type: none;
  margin-top: 10px;
}

.pagination-item-tbl {
  display: inline-block;
}

.pagination-item-tbl button {
  border: 1px solid #9e9e9e;
  border-radius: 50%;
  margin: auto 1px;
  /* padding: 1px 6px; */
  width: 30px;
  height: 30px;
}

.active-tbl {
  color: #b5933e !important;
  border: 1px solid #b5933e;
  background: #163142;
}
</style>
