<template>
  <div class="app-main">
    <SearchInput
      class="app-main__search-input"
      v-model="searchText"
      @input="debouncedInput"
    />
    <div class="app-main__content">
      <CharacterSkeletons v-if="!data" />
      <CharacterEmpty v-else-if="!data.length" />
      <template v-else>
        <CharacterList :list="data" :isLoading="isLoading" />
        <AppPagination :total="total" :limit="20" v-model="page" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import SearchInput from "./SearchInput.vue";
import CharacterSkeletons from "./CharacterSkeletons.vue";
import CharacterEmpty from "./CharacterEmpty.vue";
import CharacterList from "./CharacterList.vue";
import AppPagination from "./AppPagination.vue";

export default defineComponent({
  components: {
    SearchInput,
    CharacterList,
    AppPagination,
    CharacterEmpty,
    CharacterSkeletons,
  },
  data() {
    return {
      searchText: "",
      debouncedSearchText: "",
      page: 1,
      debounceTimer: 0,
    };
  },

  computed: {
    ...mapState(["data", "isLoading", "total"]),
  },
  methods: {
    ...mapActions(["getData"]),
    debouncedInput() {
      clearTimeout(this.debounceTimer);

      this.debounceTimer = setTimeout(() => {
        this.debouncedSearchText = this.searchText;
      }, 500);
    },
  },
  watch: {
    debouncedSearchText: {
      handler(newVal) {
        this.getData({
          name: newVal,
          page: this.page,
        });
      },
      immediate: true,
    },
    page() {
      this.getData({
        name: this.debouncedSearchText,
        page: this.page,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.app-main {
  display: grid;
  grid-template-columns: 1fr 336px;
  row-gap: 20px;

  &__search-input {
    grid-column: 2/3;
  }

  &__content {
    display: grid;
    gap: 40px;
    grid-column: span 2;
    justify-items: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 296px;
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;

    &__search-input,
    &__gallery-list {
      grid-column: auto;
    }
  }
}
</style>
