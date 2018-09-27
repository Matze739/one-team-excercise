<template>
  <header class="header">
    <a href="/"><img src="../assets/png/ote_logo.png"/></a>
    <nav class="header__nav">
      <a class="root-icon icon-nav-account" href="#"></a>
      <a class="root-icon icon-nav-search" href="#"></a>
      <a class="root-icon icon-nav-service" href="#"></a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.header {
  display: block;
  height: 3em;
  background-color: $ote-header-footer-background-color;

  img {
    width: 10em;
    height: 3em;
    display: block;
    float: left;
    max-width: 10em;
  }
  &__nav {
    display: flex;
    height: 100%;
    align-items: center;
    float: right;

    a {
      margin: 0 0.3125em;
      opacity: 0.7;
    }
  }
}
</style>
