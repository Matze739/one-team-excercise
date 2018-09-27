<template>
  <a
    class="anchor-link"
    :href="linkTarget"
    :target="linkTargetLocation"
    :style="{
      'background-color': backgroundColor,
      'color': textColor,
      'border': borderColor ? '1px solid ' + borderColor : null,
      'justify-content': textAlign
    }">
      <span
        v-if="icon"
        :class="[
          'root-icon',
          icon
        ]"/>
      {{ linkText }}
  </a>    
</template>

<script>
export default {
  name: 'anchor-link',
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: '#ffad00'
    },
    textColor: {
      type: String,
      required: false,
      default: '#05164d'
    },
    borderColor: {
      type: String,
      required: false,
      default: 'null'
    },
    linkTarget: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    linkTargetLocation: {
      type: String,
      required: false,
      default: '_self'
    }
  },
  computed: {
    textAlign() {
      return this.icon === null ? 'center' : 'left'
    }
  }
}
</script>

<style lang="scss">
.anchor-link {
  display: flex;
  align-items: center;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  font-weight: bold;
  @include rem(font-size, 14px);
  @include rem(padding, 10px);
  @include rem(min-height, 40px);
  span {
    @include rem(margin-right, 7px);
  }
}
</style>
