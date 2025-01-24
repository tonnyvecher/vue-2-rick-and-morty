<template>
  <div class="character-empty">
    <h4>No matches for Lorem</h4>
    <p>Please try again with a different spelling or keywords.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterEmpty",
});
</script>

<style lang="scss" scoped>
.character-empty {
  display: grid;
  gap: 12px;
  padding-top: 40px;
}
</style>
