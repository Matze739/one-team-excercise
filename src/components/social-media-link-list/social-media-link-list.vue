<template>
  <div
    class="social-media">
      <social-media-link
        v-for="(socialMediaLink, index) in socialMediaLinks"
        :key="index"
        :linkTarget="socialMediaLink.linkTarget"
        :linkText="socialMediaLink.linkText"
        :iconName="socialMediaLink.iconName"/>
  </div>
</template>

<script>
import SocialMediaLink from '@/components/social-media-link/social-media-link.vue'
export default {
  name: 'social-media-link-list',
  data() {
    return {
      socialMediaLinks: [
        {
          linkTarget: 'https://m.facebook.com/lufthansa',
          linkText: 'Facebook',
          iconName: 'facebook'
        },
        {
          linkTarget: 'https://mobile.twitter.com/Lufthansa_DE',
          linkText: 'Twitter',
          iconName: 'twitter'
        }
      ]
    }
  },
  components: {
    SocialMediaLink
  }
}
</script>
