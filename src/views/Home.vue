<template>
  <div class="home">
    <Header/>
    <social-media-link-list/>
    <brand-identifier/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SocialMediaLinkList from '@/components/social-media-link-list/social-media-link-list.vue'
import BrandIdentifier from '@/components/brand-identifier/brand-identifier.vue'

export default {
  name: 'home',
  components: {
    Header,
    SocialMediaLinkList,
    BrandIdentifier
  }
}
</script>
