<template>
  <!-- Pagination-->
  <nav aria-label="Pagination">
    <hr class="my-0" />
    <ul class="my-4 pagination justify-content-center">
      <li class="page-item" :class="{ disabled: isInFirstPage }">
        <button
          type="button"
          class="page-link"
          :disabled="isInFirstPage"
          @click="onClickPage(1)"
        >
          Newer
        </button>
      </li>

      <li
        class="page-item"
        v-for="page in pages"
        :key="page.name"
        :class="{ active: page.isActive }"
      >
        <button
          type="button"
          @click="onClickPage(page.name)"
          class="page-link"
          :disabled="page.isActive"
        >
          {{ page.name }}
        </button>
      </li>

      <li class="page-item" :class="{ disabled: isInLastPage }">
        <button
          type="button"
          class="page-link"
          :disabled="isInLastPage"
          @click="onClickPage(totalPage)"
        >
          Older
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { toRefs, reactive, computed } from "vue";
export default {
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    maxVisibleButtos: {
      type: Number,
      required: false,
      default: 8,
    },
  },

  setup(props, context) {
    const { totalPage, currentPage, maxVisibleButtos } = toRefs(props);

    const startPage = computed(() => {
      if (currentPage.value === 1) return 1;

      if (currentPage.value === totalPage) return totalPage - 4;

      return currentPage.value - 2;
    });

    const endPage = computed(() => {
      return Math.min(startPage.value + maxVisibleButtos.value - 1, totalPage.value);
    });
    const pages = computed(() => {
      let range = [];

      for (let i = startPage.value; i <= endPage.value; i++) {
        range.push({
          name: i,
          isActive: i === currentPage.value,
        });
      }

      return range;
    });

    const isInFirstPage = computed(() => {
      return currentPage.value == 1;
    });
    const isInLastPage = computed(() => {
      return currentPage.value === totalPage;
    });

    function onClickPage(page) {
      context.emit("pagechanged", page);
    }
    return { pages, isInFirstPage, isInLastPage, onClickPage };
  },
};
</script>