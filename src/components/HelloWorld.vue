<template>
  <h1 class="hello">
    {{msg}}
  </h1>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style >
h1 {
  color: red;
}
</style>
