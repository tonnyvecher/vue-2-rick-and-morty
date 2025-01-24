<template>
  <router-link to="/" class="app-header-link">
    <header class="app-header">
      <h1 class="app-header__logo">Тестовое задание</h1>
    </header>
  </router-link>
</template>

<style lang="scss" scoped>
.app-header-link {
  text-decoration: none;
}
.app-header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;

  &__logo {
    font-size: 25px;
    line-height: 16px;
    font-weight: 400;
    color: var(--header-color-logo);
  }
}
</style>
