<template>
  <div class="social-media-link-container">
    <a
      :class="['social-media-link-container__link icon-' + iconName]"    
      :href="linkTarget"
      target="_blank"
    >
      {{ linkText }}
    </a>    
  </div>
</template>

<script>
export default {
  name: 'social-media-link',
  props: {
    linkTarget: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.social-media-link-container {
  display: block;
  border-top: 3px solid $ote-social-link-border;
  @include rem(padding, 12px);

  &__link {
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    @include rem(font-size, 14px);
    @include rem(height, 24px);
    @include rem(padding-left, 32px);
  }
}
</style>
