<template>
  <div class="home">
    <div class="home__container">
      <AppHeader />
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";
export default defineComponent({
  components: {
    AppHeader,
    AppMain,
  },
});
</script>

<style lang="scss" scoped>
.home {
  padding-inline: 20px;

  &__container {
    max-width: 1240px;
    margin-inline: auto;
    display: grid;
    gap: 44px;
  }
}
</style>
