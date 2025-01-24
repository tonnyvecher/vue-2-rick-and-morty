<template>
  <div class="app-pagination">
    <button
      class="app-pagination__arrow-btn"
      @click="changeActive(active - 1)"
      v-if="active !== 1"
    >
      <img src="/src/assets/arrow-left.svg" class="search-input__icon" />
    </button>
    <div class="app-pagination__btn-list">
      <div v-for="n in count" :key="n">
        <button
          class="app-pagination__btn"
          :class="{ 'app-pagination__btn--active': n === active }"
          @click="changeActive(n)"
        >
          {{ n }}
        </button>
      </div>
    </div>
    <button
      class="app-pagination__arrow-btn"
      @click="changeActive(active + 1)"
      v-if="active !== count"
    >
      <img
        src="/src/assets/arrow-left.svg"
        class="app-pagination__arrow--right"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    total: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    count() {
      return Math.ceil(this.total / this.limit);
    },
    active: {
      get() {
        return this.value;
      },
      set(value: number) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    changeActive(n: number) {
      this.active = n;
    },
  },
});
</script>

<style lang="scss" scoped>
.app-pagination {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;

  &__btn-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__btn {
    width: 24px;
    height: 24px;
    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 0;
    color: var(--pagination-color-btn);

    &--active {
      background-color: var(--pagination-color-btn-active);
      border-radius: 4px;
    }

    &:hover {
      border-bottom-color: var(--pagination-color-btn-hover-border-bottom);
    }
  }

  &__arrow {
    &--right {
      transform: rotate(180deg);
    }
  }

  &__arrow-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    color: var(--pagination-color-btn);

    &:hover {
      background-color: var(--pagination-arrow-btn);
      border-radius: 4px;
    }
  }
}
</style>
