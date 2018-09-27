<template>
  <div class="home">
    <Header/>
    <footer-links/>
    <brand-identifier/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import FooterLinks from '@/components/footer-links/footer-links.vue'
import BrandIdentifier from '@/components/brand-identifier/brand-identifier.vue'

export default {
  name: 'home',
  components: {
    Header,
    FooterLinks,
    BrandIdentifier
  }
}
</script>
