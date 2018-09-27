<template>
  <div
    class="footer-links">
      <div v-for="(footerLink, index) in footerLinks"
        :key="index"
        class="footer-links__item">
        <anchor-link
          :linkTarget="footerLink.linkTarget"
          :linkText="footerLink.linkText"
          :linkTargetLocation="footerLink.linkTargetLocation"
          backgroundColor="transparent"/>
      </div>
  </div>
</template>

<script>
import AnchorLink from '@/components/anchor-link/anchor-link.vue'
export default {
  name: 'footerlinks',
  data() {
    return {
      footerLinks: [
        {
          linkText: 'Kontakt',
          linkTarget: 'https://mobile.lufthansa.com/rs/dcep/contact?l=de'
          //linkTargetLocation: '_blank'
        },
        {
          linkText: 'Feedback',
          linkTarget: 'https://mobile.lufthansa.com/rs/dcep/feedback?l=de'
        },
        {
          linkText: 'ABB',
          linkTarget: 'https://mobile.lufthansa.com/rs/dcep/termsandconditions?l=de'
        },
        {
          linkText: 'FAQ',
          linkTarget: 'https://mobile.lufthansa.com/faq/start.jsp?l=de'
        },
        {
          linkText: 'Newsletter',
          linkTarget: 'https://mobile.lufthansa.com/rs/newsletter?l=de'
        },
        {
          linkText: 'Zur Webseite',
          linkTarget: 'http://www.lufthansa.com/online/portal/lh/de/homepage?l=de&no-mobile-redirect=Y'
        },
        {
          linkText: 'Datenschutz',
          linkTarget: 'https://mobile.lufthansa.com/hpg/privacy.jsp?l=de'
        },
        {
          linkText: 'Impressum',
          linkTarget: 'https://mobile.lufthansa.com/hpg/imprint.jsp?l=de'
        },
        {
          linkText: 'Privatsphäreeinstellungen ändern',
          linkTarget: 'https://mobile.lufthansa.com/rs/home?l=de#'
        }
      ]
    }
  },
  components: {
    AnchorLink
  }
}
</script>

<style lang="scss">
.footer-links {
  margin: 0;
  padding: 1.125em 0;
  @include rem(font-size, 14px);
  border-bottom: 2px solid $ote-divider;

  display: flex;

  flex-direction: row;

  flex-wrap: wrap;

  &__item {
    margin-left: 5px;
    display: inline-flex;

    &:after {
      content: '|';
      display: inline-flex;
      position: relative;
      line-height: 1em;
      align-items: center;
      margin-bottom: 4px;
      color: $ote-color;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    .anchor-link {
      display: inline;
      align-items: center;
      margin: 0;
      overflow: hidden;
      text-decoration: none;
      font-weight: bold;
      @include rem(padding, 6px 10px);
      @include rem(min-height, auto);
      span {
        @include rem(margin-right, 7px);
      }
    }
  }
}
</style>
