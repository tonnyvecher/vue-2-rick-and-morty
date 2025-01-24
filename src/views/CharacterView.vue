<template>
  <div class="character-view">
    <div class="character-view__container">
      <AppHeader />
      <div class="character-view__details">
        <div class="character-view__details-container">
          <div v-if="isLoading">...</div>
          <div v-if="!characterData">No data</div>
          <div class="character-view__details-cart" v-if="characterData">
            <img
              class="character-view__details-cart--image"
              :src="characterData.image"
            />
            <div class="character-view__details-cart--about">
              <h1>Имя: {{ characterData.name }}</h1>
              <h2>Разновидность: {{ characterData.species }}</h2>
              <h2>Статус: {{ characterData.status }}</h2>
              <h3>Пол: {{ characterData.gender }}</h3>
              <h3>Был создан: {{ characterData.created }}</h3>
              <h3>Родина: {{ characterData.origin.name }}</h3>
              <h3>
                Последнее местонахождение: {{ characterData.location.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/AppHeader.vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  components: {
    AppHeader,
  },

  computed: {
    ...mapState(["characterData", "isLoading"]),
    param() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(["getCharacterData"]),
  },
  mounted() {
    this.getCharacterData(this.param);
  },
});
</script>
<style lang="scss" scoped>
.character-view {
  padding-inline: 20px;

  &__container {
    max-width: 1240px;
    margin-inline: auto;
    display: grid;
    gap: 44px;
  }

  &__details-cart {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 30px;

    &--image {
      max-width: 100%;
    }

    &--about {
      display: grid;
      grid-template-rows: repeat(1fr auto);
      gap: 7px;
      color: var(--color-text-2);
      letter-spacing: 0.05rem;
    }
  }

  @media (max-width: 768px) {
    &__details-cart {
      grid-template-columns: 1fr;
    }
  }
}
</style>
