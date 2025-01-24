<template>
  <router-link :to="'/' + item.id" class="character-item-link">
    <div class="character-item">
      <img class="character-item__image" :src="item.image" />
      <div class="character-item__content">
        <div class="character-item__content-container">
          <div class="character-item__content-hr" />
          <div class="character-item__content-about">
            <div class="character-item__name">{{ item.name }}</div>
            <div class="character-item__status">{{ item.status }}</div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.character-item-link {
  text-decoration: none;
}

.character-item {
  display: grid;
  background-color: lightgray;
  aspect-ratio: 3/2;
  height: min-content;

  &__image {
    grid-area: 1/-1;
    display: block;
    object-fit: cover;
    max-width: 100%;
    height: 100%;
    min-height: 0;
    width: 100%;
  }

  &__content {
    grid-area: 1/-1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__content-container {
    display: flex;
    gap: 20px;
    max-width: 300px;
    background-color: var(--body-background);
    padding: 20px 20px 20px 0;
  }

  &__content-hr {
    border-left: 2px solid var(--character-item-accent);
  }

  &__content-about {
    display: grid;
    gap: 8px;
    letter-spacing: 0.1rem;
  }

  &__name {
    font-family: "Lobster Two", serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 16px;
    font-style: italic;
    text-transform: uppercase;
    color: var(--color-text-2);
  }

  &__status {
    font-family: "Lobster", serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 15px;
    font-style: normal;
    color: var(--character-item-accent);
  }

  @media (max-width: 768px) {
    &__content-container {
      padding: 12px;
    }

    &__content-hr {
      display: none;
    }
  }

  @media (max-width: 320px) {
    &__content-container {
      padding: 8px 12px;
      max-width: 236px;
    }

    &__content-hr {
      display: none;
    }
  }
}
</style>
