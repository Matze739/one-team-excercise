<template>
  <a
    class="link-collection-element"
    :href="linkTarget">
    <p>{{ linkText }}</p>
    <p v-if="hasArrow"><img src="../../assets/svg/arrow-right.svg" width="14" height="14"/></p>
    <p v-else-if="isEN" class="link-collection-element__price-infos">
      <span :class="['link-collection-element__price-infos--from', { 'lang-en': isEN }]">{{ fromText }}</span>
      <span :class="['link-collection-element__price-infos--currency', { 'lang-en': isEN }]" v-html="currencySymbol"/>
      <span :class="['link-collection-element__price-infos--price', { 'lang-en': isEN }]">{{ price }}</span>
    </p>
    <p v-else class="link-collection-element__price-infos">
      <span class="link-collection-element__price-infos--from">{{ fromText }}</span>
      <span class="link-collection-element__price-infos--price">{{ price }}</span>
      <span class="link-collection-element__price-infos--currency" v-html="currencySymbol"/>
    </p>
  </a>
</template>

<script>
export default {
  name: 'link-collection',
  props: {
    linkTarget: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: false,
      default: ''
    },
    language: {
      type: String,
      required: false,
      default: 'de'
    }
  },
  data() {
    return {
      currencies: {
        de: {
          fromText: 'ab',
          currencySymbol: '&euro;'
        },
        en: {
          fromText: 'from',
          currencySymbol: '&pound;'
        }
      }
    }
  },
  computed: {
    hasArrow() {
      return this.price === ''
    },
    isEN() {
      return this.language.toLowerCase() === 'en'
    },
    fromText() {
      return this.currencies[this.language].fromText
    },
    currencySymbol() {
      return this.currencies[this.language].currencySymbol
    }
  }
}
</script>

<style lang="scss">
.link-collection-element {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border-bottom: 1px solid $ote-social-link-border;
  text-decoration: none;
  @include rem(min-height, 50px);
  @include rem(padding, 0);
  @include rem(margin, 0 12px);
  @include rem(font-size, 14px);

  &__price-infos {
    display: flex;
    align-items: baseline;
    line-height: 1;
    margin: 0;
    padding: 0;
    &--from {
      @include rem(margin-right, 9px);
    }
    &--price {
      @include rem(font-size, 18px);
      font-weight: bold;
      @include rem(margin, 0 3px 0 0);
      &.lang-en {
        @include rem(margin, 0 0 0 3px);
      }
    }
  }
}
</style>
