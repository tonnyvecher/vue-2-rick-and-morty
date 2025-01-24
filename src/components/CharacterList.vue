<template>
  <div class="character-list" :class="{ 'character-list--loading': isLoading }">
    <CharacterItem v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import type { CharacterListData } from "@/store/characters";
import { defineComponent, type PropType } from "vue";
import CharacterItem from "./CharacterItem.vue";

export default defineComponent({
  name: "CharacterList",
  components: {
    CharacterItem,
  },
  props: {
    list: {
      type: Array as PropType<CharacterListData["results"]>,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.character-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;

  &--loading {
    filter: blur(4px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}
</style>
