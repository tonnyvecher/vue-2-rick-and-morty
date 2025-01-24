<template>
  <label class="search-input">
    <img src="/src/assets/search.svg" class="search-input__icon" />
    <input
      type="text"
      class="search-input__input"
      placeholder="Painting title"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button class="search-input__close-btn" v-if="value.length" @click="reset">
      <img src="/src/assets/close.svg" class="search-input__icon" />
    </button>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: "",
    },
  },

  emits: ["input"],
  methods: {
    reset() {
      this.$emit("input", "");
    },
  },
});
</script>

<style lang="scss" scoped>
.search-input {
  border-radius: 4px;
  border: 1px solid var(--input-search-border-color);
  padding: 8px 16px;
  background-color: var(--input-search-background);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  font-weight: 300;
  font-size: 14px;
  line-height: 19.6px;

  &:has(&__input:focus) {
    border-color: var(--input-search-color-border);
  }

  &__input {
    outline: none;
    border: none;
    background: none;
    color: var(--input-search-color);
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &::placeholder {
      font-family: "Lobster Two", serif;
      font-weight: 400;
      font-style: italic;
      letter-spacing: 0.1rem;
      color: var(--input-search-placeholder);
    }
  }

  &__icon {
    fill: var(--input-search-color);
  }

  &__close-btn {
    display: flex;
    cursor: pointer;
    border: none;
    background: none;
  }
}
</style>
