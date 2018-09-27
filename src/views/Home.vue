<template>
  <div class="home">
    <Header/>
    <brand-identifier/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BrandIdentifier from '@/components/brand-identifier/brand-identifier.vue'

export default {
  name: 'home',
  components: {
    Header,
    BrandIdentifier
  }
}
</script>
