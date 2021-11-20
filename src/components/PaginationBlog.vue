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
import { computed, toRefs, ref } from "vue";

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
    let  prop = computed(() => props);
    let currentPage = prop.value.currentPage
    let totalPage = prop.value.totalPage
    let maxVisibleButtos = prop.value.maxVisibleBut

    console.log(currentPage);

    function startPage() {
      if (currentPage === 1) return 1;

      if (currentPage === totalPage) return totalPage - 4;

      return currentPage - 2;
    }
    function endPage() {
      return Math.min(
        startPage + maxVisibleButtos - 1,
        totalPage
      );
    }
    function pages() {
      let range = [];
      
      for (let i = startPage; i <= endPage; i++) {
        range.push({
          name: i,
          isActive: i === currentPage,
        });
      }
      return range;
    }

    function isInFirstPage() {
      return currentPage === 1;
    }
    function isInLastPage() {
      return currentPage === totalPage;
    }
    function onClickPage(page) {
      context.emit("pagechanged", page);
    }

    return {
      startPage,
      pages,
      isInFirstPage,
      isInLastPage,
      endPage,
      onClickPage,
      currentPage,
      totalPage,
      maxVisibleButtos
      
    };
  },
};
</script>