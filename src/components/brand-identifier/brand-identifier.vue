<template>
  <div class="brand-identifier">
    <a href="http://m.staralliance.com" data-external="true"><img src="../../assets/svg/logo_alliance.svg" alt="Rebel Alliance Logo"/></a>
  </div>
</template>

<script>
export default {
  name: 'brand-identifier'
}
</script>

<style lang="scss">
.brand-identifier {
  display: flex;
  //justify-content: right;
  justify-content: flex-end;
  padding: 1.125em 0;
  border-bottom: 2px solid $ote-divider;
  a {
    display: flex;
  }
  img {
    margin: auto 0.5em auto auto;
  }
}
</style>
